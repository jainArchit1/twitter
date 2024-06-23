import Tweet from "../models/tweetSchema.js";
export const CreateTweet = async (req, res) => {
  try {
    const { description, id } = req.body;
    if (!description) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    const tweet = await Tweet.create({
      description,
      userId: id,
    });
    return res.status(200).json({
      success: true,
      message: "Tweeted",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

//******************************DELETE-Tweet*******************************/
export const Deletetweet = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Tweet.findByIdAndDelete(id);
    return res.status(200).json({
      success: true,
      message: "Tweet Deleted",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
//**********************likeordislike************************** */
export const LikeorDisLike = async (req, res) => {
  try {
    const userId = req.body.id;
    const tweetId = req.params.id;
    const tweet = await Tweet.findById(tweetId);
    if (tweet.likes.includes(userId)) {
      await tweet.updateOne({ $pull: { likes: userId } });
      return res.status(200).json({
        success: true,
        message: "Disliked",
      });
    }
    if (!tweet.likes.includes(userId)) {
      await tweet.updateOne({ $push: { likes: userId } });
      return res.status(200).json({
        success: true,
        message: "Liked",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
// ********************getAllTweet**********************
export const getAllTweet = async (req, res) => {
  try {
    
  } catch (error) {}
};
