import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SignInForm } from "./SignIn_Form";
import { SignUpForm } from "./SignUp_Form";

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-[400px] card relative">
      <TabsList className="grid w-full grid-cols-2 ">
        <TabsTrigger value="account">Login</TabsTrigger>
        <TabsTrigger value="password">Sign Up</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Your Personalized Stress Relief Starts Here.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <SignInForm />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>
              Feeling Overwhelmed? Find Your Peace of Mind Here
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <SignUpForm />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
