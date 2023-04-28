const majorArcana = [
  {
    id: 1,
    card_id: '0',
    image_url: 'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000578/lighter/1_m5upny.png',
    name: ' The Fool',
    forward: 'Representing a new beginning in your life',
    reverse: 'You are being careless in making decisions'
  },
  {
    id: 2,
    card_id: 'I',
    image_url: 'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000574/lighter/2_njjtar.png',
    name: ' The Magician',
    forward: 'You are achieving success through your natural talent and gained experience',
    reverse:
      'Lack of confidence and decisiveness is making you negative towards everything and causing you to miss out on important opportunities'
  },
  {
    id: 3,
    card_id: 'II',
    image_url: 'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000576/lighter/3_ndj5tz.png',
    name: ' The High Priestess',
    forward:
      'You need to remove barriers and unlock the potential that has been dormant within you',
    reverse: 'You are neglecting your own emotions'
  },
  {
    id: 4,
    card_id: 'III',
    image_url: 'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000578/lighter/4_prc9jz.png',
    name: ' The Empress',
    forward: 'The timing is right to turn your dream into reality',
    reverse: 'You are feeling down because you are facing a major obstacle'
  },
  {
    id: 5,
    card_id: 'IV',
    image_url: 'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000578/lighter/5_yf45fm.png',
    name: ' The Emperor',
    forward: "Chances are you'll have a big leap forward at work.",
    reverse: 'You are lacking flexibility when dealing with problems'
  },
  {
    id: 6,
    card_id: 'V',
    image_url: 'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000579/lighter/6_xab9ku.png',
    name: ' The Hierophant',
    forward: 'Time to focus on cultivating and training yourself',
    reverse: 'You are yearning to break free from strict, restrictive rules'
  },
  {
    id: 7,
    card_id: 'VI',
    image_url: 'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000579/lighter/7_esxnvl.png',
    name: ' The Lovers',
    forward: 'You need to reconsider the issue before making a decision',
    reverse: 'Maybe you made a wrong decision and accidentally hurt someone'
  },
  {
    id: 8,
    card_id: 'VII',
    image_url: 'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000580/lighter/8_qtmooe.png',
    name: ' The Chariot',
    forward: 'Signs of a positive transition in your career',
    reverse: 'It looks like things are going off the rails that you have outlined'
  },
  {
    id: 9,
    card_id: 'VIII',
    image_url: 'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000582/lighter/9_ofdq3m.png',
    name: ' Strength',
    forward: 'Strength and patience are the keys to your success',
    reverse: 'You need to re-evaluate your abilities to find the right goal'
  },
  {
    id: 10,
    card_id: 'IX',
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000582/lighter/10_ipnxqf.png',
    name: ' The Hermit',
    forward: 'You should rest and think calmly',
    reverse: 'It seems that you are too stubborn with your opinion that ignores advice from people'
  },
  {
    id: 11,
    card_id: 'X',
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000580/lighter/11_pgv8am.png',
    name: ' The Wheel',
    forward: 'You are entering a new phase with more open opportunities',
    reverse: 'You feel bewildered and upset by unexpected changes'
  },
  {
    id: 12,
    card_id: 'XI',
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000583/lighter/12_l2srfj.png',
    name: ' Justice',
    forward: 'You need to make informed and fair decisions',
    reverse: 'Maybe you are being treated unfairly at work'
  },
  {
    id: 13,
    card_id: 'XII',
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000582/lighter/13_rpifdp.png',
    name: ' The Hanged Man',
    forward: 'You should re-evaluate your attitude, your goals',
    reverse: 'You are currently in a period of financial constraint'
  },
  {
    id: 14,
    card_id: 'XIII',
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000583/lighter/14_i5b2it.png',
    name: ' Death',
    forward: 'You are about to face significant events in your life',
    reverse: 'It seems that you are under a lot of pressure at work'
  },
  {
    id: 15,
    card_id: 'XIV',
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000585/lighter/15_bxwt8g.png',
    name: ' Temperance',
    forward: 'You are in an extremely favorable state in terms of work, relationships, and health',
    reverse: 'You are being drawn to short-term benefits and forgetting to build long-term value'
  },
  {
    id: 16,
    card_id: 'XV',
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000583/lighter/16_qns7v5.png',
    name: ' The Devil',
    forward: 'You are being tied to something that you do not enjoy',
    reverse:
      'You are taking control of your work and breaking free from toxic relationships in love'
  },
  {
    id: 17,
    card_id: 'XVI',
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000585/lighter/17_zwomaa.png',
    name: ' The Tower',
    forward: 'A sign of a big unexpected change',
    reverse: 'The end of the pain you have been enduring'
  },
  {
    id: 18,
    card_id: 'XVII',
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000586/lighter/18_ys16pq.png',
    name: ' The Star',
    forward: 'Everything is on the upswing',
    reverse: 'A shy and timid personality may cause you to miss out on many opportunities'
  },
  {
    id: 19,
    card_id: 'XVIII',
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000588/lighter/19_b1ldyt.png',
    name: ' The Moon',
    forward: 'A warning about issues of dishonesty',
    reverse: 'The issues you are wondering about will gradually become clear'
  },
  {
    id: 20,
    card_id: 'XIX',
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000586/lighter/20_mbsdv4.png',
    name: ' The Sun',
    forward: 'You are full of energy, there will be great achievements in the near future',
    reverse: 'You are not satisfied with the success you have achieved'
  },
  {
    id: 21,
    card_id: 'XX',
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000586/lighter/21_rzb13m.png',
    name: ' Judgement',
    forward: 'Everything is developing in a positive direction',
    reverse: 'You need to proactively close some issues in your life'
  },
  {
    id: 22,
    card_id: 'XXI',
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000584/lighter/22_qzkw0w.png',
    name: ' The World',
    forward: 'The upcoming results will fulfill your wishes and bring happiness to you',
    reverse: 'You are feeling stuck'
  }
]

