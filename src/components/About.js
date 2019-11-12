import React from 'react';

// component - additional inforamtion about movies/series
const About = ({ tv, detail }) => {

    // variables
    const {
        release_date,
        homepage,
        runtime,
        genres,
        first_air_date,
        number_of_episodes,
        number_of_seasons,
        last_air_date,
        vote_average,
        episode_run_time,
    } = detail.data;

    // utils methods
    const getGenres = () => {
        if (genres) {
            const names = genres.map(a => a.name);
            return names.filter(s => s).join(', ');
        }
        return []
    }
    const getDate = date => new Date(date).toLocaleDateString();
    const cutUrlString = str => str && str.length > 38 ? str.slice(0, 35) + '...' : str;

    // render - different for movies and series
    if (tv) {
        return (
            <div className="col-md-4 single-right">
                <h3>About</h3>
                <div className="single-grid-right">
                    <ul>
                        <li>
                            Average vote: <b>{vote_average}</b>
                        </li>
                        <li>
                            Genres: <b>{getGenres()}</b>
                        </li>
                        <li>
                            First air date: <b>{getDate(first_air_date)}</b>
                        </li>
                        <li>
                            First air date: <b>{getDate(last_air_date)}</b>
                        </li>
                        {episode_run_time &&
                            <li>
                                Runtime: <b>~ {episode_run_time[0]} mins</b>
                            </li>
                        }
                        <li>
                            Episodes: <b>{number_of_episodes}</b>
                        </li>
                        <li>
                            Seasons: <b>{number_of_seasons}</b>
                        </li>
                        <li>
                            HomePage: <a href={homepage}><b>{cutUrlString(homepage)}</b></a>
                        </li>
                    </ul>
                </div>
        </div>
        )
    }

    return (
        <div className="col-md-4 single-right">
            <h3>About</h3>
            <div className="single-grid-right">
                <ul>
                    <li>
                        Average vote: <b>{vote_average}</b>
                    </li>
                    <li>
                        Genres: <b>{getGenres()}</b>
                    </li>
                    <li>
                        Release date: <b>{new Date(release_date).toLocaleDateString()}</b>
                    </li>
                    <li>
                        Runtime: <b>{runtime} mins</b>
                    </li>
                    <li>
                        HomePage: <a href={homepage}><b>{cutUrlString(homepage)}</b></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default About;