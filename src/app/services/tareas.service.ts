import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TareasService {
  private localStorageKey = 'listaTareas';

  getTareas():string[] {
    return (
      JSON.parse(localStorage.getItem(this.localStorageKey) as string) || []
    );
  }

  addTarea(tarea: string) {
    if (!tarea?.trim()) return;
    const tareas = this.getTareas();
    tareas.push(tarea.trim());
    localStorage.setItem(this.localStorageKey, JSON.stringify(tareas));
  }

  deleteTarea(index: number) {
    const tareas = this.getTareas();
    tareas.splice(index, 1);
    localStorage.setItem(this.localStorageKey, JSON.stringify(tareas));
  }
}
