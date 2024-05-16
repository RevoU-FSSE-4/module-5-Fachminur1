import Menu from '../components/Menu';
import GridNews from '../components/GridNews';
import { NewsArticle, initialItems } from '../components/Items';

const HomePage: React.FC = () => {
  const items: NewsArticle[] = initialItems;

  return (
    <div>
      <h1 className="title">See The Latest News</h1>
      <Menu />
      <GridNews items={items} />
    </div>
  );
};

export default HomePage;