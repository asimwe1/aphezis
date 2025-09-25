import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { title } from "process"
import Marquee from "react-fast-marquee"

const projects = [
  {
    title: "Weduca Platform",
    desc: "A comprehensive educational platform designed to facilitate online learning and collaboration.",
    client: "Kenzo",
    type: "Client",
    avatar: "K",
  },
  {
    title: "NeuroLab EEG App",
    desc: "Portable EEG paired with AI-powered analytics for real-time brainwave insights.",
    client: "Internal",
    type: "Team Project",
    avatar: "N",
  },
  {
    title: "CarConnects Website",
    desc: "A modern automotive listing site with secure business email & domain integration.",
    client: "Car Connect",
    type: "Client",
    avatar: "C",
  },
  {
    title: "ApheZis Platform",
    desc: "Internal tool for managing deals, clients, and performance analytics.",
    client: "Internal",
    type: "Team Project",
    avatar: "A",
  },
  {
    title: "Genzura Platform",
    desc: "A cutting-edge Inventory project that aims to revolutionize the way businesses manage inventory and their Teams.",
    client: "Internal",
    type: "Team Project",
    avatar: "G",
  },
  {
    title: "Kibogora Polytechnic Platform",
    desc: "Manage student/organisation employee records, courses, and faculty information with ease.",
    client: "Kibogora Polytechnic",
    type: "Client",
    avatar: "K",
  },
]

export default function PortfolioSection() {
  return (
    <section className="w-full bg-muted/50 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Portfolio</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Check out some of our latest projects and see how we can help your business succeed
            </p>
          </div>
        </div>

        {/* Horizontal Infinite Scroll */}
        <div className="py-12">
          <Marquee gradient={false} speed={40} pauseOnHover={true}>
            {projects.map((proj, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="mx-3 w-80"
              >
                <Card className="bg-background h-full shadow-md">
                  <CardContent className="p-6">
                    <div className="flex flex-col space-y-4">
                      <div>
                        <h3 className="text-xl font-bold">{proj.title}</h3>
                        <p className="text-muted-foreground">{proj.desc}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="rounded-full bg-muted h-10 w-10 flex items-center justify-center">
                          <span className="font-medium text-sm">{proj.avatar}</span>
                        </div>
                        <div>
                          <p className="font-medium">{proj.client}</p>
                          <p className="text-sm text-muted-foreground">{proj.type}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}
