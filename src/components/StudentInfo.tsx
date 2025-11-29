type Student = {
  name: string;
  surname: string;
  age: number;
  rating: number;
  getFullName: () => string;
};

const student: Student = {
  name: "Иван",
  surname: "Иваненко",
  age: 20,
  rating: 12,
  getFullName() {
    return `${this.name} ${this.surname}`;
  },
};

const styleObj: React.CSSProperties = {
  color: "blue",
  fontFamily: "Arial",
  padding: "10px",
  border: "3px inset #ccc",
};

export function StudentInfo() {
  return (
    <div style={styleObj}>
      <p>Полное имя: {student.getFullName()}</p>
      <p>Возраст: {student.age}</p>
      <p>Рейтинг: {student.rating}</p>
      <p>Время генерации данных: {new Date().toLocaleTimeString()}</p>
    </div>
  );
}