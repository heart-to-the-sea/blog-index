import { useState } from "react";

export default function useCommand() {
  const [command, setCommand] = useState<string[]>([]);
  return [command, setCommand];
}
