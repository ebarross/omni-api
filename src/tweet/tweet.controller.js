const Tweet = require('../tweet/tweet.model');

exports.getAll = async (req, res) => {
    const tweets = await Tweet.find().sort('-createdAt');

    return res.json(tweets);
}

exports.create = async (req, res) => {
    try {
        const tweet = await Tweet.create(req.body);

        req.io.emit('tweet', tweet);

        return res.status(201).json(tweet);
    } catch (e) {
        return res.status(400);
    }
}

exports.addLike = async (req, res) => {
    const tweet = await Tweet.findById(req.params.id);

    tweet.set({ likes: tweet.likes + 1 });
    await tweet.save();

    req.io.emit('like', tweet);

    return res.json(tweet);
}