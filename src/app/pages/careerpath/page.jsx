import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, CheckCircle, Circle, Clock, Briefcase, GraduationCap, TrendingUp } from "lucide-react";

const CareerPath = () => {
  const careerLevels = [
    {
      level: "Junior Developer",
      status: "completed",
      timeline: "2019-2021",
      skills: ["HTML/CSS", "JavaScript", "React Basics", "Git"],
      description: "Foundation in web development and programming fundamentals."
    },
    {
      level: "Mid-Level Developer",
      status: "completed",
      timeline: "2021-2023",
      skills: ["Advanced React", "Node.js", "Databases", "Testing"],
      description: "Building complex applications and working with backend technologies."
    },
    {
      level: "Senior Developer",
      status: "current",
      timeline: "2023-Present",
      skills: ["System Design", "Leadership", "Architecture", "TypeScript"],
      description: "Leading projects and mentoring junior developers.",
      progress: 75
    },
    {
      level: "Tech Lead",
      status: "upcoming",
      timeline: "2024-2026",
      skills: ["Team Management", "Technical Strategy", "Stakeholder Communication"],
      description: "Leading technical decisions and managing development teams."
    },
    {
      level: "Engineering Manager",
      status: "future",
      timeline: "2026+",
      skills: ["People Management", "Strategic Planning", "Budget Management"],
      description: "Managing engineering teams and driving organizational technical strategy."
    }
  ];

  const alternativePaths = [
    {
      title: "Technical Architect",
      description: "Focus on system design and technical architecture",
      timeframe: "2-3 years",
      demand: "High",
      skills: ["Microservices", "Cloud Architecture", "Security", "Performance"]
    },
    {
      title: "Product Engineer",
      description: "Bridge between engineering and product management",
      timeframe: "1-2 years",
      demand: "Very High",
      skills: ["User Research", "Product Analytics", "A/B Testing", "UX Design"]
    },
    {
      title: "DevOps Engineer",
      description: "Specialize in deployment, infrastructure, and automation",
      timeframe: "1-2 years",
      demand: "High",
      skills: ["Docker", "Kubernetes", "CI/CD", "Cloud Platforms"]
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case "current":
        return <Clock className="w-6 h-6 text-primary" />;
      default:
        return <Circle className="w-6 h-6 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "current":
        return "bg-primary/10 text-primary";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Overview */}
      <div className="mb-8">
        <Card className="bg-gradient-to-r from-primary/5 to-blue-600/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              Your Career Journey
            </CardTitle>
            <CardDescription className="text-base">
              Track your progression from Junior Developer to Engineering Leadership
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Current Level</p>
                <p className="text-lg font-semibold">Senior Developer</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Progress to Tech Lead</p>
                <div className="flex items-center gap-2">
                  <Progress value={75} className="w-20" />
                  <span className="text-sm font-medium">75%</span>
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Est. Time to Next Level</p>
                <p className="text-lg font-semibold text-primary">8 months</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Career Path */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6">Primary Career Track</h2>
          <div className="space-y-6">
            {careerLevels.map((level, index) => (
              <Card
                key={index}
                className={`relative ${
                  level.status === "current" ? "ring-2 ring-primary/20 bg-primary/5" : ""
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      {getStatusIcon(level.status)}
                      <div>
                        <CardTitle className="text-lg">{level.level}</CardTitle>
                        <CardDescription>{level.timeline}</CardDescription>
                      </div>
                    </div>
                    <Badge className={getStatusColor(level.status)}>
                      {level.status === "current" ? "Current" : level.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{level.description}</p>

                  {level.progress && (
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progress</span>
                        <span>{level.progress}%</span>
                      </div>
                      <Progress value={level.progress} />
                    </div>
                  )}

                  <div className="space-y-2">
                    <p className="text-sm font-medium">Key Skills:</p>
                    <div className="flex flex-wrap gap-2">
                      {level.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {level.status === "current" && (
                    <div className="mt-4 pt-4 border-t">
                      <Button className="w-full">
                        <GraduationCap className="w-4 h-4 mr-2" />
                        Continue Learning Path
                      </Button>
                    </div>
                  )}

                  {level.status === "upcoming" && (
                    <div className="mt-4 pt-4 border-t">
                      <Button variant="outline" className="w-full">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        Prepare for Next Level
                      </Button>
                    </div>
                  )}
                </CardContent>

                {index < careerLevels.length - 1 && (
                  <div className="absolute left-6 -bottom-6 w-0.5 h-6 bg-border"></div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Sidebar - Alternative Paths */}
        <div>
          <h2 className="text-xl font-bold mb-6">Alternative Career Paths</h2>
          <div className="space-y-4">
            {alternativePaths.map((path, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-base">{path.title}</CardTitle>
                    <Badge
                      variant={path.demand === "Very High" ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {path.demand} Demand
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{path.description}</p>

                  <div className="text-xs text-muted-foreground">
                    <span className="font-medium">Transition Time:</span> {path.timeframe}
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-medium">Key Skills:</p>
                    <div className="flex flex-wrap gap-1">
                      {path.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs px-2 py-0">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button variant="ghost" size="sm" className="w-full text-xs">
                    Explore Path <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Card */}
          <Card className="mt-6 bg-gradient-to-br from-primary/10 to-blue-600/10 border-primary/20">
            <CardHeader>
              <CardTitle className="text-base">Need Guidance?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Get personalized career advice from our AI career counselor.
              </p>
              <Button className="w-full">
                <Briefcase className="w-4 h-4 mr-2" />
                Get AI Guidance
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CareerPath;
