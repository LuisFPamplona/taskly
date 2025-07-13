import {
  Calendar,
  House,
  Plus,
  ChartBarBig,
  CalendarRange,
  ChevronLeft,
  ChevronRight,
  ListFilter,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TaskList from "../components/TaskList/TaskList";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import Filter from "../components/Filter/Filter";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  const [navDisplay, setNavDisplay] = useState("hidden");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  let decoded;

  if (token) {
    const payloadBase64 = token.split(".")[1];
    decoded = JSON.parse(atob(payloadBase64));
  }

  const userId = decoded.id;

  return (
    <>
      <div>
        <Header setNavDisplay={setNavDisplay} />
        <Sidebar navDisplay={navDisplay} setNavDisplay={setNavDisplay} />
        <Filter />
        <TaskList userId={userId} />
        <Navbar />
      </div>
    </>
  );
}
