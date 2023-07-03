export function formatDate(date) {
    const fecha = Intl.DateTimeFormat('es-AR', {
        day: '2-digit', month: '2-digit', year: 'numeric'
    }).format(date);

    const hora = Intl.DateTimeFormat('es-AR', {
        hour: '2-digit', minute: '2-digit', second: '2-digit'
    }).format(date);

    return `${fecha} ${hora}`;
}