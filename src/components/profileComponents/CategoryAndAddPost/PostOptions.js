// Это вообще для другого компонента вроде, просто логика вроде найс, можно
// будет что-то подобное заюзать
// const [isPinned, setPinned] = useState(false);
export function PostOptions(option) {
    switch (option) {
        case 'pin':
        setPinned(!isPinned);
        onPin(post.id, !isPinned);
        break;
        case 'edit':
        const newText = prompt('Введите новый текст:', post.text);
        if (newText) {
            onEdit(post.id, newText);
        }
        break;
        case 'delete':
        onDelete(post.id);
        break;
    };
};