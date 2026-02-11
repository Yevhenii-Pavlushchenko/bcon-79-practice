import { renderBookModalContent } from "../render/renderBookModalContent";
import { fetchBookById } from "../services/fetchBookById";
import refs from "../utils/refs";

refs.booksList.addEventListener("click", onBookListCklick);

function onBookListCklick(event) {
  const currentEL = event.target;
  //   console.log("🚀 ~ onBookListCklick ~ currentEL:", currentEL);

  const bookCard = currentEL.closest(".js-book-card");
  //   console.log("🚀 ~ onBookListCklick ~ bookCard:", bookCard);

  if (bookCard === null) {
    return;
  }

  const {
    dataset: { bookId },
  } = bookCard;
  //   console.log("🚀 ~ onBookListCklick ~ bookId:", bookId);

  fetchBookById(bookId)
    .then(bookInfo => {
      //   console.log("🚀 ~ onBookListCklick ~ bookInfo:", bookInfo);
      renderBookModalContent(bookInfo, refs.bookModal);
      refs.bookModal.showModal();
    })
    .catch(eror => {
      console.log("🚀 ~ onBookListCklick ~ eror:", eror);
    });
}
