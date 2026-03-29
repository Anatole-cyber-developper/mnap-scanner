body {
  margin: 0;
  font-family: Arial;
  background: linear-gradient(135deg, #0f172a, #1e293b);
  color: white;
}

.container {
  text-align: center;
  padding: 40px;
}

button {
  background: #3b82f6;
  border: none;
  padding: 12px 25px;
  border-radius: 10px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background: #2563eb;
}

.cards {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
  flex-wrap: wrap;
}

.card {
  background: #1e293b;
  padding: 20px;
  border-radius: 12px;
  width: 200px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.3);
}
