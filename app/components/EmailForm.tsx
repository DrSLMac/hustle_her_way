import { Button } from "@/components/ui/button";
import React, { ChangeEvent, FormEvent, useState } from "react";
import axios from 'axios';
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast"


const EmailForm = () => {
  const [emailInput, setEmailInput] = useState("");
  const [message, setMessage] = useState('');
  const { toast } = useToast()
//   const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {};

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("this has been clicked")
    try {
      const response = await axios.post('/api/subscribe', { emailInput });
      setMessage(response.data.message);
      setEmailInput('');
      toast({
        title: "You have successfully subscribed!",
        // description: (error),
        action: (
            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          ),
      })
    } catch (error) {
      setMessage('Failed to subscribe email!');
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        // description: (error),
        action: (
            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          ),
      })
      console.error('Error subscribing email:', error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center space-y-4 my-4 rounded-md"
    >
      <input
        type="email"
        placeholder="Enter your email address"
        value={emailInput}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setEmailInput(e.target.value)
        }
        className="rounded-md text-sm mobile:text-base w-full p-3"
      />
      <Button
        type="submit"
        className="mx-10 p-2 rounded-lg bg-secondary text-accent uppercase ease-in-out duration-300"
      >
        Sign up to receive emails
      </Button>
    </form>
  );
};

export default EmailForm;
