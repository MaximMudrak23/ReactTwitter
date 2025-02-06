export function addNewPost(text,setText,setPosts) {
  if (text.trim() === '') return;
  const newPost = {
    id: Date.now(),
    text: text,
    isPinned: false,
    likes: 0,
    saves: 0,
  };

  setPosts((allPosts) => {
    const pinned = allPosts.filter(post => post.isPinned);
    const unPinned = allPosts.filter(post => !post.isPinned);
    return [...pinned, newPost, ...unPinned];
  })
  setText('');
}

// Это вообще для другого компонента вроде, просто логика вроде найс, можно
// будет что-то подобное заюзать
// const [isPinned, setPinned] = useState(false);
//   const handleOption = (option) => {
//     switch (option) {
//       case 'pin':
//         setPinned(!isPinned);
//         onPin(post.id, !isPinned);
//         break;
//       case 'edit':
//         const newText = prompt('Введите новый текст:', post.text);
//         if (newText) {
//             onEdit(post.id, newText);
//         }
//         break;
//       case 'delete':
//         onDelete(post.id);
//         break;
//     };
//   };
  