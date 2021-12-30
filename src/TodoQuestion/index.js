import React from 'react'

function TodoQuestion() {
    return(
        <div>
            <label>
                Aun no has completado este ToDo. ¿Quieres borrarlo?🤔
            </label>
            <div>
                <button>
                    Cancelar
                </button>
                <button>
                    Continuar
                </button>
            </div>
        </div>
    );
}

export { TodoQuestion };