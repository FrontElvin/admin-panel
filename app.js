     // app.js 
     const express = require('express');
     
     // Импортируем роутеры
     const mainRoute = require('./routes/main');
     const gamesRouter = require('./routes/games'); 
     
     const PORT = 3000;
     const app = express();
     
     // Запускаем
     app.use(mainRoute, gamesRouter); 
     
     app.listen(PORT, () => {
       console.log(`Server is running at PORT http://localhost:${PORT}`);
     })
    
     // Теперь клиент имеет доступ только к публичным файлам
     // app.use(express.static(path.join(__dirname, 'public'))); 
     