const wands = [
  {
    id: 23,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000585/lighter/23_pfpjvg.png',
    name: 'Ace of Wands',
    forward: 'Open up a completely new direction',
    reverse: 'You are having difficulty identifying your own goals'
  },
  {
    id: 24,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000589/lighter/24_gczfdv.png',
    name: 'Two of Wands',
    forward: 'You make progress when you establish short-term and long-term plans',
    reverse: 'You may encounter some unexpected obstacles'
  },
  {
    id: 25,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000586/lighter/25_n0fv3f.png',
    name: 'Three of Wands',
    forward: 'Everything is going as expected',
    reverse: 'You experience some setbacks and delays in achieving your goals'
  },
  {
    id: 26,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000589/lighter/26_rndwwc.png',
    name: 'Four of Wands',
    forward: 'You are happy and stable',
    reverse: 'You are feeling stuck in a suffocating atmosphere'
  },
  {
    id: 27,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000589/lighter/27_b8ikjt.png',
    name: 'Five of Wands',
    forward: 'You are in the midst of conflicts and tension',
    reverse: 'You overcome your own anger'
  },
  {
    id: 28,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000589/lighter/28_d5bx1p.png',
    name: 'Six of Wands',
    forward: 'You receive success, victory, and recognition',
    reverse: 'You are feeling negative about yourself'
  },
  {
    id: 29,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000590/lighter/29_ygx1qr.png',
    name: 'Seven of Wands',
    forward: 'You are facing some challenges. Stay persistent, success will come to you soon',
    reverse: 'You are feeling insecure and vulnerable'
  },
  {
    id: 30,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000591/lighter/30_ypbp2i.png',
    name: 'Eight of Wands',
    forward: 'The struggles have come to an end',
    reverse: 'You are facing many obstacles in your goals'
  },
  {
    id: 31,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000593/lighter/31_qqcwjc.png',
    name: 'Nine of Wands',
    forward: 'Do not give up now, as you are about to achieve success',
    reverse: 'You are hesitant about commitments'
  },
  {
    id: 32,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000592/lighter/32_s7x1ka.png',
    name: 'Ten of Wands',
    forward: 'You are reaping the rewards of your own efforts',
    reverse: 'You are carrying too many burdens'
  },
  {
    id: 33,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000592/lighter/33_zt8wra.png',
    name: 'Page of Wands',
    forward: 'You are harboring many plans and just waiting for the opportunity to "explode"',
    reverse: 'You lack decisiveness about the path ahead'
  },
  {
    id: 34,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000590/lighter/34_jsw5dh.png',
    name: 'Knight of Wands',
    forward: 'You are confident and ready to conquer the world',
    reverse: 'The loss of personal power due to its negative use'
  },
  {
    id: 35,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000595/lighter/35_evyrib.png',
    name: 'Queen of Wands',
    forward: 'You are strong, independent, and creative even in the face of adversity',
    reverse: 'You lose confidence in yourself and become timid and fearful'
  },
  {
    id: 36,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000592/lighter/36_haqqbp.png',
    name: 'King of Wands',
    forward: 'A reminder to orient your life towards long-term goals and purpose',
    reverse: 'You may be making hasty and impulsive decisions'
  }
]

