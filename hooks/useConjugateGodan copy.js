export const conjugateVerb = (verb, lessonType, conjugationType) => {
  if (lessonType == "presumptive") {
    switch (conjugationType) {
      case "plain positive":
        verb = verb.slice(0, -1);
        verb = verb + "よう";
        return verb;
        break;
      case "plain negative":
        verb = verb.slice(0, -1);
        verb = verb + "ないだろう";
        return verb;
        break;
      case "polite positive":
        verb = verb.slice(0, -1);
        verb = verb + "ましょう";
        return verb;
        break;
      case "polite negative":
        verb = verb.slice(0, -1);
        verb = verb + "ないでしょう";
        return verb;
        break;
    }
  }
  if (lessonType == "pastIndicitive") {
    switch (conjugationType) {
      case "plain positive":
        verb = verb.slice(0, -1);
        verb = verb + "た";
        return verb;
        break;
      case "plain negative":
        verb = verb.slice(0, -1);
        verb = verb + "なかった";
        return verb;
        break;
      case "polite positive":
        verb = verb.slice(0, -1);
        verb = verb + "ました";
        return verb;
        break;
      case "polite negative":
        verb = verb.slice(0, -1);
        verb = verb + "ませんでした";
        return verb;
        break;
    }
  }
  if (lessonType == "imperative") {
    switch (conjugationType) {
      case "plain positive":
        verb = verb.slice(0, -1);
        verb = verb + "ろ";
        return verb;
        break;
      case "plain negative":
        verb = verb + "な";
        return verb;
        break;
      case "polite positive":
        verb = verb.slice(0, -1);
        verb = verb + "てください";
        return verb;
        break;
      case "polite negative":
        verb = verb.slice(0, -1);
        verb = verb + "ないでください";
        return verb;
        break;
    }
  }
  if (lessonType == "presentIndicitive") {
    switch (conjugationType) {
      case "plain positive":
        return verb;
        break;
      case "plain negative":
        verb = verb.slice(0, -1);
        verb = verb + "ない";
        return verb;
        break;
      case "polite positive":
        verb = verb.slice(0, -1);
        verb = verb + "ます";
        return verb;
        break;
      case "polite negative":
        verb = verb.slice(0, -1);
        verb = verb + "ません";
        return verb;
        break;
    }
  }
  if (lessonType == "pastPresumptive") {
    switch (conjugationType) {
      case "plain positive":
        verb = verb.slice(0, -1);
        verb = verb + "たろ";
        return verb;
        break;
      case "plain negative":
        verb = verb.slice(0, -1);
        verb = verb + "なかっただろ";
        return verb;
        break;
      case "polite positive":
        verb = verb.slice(0, -1);
        verb = verb + "たでしょう";
        return verb;
        break;
      case "polite negative":
        verb = verb.slice(0, -1);
        verb = verb + "なかったでしょう";
        return verb;
        break;
    }
  }
  if (lessonType == "presentProgressive") {
    switch (conjugationType) {
      case "plain positive":
        verb = verb.slice(0, -1);
        verb = verb + "ている";
        return verb;
        break;
      case "plain negative":
        verb = verb.slice(0, -1);
        verb = verb + "ていない";
        return verb;
        break;
      case "polite positive":
        verb = verb.slice(0, -1);
        verb = verb + "ています";
        return verb;
        break;
      case "polite negative":
        verb = verb.slice(0, -1);
        verb = verb + "ていません";
        return verb;
        break;
    }
  }
  if (lessonType == "pastProgressive") {
    switch (conjugationType) {
      case "plain positive":
        verb = verb.slice(0, -1);
        verb = verb + "ていた";
        return verb;
        break;
      case "plain negative":
        verb = verb.slice(0, -1);
        verb = verb + "ていなかった";
        return verb;
        break;
      case "polite positive":
        verb = verb.slice(0, -1);
        verb = verb + "ていました";
        return verb;
        break;
      case "polite negative":
        verb = verb.slice(0, -1);
        verb = verb + "ていませんでした";
        return verb;
        break;
    }
  }
  if (lessonType == "eba") {
    switch (conjugationType) {
      case "plain positive":
        verb = verb.slice(0, -1);
        verb = verb + "れば";
        return verb;
        break;
      case "plain negative":
        verb = verb.slice(0, -1);
        verb = verb + "なければ";
        return verb;
        break;
    }
  }
  if (lessonType == "tara") {
    switch (conjugationType) {
      case "plain positive":
        verb = verb.slice(0, -1);
        verb = verb + "たら";
        return verb;
        break;
      case "plain negative":
        verb = verb.slice(0, -1);
        verb = verb + "なかったら";
        return verb;
        break;
      case "polite positive":
        verb = verb.slice(0, -1);
        verb = verb + "ましたら";
        return verb;
        break;
      case "polite negative":
        verb = verb.slice(0, -1);
        verb = verb + "ませんでしたら";
        return verb;
        break;
    }
  }
  if (lessonType == "potential") {
    switch (conjugationType) {
      case "plain positive":
        verb = verb.slice(0, -1);
        verb = verb + "られる";
        return verb;
        break;
      case "plain negative":
        verb = verb.slice(0, -1);
        verb = verb + "られない";
        return verb;
        break;
      case "polite positive":
        verb = verb.slice(0, -1);
        verb = verb + "られます";
        return verb;
        break;
      case "polite negative":
        verb = verb.slice(0, -1);
        verb = verb + "られません";
        return verb;
        break;
    }
  }
  if (lessonType == "causative") {
    switch (conjugationType) {
      case "plain positive":
        verb = verb.slice(0, -1);
        verb = verb + "させる";
        return verb;
        break;
      case "plain negative":
        verb = verb.slice(0, -1);
        verb = verb + "させない";
        return verb;
        break;
      case "polite positive":
        verb = verb.slice(0, -1);
        verb = verb + "させます";
        return verb;
        break;
      case "polite negative":
        verb = verb.slice(0, -1);
        verb = verb + "させません";
        return verb;
        break;
    }
  }
  if (lessonType == "passive") {
    switch (conjugationType) {
      case "plain positive":
        verb = verb.slice(0, -1);
        verb = verb + "られる";
        return verb;
        break;
      case "plain negative":
        verb = verb.slice(0, -1);
        verb = verb + "られない";
        return verb;
        break;
      case "polite positive":
        verb = verb.slice(0, -1);
        verb = verb + "られます";
        return verb;
        break;
      case "polite negative":
        verb = verb.slice(0, -1);
        verb = verb + "られません";
        return verb;
        break;
    }
  }
};
