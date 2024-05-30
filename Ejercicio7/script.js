const $ =(id) => document.getElementById(id)
const lista =$("lista")
const tareas= $("tarea");

const obtenerDatos = async () =>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log("llegaron los datos!");
    if (res.ok) {
        const data = await res.json();
        console.log(data)
        data.forEach((usuario) => {
            const item = document.createElement("li");
            item.innerHTML = `${usuario.id} - ${usuario.name} - ${usuario.username} - ${usuario.email} - ${usuario.website} `;
            item.appendChild(btnvertareas(usuario.id,usuario.name))
            lista.appendChild(item)
        })
    }
}

const btnvertareas = (userId,userName) => {
    const btn = document.createElement("button")
    btn.innerHTML= "Ver tareas"
    btn.addEventListener("click", async () => {
        tareas.innerHTML =`Tareas de ${userName}`
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/users/${userId}/todos`
        )
        if (res.ok) {
            const data = await res.json()
            data.forEach((tarea) => {
                const item= document.createElement("li")
                if (tarea.completed) {
                    item.style.color="green"    
                } else {
                    item.style.color="red"
                }
                item.innerHTML=`${tarea.id} - ${tarea.title} -${tarea.completed ? "completado":"Pendiente..."}`
        
                tareas.appendChild(item)
            })
        }
    })
    return btn
}
obtenerDatos()