const pentacles = [
  {
    id: 37,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000595/lighter/37_uksfhc.png',
    name: 'Age of Pentacles',
    forward: 'You are enjoying prosperity',
    reverse: 'You can miss opportunities due to a lack of long-term vision'
  },
  {
    id: 38,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000593/lighter/38_r7r2az.png',
    name: 'Two of Pentacles',
    forward: 'The beginning of a new job',
    reverse: 'You are having difficulty managing your activities'
  },
  {
    id: 39,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000595/lighter/39_fmxu8u.png',
    name: 'Three of Pentacles',
    forward: 'The initial completion of a goal or plan',
    reverse: 'Lack of team spirit'
  },
  {
    id: 40,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000595/lighter/40_aux5fq.png',
    name: 'Four of Pentacles',
    forward: 'You have achieved your goals and made significant improvements',
    reverse: 'You are haunted by poverty and feel compelled to chase after material possessions'
  },
  {
    id: 41,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000594/lighter/41_vmabpm.png',
    name: 'Five of Pentacles',
    forward: 'You encounter difficulties in everything',
    reverse: 'Put an end to the period of hardship'
  },
  {
    id: 42,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000597/lighter/42_g3juwo.png',
    name: 'Six of Pentacles',
    forward: 'The generosity in wealth and material possessions',
    reverse: 'Be cautious about lending money to friends'
  },
  {
    id: 43,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000595/lighter/43_ycjjlx.png',
    name: 'Seven of Pentacles',
    forward: 'You are enjoying the achievements attained through challenges and efforts',
    reverse: 'You may not reap what you are seeking'
  },
  {
    id: 44,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000598/lighter/44_yq0yb1.png',
    name: 'Eight of Pentacles',
    forward: 'Positive signs for a fresh start',
    reverse: 'Your perfectionism can become a barrier'
  },
  {
    id: 45,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000597/lighter/45_eihd20.png',
    name: 'Nine of Pentacles',
    forward: 'You are reaching for confidence, freedom, and independence',
    reverse: 'You are experiencing loss due to unwise decisions'
  },
  {
    id: 46,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000596/lighter/46_zoic24.png',
    name: 'Ten of Pentacles',
    forward: 'You have reached the pinnacle of your career',
    reverse: 'Your marriage may have just ended'
  },
  {
    id: 47,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000599/lighter/47_z14xer.png',
    name: 'Page of Pentacles',
    forward: 'This is the time for you to take action, expand your business endeavors',
    reverse: 'You are feeling stuck due to a lack of prior planning'
  },
  {
    id: 48,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000601/lighter/48_khntc8.png',
    name: 'Knight of Pentacles',
    forward: 'You are about to undertake an important task',
    reverse: 'You crave to break free from the monotony'
  },
  {
    id: 49,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000599/lighter/49_phbwwa.png',
    name: 'Queen of Pentacles',
    forward: 'Representing love and care',
    reverse: 'You are concerned about financial independence'
  },
  {
    id: 50,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000597/lighter/50_h50eky.png',
    name: 'King of Pentacles',
    forward: 'You have reached the pinnacle of success',
    reverse: 'You may be abusing power, authority, and control'
  }
]

const swords = [
  {
    id: 51,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000599/lighter/51_wzkmhv.png',
    name: 'Age of Swords',
    forward: 'Representing a stage of profound insight',
    reverse: 'You are beginning to become chaotic'
  },
  {
    id: 52,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000562/lighter/52_ggsloj.png',
    name: 'Two of Swords',
    forward: 'It seems like you are hesitating, feeling stuck with an important issue',
    reverse: 'You are being swayed by the opinions of others'
  },
  {
    id: 53,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000567/lighter/53_kfyeuy.png',
    name: 'Three of Swords',
    forward: 'You are about to face sadness and separation',
    reverse: 'You have just recovered after going through hardships'
  },
  {
    id: 54,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000563/lighter/54_da0gel.png',
    name: 'Four of Swords',
    forward: 'A good time to build mental strength',
    reverse: 'You are working tirelessly, forgetting that your body needs rest'
  },
  {
    id: 55,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000565/lighter/55_w2kiyi.png',
    name: 'Five of Swords',
    forward: 'You are overly ambitious',
    reverse: 'You are ready to put an end to the stress'
  },
  {
    id: 56,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000558/lighter/56_skswn8.png',
    name: 'Six of Swords',
    forward: 'You are facing challenging transitions',
    reverse: 'You are trying to break free from the past'
  },
  {
    id: 57,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000566/lighter/57_ovjxey.png',
    name: 'Seven of Swords',
    forward: 'You are being sneaky and deceptive',
    reverse: 'You are facing challenges in a new direction'
  },
  {
    id: 58,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000565/lighter/58_xo73mf.png',
    name: 'Eight of Swords',
    forward: 'You are blindly trusting your own judgment',
    reverse: 'You are becoming more open-minded'
  },
  {
    id: 59,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000568/lighter/59_izavzz.png',
    name: 'Nine of Swords',
    forward: 'You are being self-critical',
    reverse: 'You are experiencing excessive anxiety'
  },
  {
    id: 60,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000560/lighter/60_ix5sla.png',
    name: 'Ten of Swords',
    forward: 'You will emerge from the abyss and gain valuable lessons',
    reverse: 'You will overcome the dire situation'
  },
  {
    id: 61,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000568/lighter/61_hilxm4.png',
    name: 'Page of Swords',
    forward: 'You are reflecting passion, dynamism, and enthusiasm',
    reverse: 'You are acting hastily'
  },
  {
    id: 62,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000565/lighter/62_dgvksx.png',
    name: 'Knight of Swords',
    forward: 'Explosive energy drives you forward',
    reverse: 'You can be a little impatient and arrogant'
  },
  {
    id: 63,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000570/lighter/63_x34bmz.png',
    name: 'Queen of Swords',
    forward: 'You need to handle the problem with reason rather than emotions',
    reverse: 'You should focus more on your own direction'
  },
  {
    id: 64,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000566/lighter/64_le1s7e.png',
    name: 'King of Swords',
    forward: 'This is the time for you to put aside your emotions and remain objective',
    reverse: 'You are lacking direction at this time'
  }
]

