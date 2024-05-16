// pages/news.tsx

import React from 'react';
import { GetServerSidePropsContext } from 'next';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const apiKey = '730cb6248dba456a9740f8c152836660';
  const apiUrl = `https://newsapi.org/v2/everything?q=tesla&from=2024-04-16&sortBy=publishedAt&apiKey=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch news data');
    }

    const newsData: any[] = data.articles;

    return {
      props: {
        newsData
      }
    };
  } catch (error: any) {
    console.error('Error fetching news data:', error.message);
    return {
      props: {
        newsData: []
      }
    };
  }
}

const NewsPage = ({ newsData }: { newsData: any[] }) => {
  return (
    <div>
      <h1>Latest News</h1>
      <ul>
        {newsData.map((article: any, index: number) => (
          <li key={index}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsPage;
