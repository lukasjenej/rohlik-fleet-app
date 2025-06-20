import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [role, setRole] = useState("none");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "admin123") {
      setRole("admin");
    } else if (username === "kuryr" && password === "kuryr123") {
      setRole("courier");
    } else {
      alert("Nesprávné přihlašovací údaje");
    }
  };

  if (role === "admin") {
    return (
      <div className="p-4 space-y-4">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <Card>
          <CardContent className="p-4">
            <p>✔ Přehled řidičů</p>
            <p>✔ Stav vozidel (STK, pojištění)</p>
            <p>✔ Docházka a výkazy</p>
            <p>✔ Fakturace a export dat</p>
          </CardContent>
        </Card>
        <Button onClick={() => setRole("none")}>Odhlásit</Button>
      </div>
    );
  }

  if (role === "courier") {
    return (
      <div className="p-4 space-y-4">
        <h1 className="text-2xl font-bold">Kurýrský panel</h1>
        <Card>
          <CardContent className="p-4">
            <p>👋 Ahoj, zde budeš vidět své směny, výkazy a faktury</p>
          </CardContent>
        </Card>
        <Button onClick={() => setRole("none")}>Odhlásit</Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-xl font-bold mb-4">Přihlášení</h1>
      <div className="space-y-2 w-full max-w-sm">
        <Input
          placeholder="Uživatelské jméno"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          placeholder="Heslo"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className="w-full" onClick={handleLogin}>
          Přihlásit se
        </Button>
      </div>
    </div>
  );
}