const cups = [
  {
    id: 65,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000567/lighter/65_qnbvcj.png',
    name: 'Age of Cups',
    forward: 'Opportunities for nurturing and healing',
    reverse: "You have been suppressing your emotions for too long, it's time to release them."
  },
  {
    id: 66,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000571/lighter/66_tswo5v.png',
    name: 'Two of Cups',
    forward: 'Represents marriage and harmony',
    reverse: 'You are experiencing trouble with a partner or a romantic relationship'
  },
  {
    id: 67,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000571/lighter/67_iyq0vn.png',
    name: 'Three of Cups',
    forward: 'A period of harmony with colleagues and friends',
    reverse: 'Indicates a break-up in love'
  },
  {
    id: 68,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000570/lighter/68_nw2bvb.png',
    name: 'Four of Cups',
    forward: 'You are feeling bored or dissatisfied with the present situation',
    reverse: 'You feel restless and want to escape from reality'
  },
  {
    id: 69,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000572/lighter/69_ohltgk.png',
    name: 'Five of Cups',
    forward: 'You may not achieve the results you expect',
    reverse: 'End the suffering and start a new love'
  },
  {
    id: 70,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000574/lighter/70_fy09fd.png',
    name: 'Six of Cups',
    forward: 'You remember the past, forget the present',
    reverse: 'You have unrealistic ideas'
  },
  {
    id: 71,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000569/lighter/71_stoogo.png',
    name: 'Seven of Cups',
    forward: 'Reassess the situation and make the right choice',
    reverse: 'You are wasting time pursuing things that do not belong to you'
  },
  {
    id: 72,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000570/lighter/72_h8pwsw.png',
    name: 'Eight of Cups',
    forward: 'You want to break free from the hustle and bustle of life',
    reverse: 'Giving up now is the wisest decision'
  },
  {
    id: 73,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000574/lighter/73_giteoi.png',
    name: 'Nine of Cups',
    forward: 'The final stage of development',
    reverse: 'Your desire may not be fulfilled as expected'
  },
  {
    id: 74,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000571/lighter/74_xl4ona.png',
    name: 'Ten of Cups',
    forward: 'You are happy in love and marriage',
    reverse: 'Someone is interfering in one of your relationships'
  },
  {
    id: 75,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000575/lighter/75_ncp4ws.png',
    name: 'Page of Cups',
    forward: 'A new beginning for a creative project or joint venture',
    reverse: 'An explosive emotional climax'
  },
  {
    id: 76,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000576/lighter/76_tioe8a.png',
    name: 'Knight of Cups',
    forward: 'Wisdom helps you overcome obstacles in life',
    reverse: 'Emotions are so overwhelming that they cannot be controlled'
  },
  {
    id: 77,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000573/lighter/77_rueoyl.png',
    name: 'Queen of Cups',
    forward: 'You need to empathize with the circumstances of those around you',
    reverse: 'You are feeling uneasy and tense'
  },
  {
    id: 78,
    card_id: null,
    image_url:
      'https://res.cloudinary.com/dwamtfspw/image/upload/v1682000576/lighter/78_zm9h3t.png',
    name: 'King of Cups',
    forward: 'Emotions are balanced within control',
    reverse: 'You feel overwhelmed, exhausted, and hopeless'
  }
]
