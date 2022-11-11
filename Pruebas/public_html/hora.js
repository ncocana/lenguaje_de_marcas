setInterval(function(){
            const clock = document.querySelector(".display");
            
//          Define las variables de la hora.
            let time = new Date();
            let sec = time.getSeconds();
            let min = time.getMinutes();
            let hr = time.getHours();
            let day = time.getDate();
            let month = time.getMonth() + 1;
            let year = time.getFullYear()
            
//          Si el número es menor a 10, añade un cero a su izquierda.
            if(sec < 10){
              sec = '0' + sec;
            }
            if(min < 10){
              min = '0' + min;
            }
            if(hr < 10){
              hr = '0' + hr;
            }
            if(day < 10){
              day = '0' + day;
            }
            if(month < 10){
              month = '0' + month;
            }
            
//          Define las varibales finales de la fecha y la hora.
            var fecha = day + '-' + month + '-' + year;
            var hour = hr + ':' + min + ':' + sec;
            
//          Define el resultado final a mostrar.
            clock.textContent = fecha + ' ' + hour;
          });
