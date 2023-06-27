import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  PixelRatio,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Header from './Components/Header';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Filter from 'react-native-vector-icons/FontAwesome';
import ArrowRight from 'react-native-vector-icons/AntDesign';
import DatePicker from 'react-native-date-picker';

const History = ({navigation}) => {
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = size => size / fontScale;

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        text={'History'}
        onPress={() => navigation.push('CashManager')}
        iconname={'arrowleft'}
      />

      <TouchableOpacity
        onPress={() => setOpen(true)}
        activeOpacity={0.6}
        style={styles.datecont}>
        <View style={styles.innerContainer}>
          <Filter name="sort" color={'black'} size={17} />
          <Text style={[styles.DateTxt, {fontSize: getFontSize(18)}]}>
            Filter Set Date & Time
          </Text>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            height: hp('7%'),
            width: wp('10%'),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ArrowRight
            name="right"
            color={'black'}
            size={18}
            style={{alignSelf: 'flex-end', margin: wp('3%')}}
          />
        </View>
      </TouchableOpacity>
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <ScrollView
        style={{
          height: hp('91.5%'),
          width: wp('99%'),
          backgroundColor: 'white',
          alignSelf: 'center',
        }}>
        <View style={styles.detailsComp}>
          <View style={styles.pricecont}>
            <Text style={[styles.Conttxt, {fontSize: getFontSize(20)}]}>
              $20.13
            </Text>
            <Text style={[styles.Conttxt, {fontSize: getFontSize(15)}]}>
              10 AM
            </Text>
          </View>
          <View style={styles.innermiddleconts}>
            <TouchableOpacity activeOpacity={0.6} style={styles.btnCont}>
              <Text style={[styles.btntxt, {fontSize: getFontSize(15)}]}>
                PAID OFF
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.detailsComp}>
          <View style={styles.pricecont}>
            <Text style={[styles.Conttxt, {fontSize: getFontSize(20)}]}>
              $20.13
            </Text>
            <Text style={[styles.Conttxt, {fontSize: getFontSize(15)}]}>
              10 AM
            </Text>
          </View>
          <View style={styles.innermiddleconts}>
            <TouchableOpacity activeOpacity={0.6} style={styles.btnCont}>
              <Text style={[styles.btntxt, {fontSize: getFontSize(15)}]}>
                PAID OFF
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.detailsComp}>
          <View style={styles.pricecont}>
            <Text style={[styles.Conttxt, {fontSize: getFontSize(20)}]}>
              $20.13
            </Text>
            <Text style={[styles.Conttxt, {fontSize: getFontSize(15)}]}>
              10 AM
            </Text>
          </View>
          <View style={styles.innermiddleconts}>
            <TouchableOpacity activeOpacity={0.6} style={styles.btnCont}>
              <Text style={[styles.btntxt, {fontSize: getFontSize(15)}]}>
                PAID OFF
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.detailsComp}>
          <View style={styles.pricecont}>
            <Text style={[styles.Conttxt, {fontSize: getFontSize(20)}]}>
              $20.13
            </Text>
            <Text style={[styles.Conttxt, {fontSize: getFontSize(15)}]}>
              10 AM
            </Text>
          </View>
          <View style={styles.innermiddleconts}>
            <TouchableOpacity activeOpacity={0.6} style={styles.btnCont}>
              <Text style={[styles.btntxt, {fontSize: getFontSize(15)}]}>
                PAID OFF
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.detailsComp}>
          <View style={styles.pricecont}>
            <Text style={[styles.Conttxt, {fontSize: getFontSize(20)}]}>
              $20.13
            </Text>
            <Text style={[styles.Conttxt, {fontSize: getFontSize(15)}]}>
              10 AM
            </Text>
          </View>
          <View style={styles.innermiddleconts}>
            <TouchableOpacity activeOpacity={0.6} style={styles.btnCont}>
              <Text style={[styles.btntxt, {fontSize: getFontSize(15)}]}>
                PAID OFF
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.detailsComp}>
          <View style={styles.pricecont}>
            <Text style={[styles.Conttxt, {fontSize: getFontSize(20)}]}>
              $20.13
            </Text>
            <Text style={[styles.Conttxt, {fontSize: getFontSize(15)}]}>
              10 AM
            </Text>
          </View>
          <View style={styles.innermiddleconts}>
            <TouchableOpacity activeOpacity={0.6} style={styles.btnCont}>
              <Text style={[styles.btntxt, {fontSize: getFontSize(15)}]}>
                PAID OFF
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.detailsComp}>
          <View style={styles.pricecont}>
            <Text style={[styles.Conttxt, {fontSize: getFontSize(20)}]}>
              $20.13
            </Text>
            <Text style={[styles.Conttxt, {fontSize: getFontSize(15)}]}>
              10 AM
            </Text>
          </View>
          <View style={styles.innermiddleconts}>
            <TouchableOpacity activeOpacity={0.6} style={styles.btnCont}>
              <Text style={[styles.btntxt, {fontSize: getFontSize(15)}]}>
                PAID OFF
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.detailsComp}>
          <View style={styles.pricecont}>
            <Text style={[styles.Conttxt, {fontSize: getFontSize(20)}]}>
              $20.13
            </Text>
            <Text style={[styles.Conttxt, {fontSize: getFontSize(15)}]}>
              10 AM
            </Text>
          </View>
          <View style={styles.innermiddleconts}>
            <TouchableOpacity activeOpacity={0.6} style={styles.btnCont}>
              <Text style={[styles.btntxt, {fontSize: getFontSize(15)}]}>
                PAID OFF
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.detailsComp}>
          <View style={styles.pricecont}>
            <Text style={[styles.Conttxt, {fontSize: getFontSize(20)}]}>
              $20.13
            </Text>
            <Text style={[styles.Conttxt, {fontSize: getFontSize(15)}]}>
              10 AM
            </Text>
          </View>
          <View style={styles.innermiddleconts}>
            <TouchableOpacity activeOpacity={0.6} style={styles.btnCont}>
              <Text style={[styles.btntxt, {fontSize: getFontSize(15)}]}>
                PAID OFF
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  datecont: {
    height: hp('7%'),
    width: wp('100%'),
    alignSelf: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    elevation: 5,
  },
  innerContainer: {
    height: hp('7%'),
    width: wp('90%'),
    backgroundColor: 'white',
    alignItems: 'center',
    paddingLeft: wp('4%'),
    flexDirection: 'row',
  },
  DateTxt: {
    fontWeight: '400',
    color: 'black',
    marginLeft: wp('2%'),
  },
  detailsComp: {
    height: hp('10%'),
    width: wp('94%'),
    backgroundColor: 'white',
    marginTop: hp('1%'),
    elevation: 5,
    borderRadius: wp('3%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: wp('2%'),
    paddingLeft: wp('1.5%'),
    alignSelf: 'center',
  },
  innermiddleconts: {
    height: hp('10%'),
    width: wp('35%'),
    backgroundColor: 'white',
    borderRadius: wp('3%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnCont: {
    height: hp('5.5%'),
    width: wp('28%'),
    backgroundColor: '#1A72DD',
    borderRadius: wp('2%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btntxt: {
    fontWeight: '500',
    color: 'white',
  },
  Conttxt: {
    fontWeight: '400',
    color: 'black',
  },
  pricecont: {
    height: hp('10%'),
    width: wp('55%'),
    backgroundColor: 'white',
    borderRadius: wp('3%'),
    justifyContent: 'center',
    paddingLeft: wp('3%'),
  },
});

export default History;
