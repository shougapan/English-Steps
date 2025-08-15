export const conjugateSuru = (verb, lessonType, conjugationType) => {
  if (lessonType == "presentIndicitive") {
    switch (conjugationType) {
      case "plainPositive":
        return verb;
        break;
      case "plainNegative":
        verb = verb.slice(0, -2);
        verb = verb + "しない";
        return verb;
        break;
      case "politePositive":
        verb = verb.slice(0, -2);
        verb = verb + "します";
        return verb;
        break;
      case "politeNegative":
        verb = verb.slice(0, -2);
        verb = verb + "しません";
        return verb;
        break;
    }
  }
  if (lessonType == "pastIndicitive") {
    switch (conjugationType) {
      case "plainPositive":
        verb = verb.slice(0, -2);
        verb = verb + "した";
        return verb;
        break;
      case "plainNegative":
        verb = verb.slice(0, -2);
        verb = verb + "しなかった";
        return verb;
        break;
      case "politePositive":
        verb = verb.slice(0, -2);
        verb = verb + "しました";
        return verb;
        break;
      case "politeNegative":
        verb = verb.slice(0, -2);
        verb = verb + "しませんでした";
        return verb;
        break;
    }
  }
  if (lessonType == "presumptive") {
    switch (conjugationType) {
      case "plainPositive":
        verb = verb.slice(0, -2);
        verb = verb + "しよう";
        return verb;
        break;
      case "plainNegative":
        verb = verb.slice(0, -2);
        verb = verb + "しないだろう";
        return verb;
        break;
      case "politePositive":
        verb = verb.slice(0, -2);
        verb = verb + "しましょう";
        return verb;
        break;
      case "politeNegative":
        verb = verb.slice(0, -2);
        verb = verb + "しませんでしょう";
        return verb;
        break;
    }
  }
  if (lessonType == "pastPresumptive") {
    switch (conjugationType) {
      case "plainPositive":
        verb = verb.slice(0, -2);
        verb = verb + "したろう";
        return verb;
        break;
      case "plainNegative":
        verb = verb.slice(0, -2);
        verb = verb + "しなかっただろう";
        return verb;
        break;
      case "politePositive":
        verb = verb.slice(0, -2);
        verb = verb + "しましたろう";
        return verb;
        break;
      case "politeNegative":
        verb = verb.slice(0, -2);
        verb = verb + "しなかたでしょう";
        return verb;
        break;
    }
  }
  if (lessonType == "imperative") {
    switch (conjugationType) {
      case "plainPositive":
        verb = verb.slice(0, -2);
        verb = verb + "しろ";
        return verb;
        break;
      case "plainNegative":
        verb = verb + "な";
        return verb;
        break;
      case "politePositive":
        verb = verb.slice(0, -2);
        verb = verb + "してください";
        return verb;
        break;
      case "politeNegative":
        verb = verb.slice(0, -2);
        verb = verb + "しないでください";
        return verb;
        break;
    }
  }

  if (lessonType == "presentProgressive") {
    switch (conjugationType) {
      case "plainPositive":
        verb = verb.slice(0, -2);
        verb = verb + "している";
        return verb;
        break;
      case "plainNegative":
        verb = verb.slice(0, -2);
        verb = verb + "していない";
        return verb;
        break;
      case "politePositive":
        verb = verb.slice(0, -2);
        verb = verb + "しています";
        return verb;
        break;
      case "politeNegative":
        verb = verb.slice(0, -2);
        verb = verb + "していません";
        return verb;
        break;
    }
  }
  if (lessonType == "pastProgressive") {
    switch (conjugationType) {
      case "plainPositive":
        verb = verb.slice(0, -2);
        verb = verb + "していた";
        return verb;
        break;
      case "plainNegative":
        verb = verb.slice(0, -2);
        verb = verb + "していなかった";
        return verb;
        break;
      case "politePositive":
        verb = verb.slice(0, -2);
        verb = verb + "していました";
        return verb;
        break;
      case "politeNegative":
        verb = verb.slice(0, -2);
        verb = verb + "していました";
        return verb;
        break;
    }
  }
  if (lessonType === "eba") {
    switch (conjugationType) {
      case "plainPositive":
      case "politePositive":
        verb = verb.slice(0, -2);
        return verb + "すれば";
      case "plainNegative":
      case "politeNegative":
        verb = verb.slice(0, -2);
        return verb + "しなければ";
      default:
        throw new Error(
          `Unexpected value for conjugationType: ${conjugationType}`
        );
    }
  }
  if (lessonType == "tara") {
    switch (conjugationType) {
      case "plainPositive":
        verb = verb.slice(0, -2);
        verb = verb + "したら";
        return verb;
        break;
      case "plainNegative":
        verb = verb.slice(0, -2);
        verb = verb + "しなかったら";
        return verb;
        break;
      case "politePositive":
        verb = verb.slice(0, -2);
        verb = verb + "しましたら";
        return verb;
        break;
      case "politeNegative":
        verb = verb.slice(0, -2);
        verb = verb + "しませんでしたら";
        return verb;
        break;
    }
  }
  if (lessonType == "potential") {
    switch (conjugationType) {
      case "plainPositive":
        verb = verb.slice(0, -2);
        verb = verb + "できる";
        return verb;
        break;
      case "plainNegative":
        verb = verb.slice(0, -2);
        verb = verb + "できない";
        return verb;
        break;
      case "politePositive":
        verb = verb.slice(0, -2);
        verb = verb + "できます";
        return verb;
        break;
      case "politeNegative":
        verb = verb.slice(0, -2);
        verb = verb + "できません";
        return verb;
        break;
    }
  }
  if (lessonType == "passive") {
    switch (conjugationType) {
      case "plainPositive":
        verb = verb.slice(0, -2);
        verb = verb + "される";
        return verb;
        break;
      case "plainNegative":
        verb = verb.slice(0, -2);
        verb = verb + "されない";
        return verb;
        break;
      case "politePositive":
        verb = verb.slice(0, -2);
        verb = verb + "されます";
        return verb;
        break;
      case "politeNegative":
        verb = verb.slice(0, -2);
        verb = verb + "されません";
        return verb;
        break;
    }
  }

  if (lessonType == "causative") {
    switch (conjugationType) {
      case "plainPositive":
        verb = verb.slice(0, -2);
        verb = verb + "させる";
        return verb;
        break;
      case "plainNegative":
        verb = verb.slice(0, -2);
        verb = verb + "させない";
        return verb;
        break;
      case "politePositive":
        verb = verb.slice(0, -2);
        verb = verb + "させます";
        return verb;
        break;
      case "politeNegative":
        verb = verb.slice(0, -2);
        verb = verb + "させません";
        return verb;
        break;
    }
  }
};
