import React from "react";

type Student = {
  name: string;
  surname: string;
  age: number;
  rating: number;
  getFullName: () => string;
};

const student: Student = {
  name: "Іван",
  surname: "Іваненко",
  age: 20,
  rating: 12,
  getFullName() {
    return `${this.name} ${this.surname}`;
  },
};

const styleObj: React.CSSProperties = {
  backgroundColor: "#2f2f2f",
  color: "#e3e3e3",
  padding: "24px 32px",
  borderRadius: "16px",
  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
  border: "1px solid #444",
  fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
  maxWidth: "400px",
  margin: "20px auto",
  textAlign: "left",
  lineHeight: "1.6",
};

export function StudentInfo() {
  return (
    <div style={styleObj}>
      <p><b>Повне ім'я:</b> {student.getFullName()}</p>
      <p><b>Вік:</b> {student.age}</p>
      <p><b>Рейтинг:</b> {student.rating}</p>
      <p><b>Час генерації даних:</b> {new Date().toLocaleTimeString()}</p>
    </div>
  );
}