"use client";

import { useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const formSchema = z.object({
  SelectCategory: z.string().optional(),
  SelectServices: z.string().optional(),
  search: z.string().optional(),
});

export default function MyForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      SelectCategory: "",
      search: "",
    },
  });

  function onSubmit(values) {
    try {
      console.log(values);
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-12 gap-4 ">
          <div className="col-span-12 xl:order-2 xl:col-span-10">
            <FormField
              control={form.control}
              name="search"
              render={({ field }) => (
                <FormItem className="border border-[#03254E] rounded-md">
                  <FormControl>
                    <div className="relative">
                      {/* Search Icon */}
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

                      {/* Search Input */}
                      <Input
                        placeholder="Search New"
                        type="text"
                        className="pl-8" // Add left padding to prevent overlap
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-6 xl:order-1 xl:col-span-2">
            <FormField
              control={form.control}
              name="SelectCategory"
              render={({ field }) => (
                <FormItem className="border border-[#03254E] rounded-md">
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="text">
                        Text
                      </SelectItem>
                      <SelectItem value="Video">Videos</SelectItem>
                      
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-6 xl:hidden">
            <FormField
              control={form.control}
              name="SelectServices"
              render={({ field }) => (
                <FormItem className="border border-[#03254E] bg-[#03254E] text-white  rounded-md">
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Services" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Koha">
                        Koha
                      </SelectItem>
                      <SelectItem value="elibrary">
                        elibrary
                      </SelectItem>
                      <SelectItem value="DDC">
                        DDC
                      </SelectItem>
                      <SelectItem value="LLC">
                        LLC
                      </SelectItem>
                      
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      </form>
    </Form>
  );
}
