import { View } from "react-native";
import { BannerAd, BannerAdSize } from "react-native-google-mobile-ads";

//const testadUnitId = "ca-app-pub-3940256099942544/9214589741";
const adUnitId = "ca-app-pub-5616098433053869/6772522711";

const OnlineAD = () => {
  return (
    <View className="mt-auto">
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.INLINE_ADAPTIVE_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
          networkExtras: {
            collapsible: "bottom",
          },
        }}
      />
    </View>
  );
};

export default OnlineAD;
