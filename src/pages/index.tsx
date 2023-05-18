import { Header } from "@/components/Header/header";
import { Sidebar } from "@/components/SideBar/SideBar";

export default function Home() {
  return (
    <div className="w-screen">
      <Header/>
      <Sidebar/>
    </div>
  )
}
