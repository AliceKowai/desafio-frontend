import ProfileCard from "./components/ProfileCard"

export default function Home() {
  const userData = {
    name: "Ana Silva",
    role: "Desenvolvedora Full Stack",
    bio: "Apaixonada por criar experiências digitais incríveis. Especialista em React e Node.js.",
    image: "/profile.png", 
    stats: {
      followers: 981,
      following: 180,
      projects: 42
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-[#A06DC2] to-[#8149A7]">
      <ProfileCard {...userData} />
    </main>
  )
}