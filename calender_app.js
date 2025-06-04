function area() {
  const Start_date = document.getElementById("sd").value; 
  const End_date = document.getElementById("ed").value;
  const Start_time = document.getElementById("st").value;
  const End_time = document.getElementById("et").value;

  const text = document.getElementById("content").value;
  const date_interval = (End_date - Start_date) + 1;
   
  const time_interval = (End_time - Start_time) + 1;
   

  const display_text = document.getElementById(Start_time + '-' + Start_date);

  display_text.innerHTML = text;
  
  display_text.setAttribute('colspan', date_interval);
  // ek column header kitne aur column ko cover karega...
  display_text.setAttribute('rowspan', time_interval);
  // ek row header kitne aur rows ko cover karega....
  for (let start_t = Start_time; start_t <= End_time; start_t++)
  {
    for (let start_d = Start_date; start_d <= End_date; start_d++)
    {
      if (start_t === Start_time && start_d === Start_date)
      {
        console.log(display_text);
      }
      else {
        document.getElementById(start_t + '-' + start_d).remove();
      }
    }
  }
}

function Calendar() {
  const table = document.getElementById("calendar");
  // just to find html element in the id of calender

  const element = document.createElement('table');

  calendar.appendChild(element);
  console.log(element);
   // ye ek naya table create karega, element se table tak...
  for (let i = 0; i <= 12; i++) {
    const row = element.insertRow(i);

    for (let j = 0; j <= 30; j++) {
      const col = row.insertCell(j);

      if (i < 1) {
        if (j > 0) {
          col.innerHTML = j + " Sept";
        }

        if (j < 1) {
          col.innerHTML = "Time & Date ";  
        }

      }
        else {
        if (j < 1) {
          col.innerHTML = i + "Hrs";
        }
        else {
          col.id = i + '-' + j;
        }
      }
    }
  }
}

Calendar();
