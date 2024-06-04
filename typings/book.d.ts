interface ISBN {
  isbn10: string;
  isbn13: string;
}

interface Book {
  title: string;
  description: string;
  contributor: string;
  author: string;
  contributor_note: string;
  price: string;
  age_group: string;
  publisher: string;
  isbns: ISBN[];
}
interface BookWithId extends Book {
  id: string;
}

interface BooksApiResponse {
  status: string;
  copyright: string;
  num_results: number;
  results: Book[];
}

type NoArg = void;
