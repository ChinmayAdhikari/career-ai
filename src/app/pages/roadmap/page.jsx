import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Circle, Clock, BookOpen, Award, Target, Calendar } from "lucide-react";

const Roadmap = () => {
  const currentGoal = {
    title: "Become Senior Full-Stack Engineer",
    progress: 75,
    timeline: "6 months remaining",
    nextMilestone: "Complete System Design Certification"
  };

  const roadmapSteps = [
    {
      id: 1,
      title: "Foundation Phase",
      status: "completed",
      duration: "2 months",
      completedAt: "March 2024",
      skills: ["TypeScript Basics", "Advanced React Patterns", "Testing Fundamentals"],
      description: "Build strong foundation in modern web development"
    },
    {
      id: 2,
      title: "Backend & Architecture",
      status: "in-progress",
      duration: "2 months",
      progress: 60,
      skills: ["Node.js Advanced", "System Design", "Database Design"],
      description: "Master server-side development and architectural thinking"
    },
    {
      id: 3,
      title: "Cloud & DevOps",
      status: "upcoming",
      duration: "2 months",
      startDate: "October 2024",
      skills: ["AWS Fundamentals", "Docker", "CI/CD Pipelines"],
      description: "Learn cloud deployment and infrastructure management"
    },
    {
      id: 4,
      title: "Advanced Concepts",
      status: "upcoming",
      duration: "2 months",
      startDate: "December 2024",
      skills: ["Microservices", "Performance Optimization", "Security"],
      description: "Master advanced engineering concepts and best practices"
    }
  ];

  const weeklyPlan = [
    {
      week: "This Week",
      focus: "System Design Fundamentals",
      tasks: [
        { task: "Complete 'Scalability Patterns' course", status: "completed" },
        { task: "Practice system design interview questions", status: "in-progress" },
        { task: "Read 'Designing Data-Intensive Applications' Ch. 3", status: "pending" },
        { task: "Build distributed cache example", status: "pending" }
      ]
    },
    {
      week: "Next Week",
      focus: "Database Design Patterns",
      tasks: [
        { task: "Learn about sharding strategies", status: "pending" },
        { task: "Practice database modeling exercises", status: "pending" },
        { task: "Study CAP theorem in detail", status: "pending" },
        { task: "Implement database replication demo", status: "pending" }
      ]
    }
  ];

  const milestones = [
    {
      title: "React Expert Certification",
      date: "Completed - March 2024",
      status: "completed",
      points: 100
    },
    {
      title: "System Design Certification",
      date: "Target - September 2024",
      status: "current",
      points: 150
    },
    {
      title: "AWS Solutions Architect",
      date: "Target - November 2024",
      status: "upcoming",
      points: 200
    },
    {
      title: "Senior Engineer Promotion",
      date: "Target - February 2025",
      status: "goal",
      points: 500
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "in-progress":
        return <Clock className="w-5 h-5 text-primary" />;
      default:
        return <Circle className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-200";
      case "in-progress":
      case "current":
        return "bg-primary/10 text-primary border-primary/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Current Goal Overview */}
      <Card className="mb-8 bg-gradient-to-r from-primary/5 to-blue-600/5 border-primary/20">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                {currentGoal.title}
              </CardTitle>
              <CardDescription className="text-base">
                {currentGoal.timeline} • Next: {currentGoal.nextMilestone}
              </CardDescription>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary">{currentGoal.progress}%</div>
              <div className="text-sm text-muted-foreground">Complete</div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Progress value={currentGoal.progress} className="mb-4" />
          <Button>
            <BookOpen className="w-4 h-4 mr-2" />
            Continue Current Phase
          </Button>
        </CardContent>
      </Card>

      <Tabs defaultValue="roadmap" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="roadmap">Learning Phases</TabsTrigger>
          <TabsTrigger value="weekly">Weekly Plan</TabsTrigger>
          <TabsTrigger value="milestones">Milestones</TabsTrigger>
        </TabsList>

        <TabsContent value="roadmap" className="space-y-6">
          <div className="space-y-6 relative">
            {roadmapSteps.map((step, index) => (
              <Card
                key={step.id}
                className={step.status === 'in-progress' ? 'ring-2 ring-primary/20 bg-primary/5 relative' : 'relative'}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      {getStatusIcon(step.status)}
                      <div>
                        <CardTitle className="text-lg">
                          Phase {step.id}: {step.title}
                        </CardTitle>
                        <CardDescription>
                          {step.duration} • {step.status === 'completed' ? `Completed ${step.completedAt}` : 
                           step.status === 'in-progress' ? 'In Progress' : 
                           `Starts ${step.startDate}`}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge className={getStatusColor(step.status)}>
                      {step.status === 'in-progress' ? 'Current' : step.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{step.description}</p>
                  
                  {step.progress && (
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progress</span>
                        <span>{step.progress}%</span>
                      </div>
                      <Progress value={step.progress} />
                    </div>
                  )}

                  <div className="space-y-2">
                    <p className="text-sm font-medium">Key Skills:</p>
                    <div className="flex flex-wrap gap-2">
                      {step.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {step.status === 'in-progress' && (
                    <Button className="w-full">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Continue Learning
                    </Button>
                  )}

                  {step.status === 'upcoming' && (
                    <Button variant="outline" className="w-full">
                      <Calendar className="w-4 h-4 mr-2" />
                      Prepare for Phase
                    </Button>
                  )}
                </CardContent>
                
                {index < roadmapSteps.length - 1 && (
                  <div className="absolute left-6 -bottom-6 w-0.5 h-6 bg-border"></div>
                )}
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="weekly" className="space-y-6">
          <div className="space-y-6">
            {weeklyPlan.map((week, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{week.week}</CardTitle>
                  <CardDescription>Focus: {week.focus}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {week.tasks.map((task, taskIndex) => (
                      <div key={taskIndex} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                        {task.status === 'completed' ? (
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        ) : task.status === 'in-progress' ? (
                          <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                        ) : (
                          <Circle className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                        )}
                        <span className={`flex-1 ${task.status === 'completed' ? 'line-through text-muted-foreground' : ''}`}>
                          {task.task}
                        </span>
                        {task.status === 'in-progress' && (
                          <Badge variant="secondary" className="text-xs">In Progress</Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-primary/10 to-blue-600/10 border-primary/20">
            <CardHeader>
              <CardTitle>Weekly Commitment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">12 hours</div>
                  <div className="text-sm text-muted-foreground">Weekly Target</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">8.5 hours</div>
                  <div className="text-sm text-muted-foreground">This Week</div>
                </div>
              </div>
              <Button className="w-full">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Study Time
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="milestones" className="space-y-6">
          <div className="space-y-4">
            {milestones.map((milestone, index) => (
              <Card key={index} className={milestone.status === 'current' ? 'ring-2 ring-primary/20 bg-primary/5' : ''}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {milestone.status === 'completed' ? (
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      ) : milestone.status === 'goal' ? (
                        <Target className="w-6 h-6 text-primary" />
                      ) : (
                        <Award className="w-6 h-6 text-muted-foreground" />
                      )}
                      <div>
                        <CardTitle className="text-lg">{milestone.title}</CardTitle>
                        <CardDescription>{milestone.date}</CardDescription>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary">+{milestone.points}</div>
                      <div className="text-xs text-muted-foreground">XP Points</div>
                    </div>
                  </div>
                </CardHeader>
                {milestone.status === 'current' && (
                  <CardContent>
                    <Button className="w-full">
                      <Target className="w-4 h-4 mr-2" />
                      Work on Current Milestone
                    </Button>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Achievement Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-green-700">Total XP Earned</span>
                <span className="text-lg font-bold text-green-800">100 / 950 XP</span>
              </div>
              <Progress value={10.5} className="mb-4" />
              <p className="text-sm text-green-700 mb-4">
                Complete your next milestone to earn 150 XP and unlock advanced learning modules!
              </p>
              <Button variant="outline" className="w-full border-green-300 text-green-700 hover:bg-green-100">
                <Award className="w-4 h-4 mr-2" />
                View All Achievements
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Roadmap;
