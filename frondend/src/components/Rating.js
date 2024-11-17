

function Rating(props) {
    const { rating, numReviews } = props;
    return (
        <div className="rating">
            <span>
                <li
                    className={
                        rating >= 1
                            ? 'fas fa-star'
                            : rating >= 0.5
                                ? 'far fa-star-half-alt'
                                : 'far fa-star'
                    } />
            </span>

            <span>
                <li
                    className={
                        rating >= 2
                            ? 'fas fa-star'
                            : rating >= 1.5
                                ? 'far fa-star-half-alt'
                                : 'far fa-star'
                    } />
            </span>

            <span>
                <li
                    className={
                        rating >= 3
                            ? 'fas fa-star'
                            : rating >= 3.5
                                ? 'far fa-star-half-alt'
                                : 'far fa-star'
                    } />
            </span>


            <span>
                <li
                    className={
                        rating >= 4
                            ? 'fas fa-star'
                            : rating >= 4.5
                                ? 'far fa-star-half-alt'
                                : 'far fa-star'
                    } />
            </span>

            <span>
                <li
                    className={
                        rating >= 5
                            ? 'fas fa-star'
                            : rating >= 4.5 
                                ? 'far fa-star-half-alt'
                                : 'far fa-star'
                    } />
            </span>
            <span>{numReviews} reviews</span>
        </div>
    );
}

export default Rating;