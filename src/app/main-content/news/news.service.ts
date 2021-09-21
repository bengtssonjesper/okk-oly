import { Injectable, Type } from '@angular/core';
import { News } from 'src/app/models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  allNews: News[] = [
    new News("1", "Some Title 1","Jesper Bengtsson",new Date(),
      {
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore adipisci repellendus pariatur a amet voluptates error aliquam rem. Consequuntur, error!",
      imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOUVQRvmd9oOu0ALxxX6NjqroeRbokGCZ5zw&usqp=CAU"
      }
    ),
    new News("2", "Some Title 2","Jesper Bengtsson",new Date(),
      {
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore adipisci repellendus pariatur a amet voluptates error aliquam rem. Consequuntur, error!",
      }
    ),
    new News("3", "Some Title 3","Jesper Bengtsson",new Date(),
      {
      imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOUVQRvmd9oOu0ALxxX6NjqroeRbokGCZ5zw&usqp=CAU"
      }
    ),
    new News("4", "Some Title 4","Jesper Bengtsson",new Date(),
      {
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore adipisci repellendus pariatur a amet voluptates error aliquam rem. Consequuntur, error!",
      imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOUVQRvmd9oOu0ALxxX6NjqroeRbokGCZ5zw&usqp=CAU"
      }
    ),
    new News("5", "Some Title 5","Jesper Bengtsson",new Date(),
      {
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore adipisci repellendus pariatur a amet voluptates error aliquam rem. Consequuntur, error!",
      imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOUVQRvmd9oOu0ALxxX6NjqroeRbokGCZ5zw&usqp=CAU"
      }
    ),
    new News("6", "Some Title 6","Jesper Bengtsson",new Date(),
      {
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore adipisci repellendus pariatur a amet voluptates error aliquam rem. Consequuntur, error!",
      imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOUVQRvmd9oOu0ALxxX6NjqroeRbokGCZ5zw&usqp=CAU"
      }
    ),
    new News("7", "Some Title 7","Jesper Bengtsson",new Date(),
      {
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore adipisci repellendus pariatur a amet voluptates error aliquam rem. Consequuntur, error!",
      imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOUVQRvmd9oOu0ALxxX6NjqroeRbokGCZ5zw&usqp=CAU"
      }
    ),
    new News("8", "Some Title 8","Jesper Bengtsson",new Date(),
      {
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore adipisci repellendus pariatur a amet voluptates error aliquam rem. Consequuntur, error!",
      imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOUVQRvmd9oOu0ALxxX6NjqroeRbokGCZ5zw&usqp=CAU"
      }
    ),
    new News("9", "Some Title 9","Jesper Bengtsson",new Date(),
      {
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore adipisci repellendus pariatur a amet voluptates error aliquam rem. Consequuntur, error!",
      imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOUVQRvmd9oOu0ALxxX6NjqroeRbokGCZ5zw&usqp=CAU"
      }
    ),
    new News("10", "Some Title 10","Jesper Bengtsson",new Date(),
      {
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore adipisci repellendus pariatur a amet voluptates error aliquam rem. Consequuntur, error!",
      imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOUVQRvmd9oOu0ALxxX6NjqroeRbokGCZ5zw&usqp=CAU"
      }
    ),
    new News("11", "Some Title 11","Jesper Bengtsson",new Date(),
      {
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore adipisci repellendus pariatur a amet voluptates error aliquam rem. Consequuntur, error!",
      imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOUVQRvmd9oOu0ALxxX6NjqroeRbokGCZ5zw&usqp=CAU"
      }
     ),
  ]

  getNews() {
    return this.allNews;
  }

  getNewsPost(id: string) : News{
    const newsPost = this.allNews.find(
      (n) => {
        return n.id === id;
      }
    );
    if (newsPost === undefined) {
      throw new TypeError('Cannot find the newsPost')
    }
    return newsPost;
  }

  constructor() { }
}
