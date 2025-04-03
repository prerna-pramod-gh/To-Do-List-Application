* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: #e0f7fa; /* Added a light cyan background color */
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 500px;
}

h1 {
    text-align: center; /* Title is centered */
    color: #333;
    margin-bottom: 20px;
    font-size: 2rem;
}

.input-container {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

#taskInput {
    flex: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    transition: border-color 0.3s;
}

#taskInput:focus {
    outline: none;
    border-color: #007bff;
}

button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.1s;
}

button:hover {
    background-color: #0056b3;
    transform: scale(1.05);
}

button:active {
    transform: scale(0.95);
}

ul {
    list-style: none;
}

li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin-bottom: 10px;
    background: #f9f9f9;
    border-radius: 5px;
    transition: background 0.3s, transform 0.2s;
}

li:hover {
    background: #f1f1f1;
    transform: translateX(5px);
}

li span {
    flex: 1;
    cursor: pointer;
}

.completed {
    text-decoration: line-through;
    color: #888;
}

li button {
    background: #dc3545;
    padding: 5px 10px;
    margin-left: 5px;
}

li button:hover {
    background: #b02a37;
}

#taskCount {
    text-align: center;
    color: #555;
    margin-top: 10px;
    font-size: 0.9rem;
}
