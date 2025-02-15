"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Users } from "lucide-react";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";
import { createPrivateRaceRoom } from "@/app/_actions/room";
import { bruno_ace_sc } from "@/lib/fonts";

export default function FriendsRace() {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const { data: session } = useSession();
  const { toast } = useToast();

  return (
    <Card className="flex flex-col justify-between flex-1 text-black bg-warning">
      <CardHeader>
        <div className="grid text-center place-content-center">
          <Users className="justify-self-center" size={40} />
          <div>
            <h2 style={bruno_ace_sc.style} className="text-3xl font-bold">
              Race Friends
            </h2>
            <p className="font-light">
              Create your own racetrack and play with friends
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="grid items-center gap-2">
        <Button
          variant="black"
          disabled
          onClick={() => {
            if (!session) {
              toast({
                title: "Unauthorized",
                description: "You need to be logged in to create a racetrack",
              });
              return;
            }
            createPrivateRaceRoom({
              userId: session?.user.id,
            });
          }}
        >
          Create Room (Coming Soon)
        </Button>
        {/* <LanguageDropDown
          className="w-fit"
          codeLanguage={selectedLanguage}
          setCodeLanguage={setLanguagePrivate}
        /> */}
      </CardContent>
    </Card>
  );
}
