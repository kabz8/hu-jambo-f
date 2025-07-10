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
import { Plus } from "lucide-react";

const testimonySchema = z.object({
  title: z.string().min(1, "Title is required").max(200, "Title is too long"),
  content: z.string().min(10, "Content must be at least 10 characters").max(5000, "Content is too long"),
  category: z.enum(["personal", "group", "family", "marriage"], {
    required_error: "Please select a category",
  }),
});

type TestimonyFormData = z.infer<typeof testimonySchema>;

export default function TestimonyForm() {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<TestimonyFormData>({
    resolver: zodResolver(testimonySchema),
    defaultValues: {
      title: "",
      content: "",
      category: undefined,
    },
  });

  const createTestimonyMutation = useMutation({
    mutationFn: async (data: TestimonyFormData) => {
      const response = await apiRequest("POST", "/api/testimonies", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Testimony Submitted",
        description: "Your testimony has been submitted for review and will be published once approved.",
      });
      form.reset();
      setIsOpen(false);
      queryClient.invalidateQueries({ queryKey: ["/api/testimonies"] });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to submit testimony. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: TestimonyFormData) => {
    createTestimonyMutation.mutate(data);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-800 hover:bg-blue-900 text-white">
          <Plus className="h-4 w-4 mr-2" />
          Share Your Testimony
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Share Your Testimony</DialogTitle>
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
                    <Input placeholder="Enter testimony title" {...field} />
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
                      <SelectItem value="personal">Personal Testimony</SelectItem>
                      <SelectItem value="group">Group Testimony</SelectItem>
                      <SelectItem value="family">Family Testimony</SelectItem>
                      <SelectItem value="marriage">Marriage Testimony</SelectItem>
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
                  <FormLabel>Your Testimony</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Share your testimony here..."
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
              className="w-full bg-blue-800 hover:bg-blue-900"
              disabled={createTestimonyMutation.isPending}
            >
              {createTestimonyMutation.isPending ? "Submitting..." : "Submit Testimony"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
