import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { format, parse } from "date-fns";
// import { Helmet } from "react-helmet-async"
import HelmetLayout from "../HelmetLayout/HelmetLayout";

export default function NewsList({ news }) {
  const { t } = useTranslation();
  const branch = t("booking.city", { returnObjects: true });
  const groupedNews = groupNewsByDate(news);
  console.log(branch);
  return (
    <div>
      <HelmetLayout 
        title= "東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル - Azumaya,ハノイとダナン、ホーチミンにあるこだわりの和朝食と露天風呂、ビジネスパーソン向けホテルの東屋ベトナムホテル"
        description="Information on the Ha noi Branch of Azumaya Hotel Vietnam.We offer Japanese hospitality at prices starting from $35 per night, which is cheaper than the market price. No tips required, the reception desk can speak Japanese, the payment currency can be yen/dollar, and the shape of the outlet is the same as Japan, so people who come from Vietnam to a foreign country, Vietnam, can feel at ease."
        pagelink="http://tunglam.site/"
        og_description="Information on the Ha noi Branch of Azumaya Hotel Vietnam.We offer Japanese hospitality at prices starting from $35 per night, which is cheaper than the market price. No tips required, the reception desk can speak Japanese, the payment currency can be yen/dollar, and the shape of the outlet is the same as Japan, so people who come from Vietnam to a foreign country, Vietnam, can feel at ease."
        og_sitename="東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル - Azumaya,ハノイとダナン、ホーチミンにあるこだわりの和朝食と露天風呂、ビジネスパーソン向けホテルの東屋ベトナムホテル"
        og_type="website"
        
    />
    {/* <Helmet>
    <meta name="description" content="Explore the world of Azumaya Hotel through the latest news and unique articles about travel, cuisine, and outstanding experiences at top destinations. Share captivating stories about lifestyle, local culture, and the amazing things awaiting you at Azumaya Hotel. Don't miss the opportunity to experience unforgettable moments with us!" />
    <meta name="robots" content="max-image-preview:large" />
		<link rel="canonical" href="https://azumayavietnam.com/news/" />
		<meta property="og:locale" content="en_US" />
		<meta property="og:site_name" content="東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル - Azumaya,ハノイとダナン、ホーチミンにあるこだわりの和朝食と露天風呂、ビジネスパーソン向けホテルの東屋ベトナムホテル" />
		<meta property="og:type" content="article" />
		<meta property="og:title" content="News - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル" />
		<meta property="og:url" content="https://azumayavietnam.com/news/" />
    <meta property="og:image" content="https://res.cloudinary.com/dtdfsaaei/image/upload/v1701655335/AzumayaWeb/welcome-bg_z5dr6z.jpg"/>
    <meta property="og:description" content="Explore the world of Azumaya Hotel through the latest news and unique articles about travel, cuisine, and outstanding experiences at top destinations. Share captivating stories about lifestyle, local culture, and the amazing things awaiting you at Azumaya Hotel. Don't miss the opportunity to experience unforgettable moments with us!" />
		<meta property="article:published_time" content="2016-10-25T14:09:14+00:00" />
		<meta property="article:modified_time" content="2016-12-12T04:59:08+00:00" />
		<meta name="twitter:card" content="summary" />
		<meta name="twitter:title" content="News - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル" />
		<script type="application/ld+json" class="aioseo-schema">
			{`"@context":"https:\/\/schema.org","@graph":[{"@type":"WebSite","@id":"https:\/\/azumayavietnam.com\/#website","url":"https:\/\/azumayavietnam.com\/","name":"\u6771\u5c4b\u30db\u30c6\u30eb\u30d9\u30c8\u30ca\u30e0\uff5c\u30cf\u30ce\u30a4\u30db\u30fc\u30c1\u30df\u30f3\u30c0\u30ca\u30f3\u306e\u30d3\u30b8\u30cd\u30b9\u30db\u30c6\u30eb","description":"Azumaya,\u30cf\u30ce\u30a4\u3068\u30c0\u30ca\u30f3\u3001\u30db\u30fc\u30c1\u30df\u30f3\u306b\u3042\u308b\u3053\u3060\u308f\u308a\u306e\u548c\u671d\u98df\u3068\u9732\u5929\u98a8\u5442\u3001\u30d3\u30b8\u30cd\u30b9\u30d1\u30fc\u30bd\u30f3\u5411\u3051\u30db\u30c6\u30eb\u306e\u6771\u5c4b\u30d9\u30c8\u30ca\u30e0\u30db\u30c6\u30eb","inLanguage":"en-US","publisher":{"@id":"https:\/\/azumayavietnam.com\/#organization"}},{"@type":"Organization","@id":"https:\/\/azumayavietnam.com\/#organization","name":"\u6771\u5c4b\u30db\u30c6\u30eb\u30d9\u30c8\u30ca\u30e0\uff5c\u30cf\u30ce\u30a4\u30db\u30fc\u30c1\u30df\u30f3\u30c0\u30ca\u30f3\u306e\u30d3\u30b8\u30cd\u30b9\u30db\u30c6\u30eb","url":"https:\/\/azumayavietnam.com\/"},{"@type":"BreadcrumbList","@id":"https:\/\/azumayavietnam.com\/news\/#breadcrumblist","itemListElement":[{"@type":"ListItem","@id":"https:\/\/azumayavietnam.com\/#listItem","position":1,"item":{"@type":"WebPage","@id":"https:\/\/azumayavietnam.com\/","name":"Home","description":"Azumaya,\u30cf\u30ce\u30a4\u3068\u30c0\u30ca\u30f3\u3001\u30db\u30fc\u30c1\u30df\u30f3\u306b\u3042\u308b\u3053\u3060\u308f\u308a\u306e\u548c\u671d\u98df\u3068\u9732\u5929\u98a8\u5442\u3001\u30d3\u30b8\u30cd\u30b9\u30d1\u30fc\u30bd\u30f3\u5411\u3051\u30db\u30c6\u30eb\u306e\u6771\u5c4b\u30d9\u30c8\u30ca\u30e0\u30db\u30c6\u30eb","url":"https:\/\/azumayavietnam.com\/"},"nextItem":"https:\/\/azumayavietnam.com\/news\/#listItem"},{"@type":"ListItem","@id":"https:\/\/azumayavietnam.com\/news\/#listItem","position":2,"item":{"@type":"WebPage","@id":"https:\/\/azumayavietnam.com\/news\/","name":"News","url":"https:\/\/azumayavietnam.com\/news\/"},"previousItem":"https:\/\/azumayavietnam.com\/#listItem"}]},{"@type":"WebPage","@id":"https:\/\/azumayavietnam.com\/news\/#webpage","url":"https:\/\/azumayavietnam.com\/news\/","name":"News - \u6771\u5c4b\u30db\u30c6\u30eb\u30d9\u30c8\u30ca\u30e0\uff5c\u30cf\u30ce\u30a4\u30db\u30fc\u30c1\u30df\u30f3\u30c0\u30ca\u30f3\u306e\u30d3\u30b8\u30cd\u30b9\u30db\u30c6\u30eb","inLanguage":"en-US","isPartOf":{"@id":"https:\/\/azumayavietnam.com\/#website"},"breadcrumb":{"@id":"https:\/\/azumayavietnam.com\/news\/#breadcrumblist"},"datePublished":"2016-10-25T14:09:14+07:00","dateModified":"2016-12-12T04:59:08+07:00"}]`}
		</script>
      </Helmet> */}
      <div className="policies__header">
        <div classNameName="container">
          <div className="row">
            <div className="col-md-12">
              <h1>{t("news.news")}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="re__breadcrumb">
              <ul className="breadcrumb__list">
                <li className="breadcrumb__item">
                  <Link to="/">
                    <i className="fa-solid fa-house"></i>
                  </Link>
                </li>
                <li className="breadcrumb__item">/</li>
                <li className="breadcrumb__item">
                  <span className="breadcrumb__title">{t("news.news")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="new_container col-md-10">
            {news.map((article) => {
               const parsedDate = parse(article.date, 'yyyy-MM-dd', new Date()); 
               const formattedDate = format(parsedDate, 'MMM do yyyy')
               const [all, month, day, suffix, year] = formattedDate.match(/(\w+) (\d+)(\w+) (\d+)/);
               console.log(formattedDate);
              if (article.allBranch == true)
               {
                return (
                  <div className="row news_block">
                    <div className="col-md-2 mt-1">
                      <div className="news_box1">
                        <div className="news_time">
                        <div className="month pl-2">{month}</div>
                        <div className="day pl-2">{day}</div>
                        <sub className="suffix pt-2">{suffix}</sub>
                        <div className="year pl-2">{year}</div>
                        </div>
                        <div className="danang">{t("header.dn")}</div>
                        <div className="hanoi">{t("header.hn")}</div>
                        <div className="haiphong">{t("header.hp")}</div>
                        <div className="hochiminh">{t("header.hcm")}</div>
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div key={article.id}>
                        <Link
                          className="news_title"
                          to={`/News/${encodeURIComponent(article.title)}`}
                        >
                          <div>{article.title}</div>
                        </Link>
                        <p className="news_content">
                          {`${article.content.slice(0, 250)}...`}
                        </p>
                      </div>
                      <div className="continue_read">
                        <Link
                          className="continue_link"
                          to={`/News/${encodeURIComponent(article.title)}`}
                        >
                          Continue Reading{" "}
                          <i class="fa-solid fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              } else if (article.hn == true) {
                return (
                  <div className="row news_block">
                    <div className="col-md-2 mt-1">
                      <div className="news_box1">
                        <div className="news_time">
                          <div className="month pl-2">{month}</div>
                        <div className="day pl-2">{day}</div>
                        <sub className="suffix pt-2">{suffix}</sub>
                        <div className="year pl-2">{year}</div>
                        </div>
                        <div className="hanoi">{t("header.hn")}</div>
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div key={article.id}>
                        <Link
                          className="news_title"
                          to={`/News/${encodeURIComponent(article.title)}`}
                        >
                          <div>{article.title}</div>
                        </Link>
                        <p className="news_content">
                          {`${article.content.slice(0, 250)}...`}
                        </p>
                      </div>
                      <div className="continue_read">
                        <Link
                          className="continue_link"
                          to={`/News/${encodeURIComponent(article.title)}`}
                        >
                          Continue Reading{" "}
                          <i class="fa-solid fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              } else if (article.hp == true) {
                return (
                  <div className="row news_block">
                    <div className="col-md-2 mt-1">
                      <div className="news_box1">
                        <div className="news_time">
                          <div className="month pl-2">{month}</div>
                        <div className="day pl-2">{day}</div>
                        <sub className="suffix pt-2">{suffix}</sub>
                        <div className="year pl-2">{year}</div>
                        </div>
                        <div className="haiphong">{t("header.hp")}</div>
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div key={article.id}>
                        <Link
                          className="news_title"
                          to={`/News/${encodeURIComponent(article.title)}`}
                        >
                          <div>{article.title}</div>
                        </Link>
                        <p className="news_content">
                          {`${article.content.slice(0, 250)}...`}
                        </p>
                      </div>
                      <div className="continue_read">
                        <Link
                          className="continue_link"
                          to={`/News/${encodeURIComponent(article.title)}`}
                        >
                          Continue Reading{" "}
                          <i class="fa-solid fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              } else if (article.dn == true) {
                return (
                  <div className="row news_block">
                    <div className="col-md-2 mt-1">
                      <div className="news_box1">
                        <div className="news_time">
                          <div className="month pl-2">{month}</div>
                        <div className="day pl-2">{day}</div>
                        <sub className="suffix pt-2">{suffix}</sub>
                        <div className="year pl-2">{year}</div>
                        </div>
                        <div className="danang">{t("header.dn")}</div>
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div key={article.id}>
                        <Link
                          className="news_title"
                          to={`/News/${encodeURIComponent(article.title)}`}
                        >
                          <div>{article.title}</div>
                        </Link>
                        <p className="news_content">
                          {`${article.content.slice(0, 250)}...`}
                        </p>
                      </div>
                      <div className="continue_read">
                        <Link
                          className="continue_link"
                          to={`/News/${encodeURIComponent(article.title)}`}
                        >
                          Continue Reading{" "}
                          <i class="fa-solid fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              } else if (article.hcm == true) {
                return (
                  <div className="row news_block">
                    <div className="col-md-2 mt-1 ">
                      <div className="news_box1">
                        <div className="news_time">
                          <div className="month pl-2">{month}</div>
                        <div className="day pl-2">{day}</div>
                        <sub className="suffix pt-2">{suffix}</sub>
                        <div className="year pl-2">{year}</div>
                        </div>
                        <div className="hochiminh">{t("header.hcm")}</div>
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div key={article.id}>
                        <Link
                          className="news_title"
                          to={`/News/${encodeURIComponent(article.title)}`}
                        >
                          <div>{article.title}</div>
                        </Link>
                        <p className="news_content">
                          {`${article.content.slice(0, 250)}...`}
                        </p>
                      </div>
                      <div className="continue_read">
                        <Link
                          className="continue_link"
                          to={`/News/${encodeURIComponent(article.title)}`}
                        >
                          Continue Reading{" "}
                          <i class="fa-solid fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              } else if (article.az == true) {
                return (
                  <div className="row news_block">
                    <div className="col-md-2 mt-1">
                      <div className="news_box1">
                        <div className="news_time">
                          <div className="month pl-2">{month}</div>
                        <div className="day pl-2">{day}</div>
                        <sub className="suffix pt-2">{suffix}</sub>
                        <div className="year pl-2">{year}</div>
                        </div>
                        <div className="azumaya">{t("header.az")}</div>
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div key={article.id}>
                        <Link
                          className="news_title"
                          to={`/News/${encodeURIComponent(article.title)}`}
                        >
                          <div>{article.title}</div>
                        </Link>
                        <p className="news_content">
                          {`${article.content.slice(0, 250)}...`}
                        </p>
                      </div>
                    </div>
                    <div className="continue_read">
                      <Link
                        className="continue_link"
                        to={`/News/${encodeURIComponent(article.title)}`}
                      >
                        Continue Reading <i class="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div className="col-md-2">
            <div className="recent_post-container">
              <div className="recent_post">Recent Post</div>
              <ul className="recent_news-list">
                {Object.keys(groupedNews).map((date) => (
                  <li className="recent_news-item" key={date}>
                    {/* Link to the News by Date component */}
                    <Link
                      className="recent_news-link"
                      to={`/news-by-date/${encodeURIComponent(date)}`}
                    >
                      {formatDate(date)}
                    </Link>
                  </li>
                ))}
              </ul> 
              </div>
              <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// Function to group news by date
const groupNewsByDate = (news) => {
  const groupedNews = {};

  news.forEach((article) => {
    const date = formatDate(article.date); // Assuming each article has a 'date' property
    if (!groupedNews[date]) {
      groupedNews[date] = [];
    }
    groupedNews[date].push(article);
  });

  return groupedNews;
};
const formatDate = (dateString) => {
  const parts = dateString.split('-');
  
  if (parts.length === 3) {
    // Ensure there are three parts (year, month, day) in the split array
    const year = parseInt(parts[0]);
    const month = parseInt(parts[1]) - 1; // Months are zero-indexed in JavaScript Date
    const day = parseInt(parts[2]);

    const date = new Date(year, month, day);
    if (!isNaN(date.getTime())) {
      return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
    }
  }

  // If the date string is not in the expected format or parsing fails, return the original string
  return dateString;
};