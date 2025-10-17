import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Instagram, Play, Heart, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import channelBanner from "@/assets/udit-banner.jpg";

const UditChannel = () => {
  const stats = [
    { label: "Videos", value: "100+", icon: Play },
    { label: "Engagement", value: "High", icon: Heart },
    { label: "Growing", value: "Daily", icon: TrendingUp },
  ];

  const contentHighlights = [
    {
      title: "Flirty Conversations",
      description: "Witty and charming dialogues that make you smile",
    },
    {
      title: "Relatable Scenarios",
      description: "Real couple moments everyone can connect with",
    },
    {
      title: "Comedy Gold",
      description: "Hilarious takes on boyfriend-girlfriend dynamics",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${channelBanner})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            Udit Rajput
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your daily dose of flirty conversations & relationship comedy
          </p>
          <Button 
            size="lg"
            className="gap-2 text-lg px-8 py-6"
            onClick={() => window.open('https://instagram.com', '_blank')}
          >
            <Instagram className="w-5 h-5" />
            Follow on Instagram
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-medium transition-smooth">
                  <Icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">About Udit</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Welcome to the world of charming conversations and hilarious relationship moments! 
            I create content that captures the fun, flirty, and sometimes chaotic reality of 
            boyfriend-girlfriend dynamics. Every video is designed to make you laugh, relate, 
            and maybe even learn a thing or two about relationships.
          </p>
          <div className="inline-flex items-center gap-2 text-primary">
            <Heart className="w-5 h-5 animate-pulse" />
            <span className="font-semibold">Creating smiles, one video at a time</span>
          </div>
        </div>
      </section>

      {/* Content Highlights */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            What You'll Find Here
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contentHighlights.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-medium transition-smooth">
                <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-card/50 to-background">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Join the Community
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't miss out on the latest flirty conversations and relationship comedy. 
            Follow now and be part of the fun!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="gap-2"
              onClick={() => window.open('https://instagram.com', '_blank')}
            >
              <Instagram className="w-5 h-5" />
              Follow Now
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Udit Rajput. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default UditChannel;