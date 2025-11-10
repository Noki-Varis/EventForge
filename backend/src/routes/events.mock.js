import { Router } from "express";
const r = Router();

const events = [
  { id: 101, title: "Tech Summit",  date: "2025-12-01", price: 49.99 },
  { id: 102, title: "Music Fest",   date: "2025-12-15", price: 79.00 },
  { id: 103, title: "Startup Night",date: "2026-01-05", price: 25.00 }
];

r.get("/", (_req, res) => res.json({ data: events }));
export default r;
