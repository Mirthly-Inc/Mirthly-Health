"use client";
import { z } from "zod";
import * as React from "react";
import { cn } from "@/lib/utils";
import { analyze_data } from "@/utils/a";
import { useToast } from "./ui/use-toast";
import { useForm } from "react-hook-form";
import { useData } from "@/utils/dataContext";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { updatedata } from "@/server";

const FormSchema = z.object({
  mood_level: z.string({
    required_error: "Please select your mood",
  }),
  Stress_and_Anxiety: z.string({
    required_error: "Please select your Stress level",
  }),
  Sleep: z.string({
    required_error: "Please select your Sleep Levels",
  }),
  Thoughts_and_Behaviors: z.string({
    required_error: "Please select your Thoughts and Behaviors",
  }),
  Social_Interaction: z.string({
    required_error: "Please select your Social Interaction level",
  }),
  Focus_and_Concentration: z.string({
    required_error: "Please select your Focus level",
  }),
  Motivation_and_Energy: z.string({
    required_error: "Please select your Motivation level",
  }),
  Positive_Emotions: z.string({
    required_error: "Please select your Positive Emotions",
  }),
  Self_care: z.string({
    required_error: "Please select your Self care level ",
  }),
});

export function CardWithForm() {
  const [formlevel, setFormlevel] = React.useState(0);
  const [Submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const { toast } = useToast();
  const { user,setData } = useData();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  // if (
  //   lastSubmittedDate &&
  //   !isSameDay(new Date(lastSubmittedDate), new Date())
  // ) {
  //   useDataStore.setState({
  //     hasSubmittedToday: false,
  //     lastSubmittedDate: null,
  //   });
  // }

  const onSubmit = async (datas: z.infer<typeof FormSchema>) => {
    if (Submitted) {
      toast({
        description: "You can Submit only once.",
      });
      return;
    }
    setLoading(true);
    console.log("Loading...");
    setSubmitted(true);
    const res = await analyze_data(datas);
    setData(res)
    setLoading(false);
    toast({
      description: "Your Health data has been saved successfully.",
    });
    updatedata(user, res);
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Help us understand your mood</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <div
              className={cn("flex flex-col gap-6 pb-6", {
                hidden: formlevel === 1 || formlevel === 2,
              })}
            >
              <FormField
                control={form.control}
                name="mood_level"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      How would you rate your mood Yesterday?
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select any option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Excellent">Excellent</SelectItem>
                        <SelectItem value="Good">Good</SelectItem>
                        <SelectItem value="Neutral">Neutral</SelectItem>
                        <SelectItem value="Fair">Fair</SelectItem>
                        <SelectItem value="Poor">Poor</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Stress_and_Anxiety"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Have you felt overwhelmed or stressed yesterday?
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select any option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Yes-frequently">
                          Yes, frequently
                        </SelectItem>
                        <SelectItem value="Sometimes">Sometimes</SelectItem>
                        <SelectItem value="Rarely">Rarely</SelectItem>
                        <SelectItem value="No">No</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Sleep"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      On average, how many hours of sleep do you get per night?
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select any option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Less-than-6-hours">
                          Less than 6 hours
                        </SelectItem>
                        <SelectItem value="6-7-hours">6-7 hours</SelectItem>
                        <SelectItem value="7-8-hours">7-8 hours</SelectItem>
                        <SelectItem value="More than 8 hours">
                          More than 8 hours
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div
              className={cn("flex flex-col gap-6 pb-6", {
                hidden: formlevel === 0 || formlevel === 2,
              })}
            >
              <FormField
                control={form.control}
                name="Thoughts_and_Behaviors"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Have you noticed any changes in your appetite or eating
                      habits lately?
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select any option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Significant-increase">
                          Significant increase
                        </SelectItem>
                        <SelectItem value="Slight-increase">
                          Slight increase
                        </SelectItem>
                        <SelectItem value="No-change">No change</SelectItem>
                        <SelectItem value="Slight-decrease">
                          Slight decrease
                        </SelectItem>
                        <SelectItem value="Significant-decrease">
                          Significant decrease
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Social_Interaction"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      How comfortable do you feel engaging in social activities
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select any option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Very-comfortable">
                          Very comfortable
                        </SelectItem>
                        <SelectItem value="Somewhat-comfortable">
                          Somewhat comfortable
                        </SelectItem>
                        <SelectItem value="Neutral">Neutral</SelectItem>
                        <SelectItem value="Somewhat-uncomfortable">
                          Somewhat uncomfortable
                        </SelectItem>
                        <SelectItem value="Very-uncomfortable">
                          Very uncomfortable
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Focus_and_Concentration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      How often do you find yourself easily distracted or having
                      difficulty in concentrating?
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select any option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Very-often">Very often</SelectItem>
                        <SelectItem value="Often">Often</SelectItem>
                        <SelectItem value="Sometimes">Sometimes</SelectItem>
                        <SelectItem value="Rarely">Rarely</SelectItem>
                        <SelectItem value="Never">Never</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div
              className={cn("flex flex-col gap-6 pb-6", {
                hidden: formlevel === 0 || formlevel === 1,
              })}
            >
              <FormField
                control={form.control}
                name="Motivation_and_Energy"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Compared to usual, how motivated and energetic do you
                      feel?
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select any option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="more-less-motivated">
                          Much less motivated and energetic
                        </SelectItem>
                        <SelectItem value="less-motivated">
                          Somewhat less motivated and energetic
                        </SelectItem>
                        <SelectItem value="About-the-same">
                          About the same
                        </SelectItem>
                        <SelectItem value="Somewhat-more-motivated">
                          Somewhat more motivated and energetic
                        </SelectItem>
                        <SelectItem value="Much-more-motivated">
                          Much more motivated and energetic
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="Positive_Emotions"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      How often do you experience feelings of joy, happiness, or
                      contentment?
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select any option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Very-rarely">Very rarely</SelectItem>
                        <SelectItem value="Rarely">Rarely</SelectItem>
                        <SelectItem value="Sometimes">Sometimes</SelectItem>
                        <SelectItem value="Often">Often</SelectItem>
                        <SelectItem value="Very often">Very often</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Self_care"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Have you been engaging in any self-care activities lately
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select any option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Yes-regularly">
                          Yes, regularly
                        </SelectItem>
                        <SelectItem value="Yes-occasionally">
                          Yes, occasionally
                        </SelectItem>
                        <SelectItem value="Rarely-or-not-at-all">
                          Rarely or not at all
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex w-full justify-between">
              <Button
                variant="ghost"
                className={cn({ hidden: formlevel === 0 })}
                onClick={(event) => {
                  event.preventDefault();
                  setFormlevel(formlevel - 1);
                }}
              >
                <ArrowLeft className="w-5 mr-2" />
                Back
              </Button>
              <Button
                className={cn({ hidden: formlevel === 2 })}
                onClick={(event) => {
                  event.preventDefault();
                  if (formlevel === 0) {
                    form.trigger(["mood_level", "Stress_and_Anxiety", "Sleep"]);
                    const moodlevel = form.getValues("mood_level");
                    const StressandAnxiety =
                      form.getValues("Stress_and_Anxiety");
                    const sleep = form.getValues("Sleep");
                    if (!moodlevel || !StressandAnxiety || !sleep) return;
                  }
                  if (formlevel === 1) {
                    form.trigger([
                      "Thoughts_and_Behaviors",
                      "Social_Interaction",
                      "Focus_and_Concentration",
                    ]);
                    const Thoughts = form.getValues("Thoughts_and_Behaviors");
                    const Social = form.getValues("Social_Interaction");
                    const Focus = form.getValues("Focus_and_Concentration");
                    if (!Thoughts || !Social || !Focus) return;
                  }

                  formlevel === 2 && form.trigger();
                  setFormlevel(formlevel + 1);
                }}
              >
                Next <ArrowRight className="w-5 ml-2" />
              </Button>
              <Button
                type="submit"
                className={cn(
                  { hidden: formlevel !== 2 },
                  { "cursor-progress": loading },
                  { "cursor-not-allowed": Submitted }
                )}
              >
                {loading ? <div>Saving...</div> : <div>Submit</div>}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
