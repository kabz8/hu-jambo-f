import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Heart } from "lucide-react";

const prayerRequestSchema = z.object({
  title: z.string().min(1, "Title is required").max(200, "Title is too long"),
  content: z.string().min(10, "Content must be at least 10 characters").max(5000, "Content is too long"),
  category: z.enum(["marriages", "families", "individuals", "protection", "thanksgiving"], {
    required_error: "Please select a category",
  }),
});

type PrayerRequestFormData = z.infer<typeof prayerRequestSchema>;

interface PrayerFormProps {
  category?: string;
  buttonText?: string;
}

export default function PrayerForm({ category, buttonText = "Request Prayer" }: PrayerFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<PrayerRequestFormData>({
    resolver: zodResolver(prayerRequestSchema),
    defaultValues: {
      title: "",
      content: "",
      category: category as any || undefined,
    },
  });

  const createPrayerRequestMutation = useMutation({
    mutationFn: async (data: PrayerRequestFormData) => {
      const response = await apiRequest("POST", "/api/prayer-requests", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Prayer Request Submitted",
        description: "Your prayer request has been submitted for review and will be published once approved.",
      });
      form.reset();
      setIsOpen(false);
      queryClient.invalidateQueries({ queryKey: ["/api/prayer-requests"] });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to submit prayer request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: PrayerRequestFormData) => {
    createPrayerRequestMutation.mutate(data);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
          <Heart className="h-4 w-4 mr-2" />
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Prayer Request</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter prayer request title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="marriages">For Marriages</SelectItem>
                      <SelectItem value="families">For Families</SelectItem>
                      <SelectItem value="individuals">For Individuals</SelectItem>
                      <SelectItem value="protection">Protection & Prosperity</SelectItem>
                      <SelectItem value="thanksgiving">For Thanksgiving</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prayer Request</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Share your prayer request here..."
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700"
              disabled={createPrayerRequestMutation.isPending}
            >
              {createPrayerRequestMutation.isPending ? "Submitting..." : "Submit Prayer Request"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
