'use client';

import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/250783515042', '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 shadow-lg"
    >
      <MessageCircle className="w-6 h-6 text-white" />
    </Button>
  );
}

