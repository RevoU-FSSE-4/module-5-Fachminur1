import News from './News';

interface GridNewsProps {
    items: any[];
}

const GridNews: React.FC<GridNewsProps> = ({ items }) => {
    return (
        <div> 
            {items && items.map((item, i) => (
                <News key={i} item={item}/>
            ))}
        </div>
    );
}

export default GridNews;