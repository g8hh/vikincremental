/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    'An incremental text adventure': '一款文字冒险增量游戏',
    'New Game': '新游戏',
    'Vikingcrement': '维京增量',
    '<strong>We\'re sorry but vikincremental doesn\'t work properly without JavaScript enabled. Please enable it to continue.</strong>': '<strong>很抱歉，如果没有启用 JavaScript，vikincremental 将无法正常工作。 请启用它以继续。</strong>',
    'Deer Rug': '鹿皮地毯',
    'Delve': '副本',
    'Reset': '重玩（删档）',
    'Pause': '暂停',
    'Pertains mostly to woodworking and other simple crafts.': '主要涉及木工和其他简单的工艺品。',
    'Processing': '加工',
    'Proving Grounds': '试炼场',
    'Queen Bee': '蜂王',
    'Remove': '移除',
    'A verdant paradise of sprawling hillsides dotted with trees and shrubbery.': '广阔的山坡上点缀着树木和灌木丛，是一片青翠的天堂。',
    'An inspiration to greet you at the dawn of each day.': '在每一天的黎明迎接你的灵感。',
    'Also at the start of each day is the chance for a random enemy encounter. The encounter chance is based on the number of vikings in your party, as well as your comfort level and fortification level.': '此外，每天开始时都有机会遇到随机敌人。 遭遇机会取决于您队伍中维京人的数量，以及您的舒适度和防御工事水平。',
    'A comfort for cooking, shelter, rest, and more.': '烹饪、住所、休息等的舒适环境。',
    'A Goblin Youngling has entered the battlefield!': '有哥布林幼崽登上了战场！',
    'A necessity for creating basic arms and armor.': '创建基本武器和盔甲的必要条件。',
    'Stone': '石头',
    'Swipe': '滑动',
    'Tanning Rack': '鞣架',
    'Tasks': '任务',
    'Steer Rug': '斯蒂尔地毯',
    'Longhouse': '长屋',
    'Large Bone': '大骨头',
    'Leather Scraps': '皮革废料',
    'Inventory': '库存',
    'Instruction Manual': '使用说明书',
    'Item Rate Modifier': '物品倍率修改器（不建议太大，那样毫无乐趣了）',
    'Kiln': '窑',
    'Tasks are generally controlled by equipment, but in some cases certain workshop items must be built before a task can be used. Tasks use up stamina so balancing the work of each viking is vital to sucecss.': '任务通常由装备控制，但在某些情况下，必须先建造某些车间物品才能使用任务。 任务会消耗耐力，因此平衡每个维京人的工作对于成功至关重要。',
    'The basis for crafting advanced arms and armor.': '制作高级武器和盔甲的基础。',
    'The basis for staving off hunger.': '避免饥饿的基础。',
    'The Cycle of Death and Rebirth': '死亡和重生周期',
    'The Day Cycle': '日循环',
    'The dense hide provides a soft floor.': '密集的皮毛提供柔软的地板。',
    'The foundation of making a house a home, and more.': '让房子成为家的基础等等。',
    'The original goal was to translate as much of Valheim as I could into a text-based incremental game.': '我最初的目标是将《Valheim》中的内容尽可能地转换成基于文本的增量游戏。',
    'The Proving Grounds are where vikings go to test their mettle. In Delves, vikings will explore randomly generated dungeons filled with treasure, enemies, and key items for facing each boss.': '试验场是维京人测试他们勇气的地方。 在 副本 中，维京人将探索随机生成的地牢，里面装满了宝藏、敌人和关键物品，以面对每个Boss。',
    'Housing': '住房',
    'Housing determines the maximum number of vikings available in your party. New houses will become available as your progress through the world. As you improve your housing, enemies will find you a more attractive target.': '住房决定了您的队伍中可用的维京人的最大数量。 随着您在世界各地的进步，新房子将可用。 当你改善你的住房时，敌人发现了你是一个更有吸引力的目标。',
    'Resin': '树脂',
    'Reviving costs Ichor and increases with the power of your vikings. You are able to sell off gear you have accumulated in exchange for Ichor.': '复活会消耗灵液并随着维京人的力量而增加。 你可以卖掉你积累的装备来换取灵液。',
    'show | hide': '显示 | 隐藏',
    'Small Game Hunting': '小型狩猎',
    'Smelter': '冶炼厂',
    'Small House': '小房子',
    'The soft deer skin helps to sleep through the night': '柔软的鹿皮有助于整夜安眠',
    'The start of any homestead.': '任何宅基地的开始。',
    'The tools for smithing and crafting with metals.': '用于锻造和制作金属的工具。',
    'The warm, thick furs make sleep even more delightful.': '温暖厚实的毛皮让睡眠更加愉悦。',
    'The workshop is where all of the tools to prosper can be found.': '车间是可以找到所有达到繁荣工具的地方。',
    'Vikincrement': '维京增量',
    'Vikincremental is part incremental/idle game, part text adventure, and part resource management game. Manage a party of vikings through treacherous lands by performing tasks, exploring dungeons, and challenging bosses.': '维京增量是部分增量/空闲游戏、部分文本冒险和部分资源管理游戏。 通过执行任务、探索地牢和挑战老板，在危险的土地上管理一群维京人。',
    'Vikincremental works on a day cycle of 24 hours. At the beginning of each day your vikings will rest, if able, restoring and improving their health and stamina for the day. Each viking will eat independently so make sure you have enough food for all. Resting is only possible with beds and a fire, so be sure to prioritize those items!': '维京增量的工作周期为 24 小时。 在每天开始时，您的维京人会休息，如果可以的话，恢复和改善他们当天的健康和耐力。 每个维京人都会独立进食，因此请确保您有足够的食物供所有人食用。 只有床和火才能休息，所以一定要优先考虑这些物品！',
    'Vikings': '维京人',
    'What is Vikincremental?': '什么是维京增量？',
    'A staple of any forge.': '任何锻造厂的原料。',
    'A sustainable food source.': '一个可持续的食物来源。',
    'After reviving your vikings, the world is reset back to the first biome, but your invintory and anything you have built remains.': '在复活你的维京人之后，世界被重置到第一个生物群落，但你的清单和任何你建立的东西仍然存在。',
    'Banners': '旗帜',
    'Berries': '浆果',
    'Best': '最好',
    'Bones': '骨头',
    'Campfire': '营火',
    'Chopping Block': '砧板',
    'Craft': '制作',
    ' Helmet': '头盔',
    'Wolf Rug': '狼皮地毯',
    'Wood': '木头',
    'Wood Torches': '木火炬',
    'Wood Walls': '木墙',
    'Woodcutting is necessary work to survive.': '伐木是生存的必要工作。',
    'Workbench': '工作台',
    'Workshop': '车间',
    'Worst': '最差',
    'You awaken in the clutches of an enormous black bird, its feathers shimmering in the bright sun. The wind batters your face as you come to the realization that you are being carried in the air. Regaining your senses, you have no recollection of how you came to be in this situation. From the vantage of this flight you can see green rolling meadows surrounded by a thick, impenetrable fog. The bird descends towards a mysterious stone arrangement, too well formed to be anything natural, but unlike any design you can recall.': '你在一只巨大的黑鸟的怀抱中醒来，它的羽毛在明亮的阳光下闪闪发光。 当你意识到自己被带到空中时，风吹拂着你的脸。 恢复你的感官，你不记得你是如何来到这种情况下的。 从这次飞行的有利位置，您可以看到绿色连绵起伏的草地被厚厚的、无法穿透的雾气包围。 这只鸟下降到一个神秘的石头排列处，它的形状太完美了，不可能是任何自然的东西，但与你能记得的任何设计都不一样。',
    'You step down into the darkness...': '你踏入黑暗……',
    'Copy': '复制',
    'Start': '开始',
    ', the bird squawks.': '，鸟在叫着。',
    ', you ask.': ', 你问道.',
    '\"And my reason for being here?\"': '“我来这里的原因是什么？”',
    '\"And what of the fog surrounding these lands?\"': '\“那么围绕这些土地的雾呢？\”',
    '\"But didn\'t you just say these were your lands?\"': '\“但你刚才不是说这些是你的土地吗？\”',
    '\"Hmm. Nobody has told me these are not my lands. I have been ferrying mortals such as you to these lands for as long as I can remember, but I can no longer remember why.\"': '\“嗯。没有人告诉我这些不是我的土地。从我记事起，我就一直在运送像你这样的凡人到这些土地上，但我已经记不起为什么了。\”',
    '\"So I have been carried here by you, against my will, robbed of my memory, for reasons you cannot explain?\"': '\“所以我被你强行带到这里，违背我的意愿，剥夺了我的记忆，原因你无法解释？\”',
    '\"So it seems. I can tell you what little I know. These meadows are a relatively peaceful and bountiful land. Make use of the resources you find here. Build yourself a place to rest your head and your work may be rewarded.\"': '\"看起来是这样。我可以告诉你我所知道的很少。这些草地是一片相对和平和丰富的土地。利用你在这里找到的资源。为自己建造一个休息的地方，你的工作可能会得到回报。\ ”',
    '\"That I cannot say.\"': '\“我不能说。\”',
    '\"The fog... the fog... Oh yes, the fog! Beyond the fog are more dangerous lands. One might want to steer clear of those lands, but then again, one might not.\"': '“雾……雾……哦，是的，雾！雾之外是更危险的土地。人们可能想要避开那些土地，但话说回来，人们可能不会。”',
    '\"Where am I? Why am I here? And how do you know my name?\"': '\“我在哪里？我为什么在这里？你怎么知道我的名字？\”',
    '\"Where is here? Here is where. In truth, I do not know the name of this realm. Your name, however, enters my mind as if I have always known.\"': '\“这里是哪里？这里是哪里。其实，我不知道这个境界的名字。但是，你的名字，却像我一直知道一样，进入了我的脑海。”',
    'As you land, the bird disappears into a cloud of mist and reappears, smaller, perched on a rock pedestal in front of you.': '当你着陆时，这只鸟消失在一片薄雾中，然后重新出现，体积更小，栖息在你面前的岩石基座上。',
    'The bird disappears once more into a cloud of mist, and seems to be gone for good.': '那只鸟再次消失在一片雾气中，似乎永远消失了。',
    'Åge The Wise': '时代的智者',
    'Food': '食物',
    'Food preference': '食物偏好',
    'Debug': '调试',
    'Grasslands': '草原',
    'Forge': '锻造',
    'Fortifications': '防御工事',
    'Fortifications mitigate the effects of a prosperous homestead. Although optional, it may be in your best interest to make your homestead as safe as possible.': '防御工事减轻了繁荣家园的影响。 尽管是可选的，但让您的家园尽可能安全可能符合您的最佳利益。',
    'Gather': '收集',
    'Gear': '分配',
    'Hammer': '锤子',
    'None': '无',
    'Tools that, if enabled, will automatically process resources based on pre-determined recipes.': '如果启用，将根据预先确定的配方自动处理资源的工具。',
    'Decorations': '装饰',
    'Decorations affect the comfort level and attractiveness of your homestead. Comfort affects the daily health and stamina regen bonuses provided to your vikings.': '装饰品会影响您宅基地的舒适度和吸引力。 舒适度会影响为您的维京人提供的日常健康和耐力恢复奖励。',
    'Don\'t forget to check in on your vikings to see if new tasks have become available.': '不要忘记检查您的维京人，看看是否有新任务可用。',
    'Each biome tier has a unique boss that must be defeated before your party can move to the next area. Find the keys in Delves to be able to challenge each boss.': '每个生物群落层都有一个独特的 Boss，必须在您的队伍移动到下一个区域之前将其击败。 在 副本 中找到能够挑战每个 Boss 的钥匙。',
    'Craftables': '可制作',
    'Death is not always a bad outcome of battle. As vikings perish, they will be placed on the corpse pile and remain unusable. Once all of your vikings perish, you have a chance to revive them with bonuses to health and stamina based on the number of bosses you have defeated this cycle.': '死亡并不总是战斗的坏结果。 随着维京人的灭亡，它们将被放置在尸体堆上并且无法使用。 一旦您的所有维京人都灭亡了，您就有机会根据您在此循环中击败的 Boss 数量，通过健康和耐力加成来复活他们。',
    'Crafting': '制作',
    'Assign': '分配',
    'Cannot delve or challenge a boss while in combat.': '在战斗中无法副本或挑战 Boss。',
    'Åge The Wise hits Goblin Youngling for 5 damage and uses 5 stamina!': '',
    'Hut': '棚屋',
    'Play': '玩',
    'Enabled': '启用',
    'Hard Wood': '硬木',
    'Dwarven Core': '地精核心',
    'Cooking Station': '烹饪台',
    'Chop Wood': '伐木',
    '+1 Viking': '+1 维京人',
    ' Armor': '盔甲',
    ' Greaves': '护腿',
    'You are victorious on this day!': '这一天你胜利了！',
    'You dig into an ancient chest...': '你挖掘到一个古老的箱子......',
    'You have challenged the mighty The Mother! Do not fear, for even in death you may be rewarded for such bravery.': '你已经挑战了强大的女妖！ 不要害怕，因为即使你死了，你也会因为这样的勇敢而得到奖励。',
    'A dusty altar sits before you, but it has nothing to offer.': '你面前是一个积满灰尘的祭坛，但它什么也没有。',
    'Challenge': '挑战',
    'Forest': '森林',
    'If any treasure was once here, it is long gone...': '如果有宝藏曾经在这里，那它早就消失了……',
    'Leave': '离开',
    'Light filtered though the lush canopy provides a heavenly atmosphere, until night falls.': '透过郁郁葱葱的树冠过滤的光线营造出一种天堂般的氛围，直到夜幕降临。',
    'Upon a dusty altar you find an Ikon of the Bounty': '在尘土飞扬的祭坛上，你发现一个赏金圣像',
    'Your bravery is not forgotten. You may choose to revive your vikings at a cost. Shed the burden of material possessions to ease the cost.': '你的勇敢没有被遗忘。 您可以选择付费复活您的维京人。 摆脱物质财富的负担以减轻成本。',
    'Your party has been eliminated...': '你的队伍团灭了...',
    'Smas': '粉碎',
    'Smash': '粉碎',
    'Convert': '转换',
    'Club': '俱乐部',
    'Close': '关闭',
    'A Goblin Brute has entered the battlefield!': '一个哥布林蛮子进入战场！',
    'A Troll has entered the battlefield!': '一个巨魔进入战场！',
    'Bring this viking back to the realm of the living, at a cost.': '将这个维京人带回生活领域，但要付出代价。',
    'Rock Throw': '扔石头',
    'Sword Swing': '挥剑',
    'Summon': '召唤',
    'A Skeleton has entered the battlefield!': '一个骷髅进入了战场！',
    'Stone Mining': '采石',
    'Copper Mining': '采铜',
    'Tin Mining': '采锡',
    'Copied to clipboard!': '已复制到剪切板！',
    'Copper Bar': '铜条',
    'Tin Bar': '锡条',
    'An advanced tool for metallurgy.': '一种先进的冶金工具。',
    'Coal': '煤',
    ' Armor (': '盔甲 (',
    ' Greaves (': '护腿 (',
    ' Helmet (': '头盔 (',
    ' Hide': '皮',
    'Used for shaping soft metals.': '用于成型软金属。',
    'With the strength of stone, a house can become a fortress.': '有了石头的力量，房子可以变成堡垒。',
    'Wood Spikes': '木钉',
    'Stonecutter': '切石机',
    'Provides light, and assurance, in the darkness.': '在黑暗中提供光明和保证。',
    'Ornate Wood': '华丽的木材',
    'Anvil': '铁砧',
    'Forge Cooler': '锻造冷却器',
    'Fermenter': '发酵罐',
    'Iron Bar': '铁条',
    'Hanging Brazier': '挂火盆',
    'Cooking Pot': '烹饪锅',
    'Chains': '链条',
    'Brew your favorite mead and other sweets.': '酿造您最喜欢的蜂蜜酒和其他糖果。',
    'Better heat control means better craftsmanship.': '更好的热控制意味着更好的工艺。',
    'Adze': '锛',
    'A tool used for fine woodworking.': '用于精细木工的工具。',
    'Club Smash': '俱乐部粉碎',
    'Club Swipe': '俱乐部滑动',
    'A culinary tool for advanced recipes.': '高级食谱的烹饪工具。',
    'Upon a dusty altar you find an Ikon of Renewal': '在尘土飞扬的祭坛上，你发现了一个复兴圣像',
    'Ikon of Renewal': '重生圣像',
    'Smith\'s Anvil': '铁匠的铁砧',
    'Necessary for shaping hard metals.': '成型硬质金属所必需的。',
    'Forge Toolrack': '锻造工具架',
    'Cultivator': '播种机',
    'An organized workshop allows focusing on more advanced projects.': '有组织的车间允许专注于更高级的项目。',
    ' Axe': '斧',
    'A Goblin Scout has entered the battlefield!': '一个哥布林斥候进入了战场！',
    ' Pickaxe': '镐',
    ' Axe (': '斧 (',
    'Forestry': '林业',
    'You have challenged the mighty The Stag! Do not fear, for even in death you may be rewarded for such bravery.': '你已经挑战了强大的麈！ 不要害怕，因为即使你死了，你也会因为这样的勇敢而得到奖励。',
    'On the fringe it appears to be a thriving wetland. Deeper in, the air is thick with noxious haze, unknown sounds permeate the stagnant atmosphere, and the dense foliage blocks the sunlight.': '在边缘，它似乎是一片欣欣向荣的湿地。 更深处，空气中弥漫着浓浓的毒雾，不知名的声音弥漫在静止的大气中，茂密的树叶挡住了阳光。',
    'Corpse Pile': '尸体堆',
    'Swamps': '沼泽',
    'A Slime has entered the battlefield!': '一只史莱姆进战场了！',
    'Foul Stench': '恶臭',
    'Lunge': '肺',
    'A Draugr has entered the battlefield!': '一个 尸鬼2 进入了战场！',
    'Swing': '摇摆',
    'Ornate Bow': '华丽的弓',
    'Throne': '宝座',
    'Table': '桌子',
    'Upon a dusty altar you find an Ikon of Decay': '在尘土飞扬的祭坛上，你发现了腐朽圣像',
    'With as much warmth as you need, this soft bed keeps worry at bay.': '这张柔软的床提供您所需的温暖，让您无后顾之忧。',
    ' Mining': '开采',
    'A commanding seat to invigorate.': '一个振奋人心的指挥席。',
    'A social space for relaxation': '一个放松身心的社交空间',
    'Bash': '重击',
    'After a long day, a good sit can rejuvinate.': '经过漫长的一天，一个好的座位可以恢复活力。',
    ' Pickaxe (': '镐 (',
    'Chairs': '椅子',
    'Comfortable Beds': '舒适的床',
    'Cultivator (': '播种机 (',
    'Farming': '耕作',
    'Ornate Bow (': '华丽的弓 (',
    'Sharpening Stone': '磨刀石',
    'Stone Walls': '石墙',
    'Watchtowers': '瞭望塔',
    'A functional flame, but even more beautiful than a basic campfire.': '一种功能性的火焰，但比基本的篝火更漂亮。',
    'Grand Hall': '大礼堂',
    'Grinding Wheel': '砂轮',
    'Hearth': '壁炉',
    'Moat': '护城河',
    'Tool Rack': '工具架',
    'Obsidian': '黑曜石',
    ' Gates': '门',
    ' Mace': '权杖',
    ' Mace (': '权杖 (',
    'Bellows': '风箱',
    'Bare Fists': '赤手空拳',
    ' Bar': ' 条',
    'A Wraith has entered the battlefield!': '一个幽灵进入了战场！',
    'Ikon of Decay': '腐朽圣像',
    'Technology that brings even more advanced arms and armor.': '带来更先进武器和装甲的技术。',
    'Blast Furnace': '高炉',
    'You have challenged the mighty The Plague! Do not fear, for even in death you may be rewarded for such bravery.': '你已经挑战了强大的瘟疫！ 不要害怕，因为即使你死了，你也会因为这样的勇敢而得到奖励。',
    'Mountains': '山地',
    'A Stone Golem has entered the battlefield!': '一个石像鬼进了战场！',
    'A Werewolf has entered the battlefield!': '一个狼人进入了战场！',
    'Claw': '抓',
    'Bite': '咬',
    'Appearing serene and peaceful from a distnace, the mountains are a craggy and harsh enviornment. Its peaks stretch above the clouds, hiding what exists beyond the earth below.': '从远处看，群山是宁静祥和的，是崎岖而恶劣的环境。 它的山峰延伸到云层之上，隐藏着下方地球之外的东西。',
    'Fortress': '堡垒',
    'Parapets': '护栏',
    'Portcullis': '吊闸',
    ' Rug': '皮地毯',
    'A Wolf has entered the battlefield!': '一匹狼进入了战场！',
    'Upon a dusty altar you find an Ikon of Regret': '在尘土飞扬的祭坛上，你发现了一个悔恨圣像',
    'Ikon of Regret': '悔恨圣像',
    'Slash': '砍',
    'Stab': '刺',
    'The Citadel': '城堡',
    'A Dark Elf has entered the battlefield!': '一个魅魔进入了战场！',
    'Plains': '平原',
    'A wind-swept valley hidden by the surrounding mountains. These fertile lands are home to many grazing beasts and other natural resources.': '被周围群山掩映的风谷。 这些肥沃的土地是许多放牧动物和其他自然资源的家园。',
    'A Lizardman has entered the battlefield!': '一个蜥蜴人进入了战场！',
    'A Drake has entered the battlefield!': '一个鸭人进了战场！',
    'A Bee Hive has entered the battlefield!': '一个蜂巢进入了战场！',
    'Sting': '蜇',
    'A tool for creating fine threads and rope.': '用于制作细线和绳索的工具。',
    'Ancient Fragment': '远古碎片',
    'Artisan Table': '工匠桌',
    'Brackish Sludge': '咸水污泥',
    'Compound Bow': '复合弓',
    'Compound Bow (': '复合弓 (',
    'Endless Breeze': '无尽的微风',
    'Endless Flame': '无尽的火焰',
    'Eternal Blossom': '永生花',
    'Fishing Rod': '鱼竿',
    'Flametongue': '火舌',
    'Galewind': '疾风',
    ' Sword': '剑',
    ' Spear': '矛',
    ' Spear (': '矛 (',
    'Harnesses the power of the wind to process nature\'s staples.': '利用风的力量来处理大自然的主食。',
    'Harpoon': '鱼叉',
    'Heart of the Mountain': '山之心',
    'Ichor': '灵液',
    'Ichor Shard': '灵液碎片',
    'Ikon of Pride': '骄傲圣像',
    'Ikon of the Primordial': '原始圣像',
    'Ikon of the Wind': '风之圣像',
    'Imbued with magical properties for advanced metallurgy.': '充满了先进冶金的神奇特性。',
    'Keep': '储藏室',
    'Large Game Hunting': '大型狩猎',
    'Mountainspire': '山尖',
    'Plaguebite': '瘟疫',
    'Queen\'s Sting': '女王之刺',
    'Sharptongue': '锋利的舌头',
    'Spinning Wheel': '纺车',
    'Threads': '线',
    'Treebreaker': '伐木器',
    'Wards': '病房',
    'Windmill': '风车',
    'Frighten': '恐吓',
    'Possess': '禁锢',
    'A Lizardbrute has entered the battlefield!': '一只蜥蜴幼崽进入了战场！',
    ' Sword (': '剑 (',
    'Deep Sea Fishing': '深海捕鱼',
    'Fishing': '钓鱼',
    'Fishing Rod (': '鱼竿 (',
    'Harpoon (': '鱼叉 (',
    'Pound': '磅',
    'Swoop': '猛扑',
    'Upon a dusty altar you find an Ikon of the Wind': '在尘土飞扬的祭坛上，你发现了风之圣像',
    'Endless Breeze': '无尽微风',
    'Crumbling spires that once touched the sky now lie broken. Grand structures now give way to the elements. The sprawling ruins hint at a once vibrant civilation. No evidence remains of their fate.': '曾经触及天空的摇摇欲坠的尖塔现在已经破碎。 宏伟的建筑现在让位于元素。 庞大的废墟暗示着曾经充满活力的文明。 他们的命运没有任何证据。',
    'Ruined City': '废墟之城',
    'You have challenged the mighty The Citadel! Do not fear, for even in death you may be rewarded for such bravery.': '你已经挑战了强大的城堡！ 不要害怕，因为即使你死了，你也会因为这样的勇敢而得到奖励。',
    'You have challenged the mighty The Gale! Do not fear, for even in death you may be rewarded for such bravery.': '你挑战了强大的风神！ 不要害怕，因为即使你死了，你也会因为这样的勇敢而得到奖励。',
    'A Spectre has entered the battlefield!': '一个恶鬼进入了战场！',
    'A Shadow has entered the battlefield!': '一个阴影进入了战场！',
    'A Draugr Noble has entered the battlefield!': '一个尸鬼贵族进入了战场！',
    'Spook': '惊吓',
    'Terror': '恐怖',
    'Upon a dusty altar you find an Ikon of Pride': '在尘土飞扬的祭坛上，你发现了骄傲圣像',
    'Swirling formations of old rock that once flowed like rivers have shaped the landscape into a treacherous domain. While not a welcoming sight, those brave enough may be rewarded.': '曾经像河流一样流动的古老岩石的漩涡状地层将景观塑造成一个危险的领域。 虽然不是一个受欢迎的景象，但那些勇敢的人可能会得到奖励。',
    'You have challenged the mighty The Trickster! Do not fear, for even in death you may be rewarded for such bravery.': '你已经挑战了强大的欺诈者！ 不要害怕，因为即使你死了，你也会因为这样的勇敢而得到奖励。',
    'Upon a dusty altar you find an Ikon of the Primordial': '在尘土飞扬的祭坛上，你发现了一个原始圣像',
    'Immolate': '牺牲',
    'Caldera': '火山口',
    'Fireball': '火球',
    'A Surtling has entered the battlefield!': '一个瑟琳已经进入了战场！',
    'Sharptongue (': '尖舌（',
    'Plaguebite (': '瘟疫 (',
    'Mountainspire (': '山尖 (',
    'Flametongue (': '火舌 (',
    'Galewind (': '疾风 (',
    'Treebreaker (': '伐木器 (',
    'You have challenged the mighty The Doomed God! Do not fear, for even in death you may be rewarded for such bravery.': '你挑战了强大的末日之神！ 不要害怕，因为即使你死了，你也会因为这样的勇敢而得到奖励。',
    'Peace. Merriment. Food and drink. Prove yourself to earn your place.': '和平。 欢乐。 饮食。 证明自己赢得了自己的位置。',
    'The Allfather': '天父',
    'Valhalla': '英灵殿',
    'You have challenged the mighty The Allfather! Do not fear, for even in death you may be rewarded for such bravery.': '你已经挑战了强大的天父！ 不要害怕，因为即使你死了，你也会因为这样的勇敢而得到奖励。',
    'The End': '终点',
    'We honor those who gave their all in the final battle': '我们向在最后一战中付出一切的人致敬',
    'We remember those who came along for the journey but were lost along the way': '我们记得那些为旅程而来却在途中迷路的人',
    'You have earned your seat in the great meadhalls of Valhalla.': '你在英灵殿的大草地上赢得了一席之地。',
    'Congratulations!': '恭喜!',
    'All similarities to Valheim are intentional. Valheim is copyright Coffee Stain and Iron Gate AB. Check out Valheim!': '与瓦尔海姆的所有相似之处都是有意为之。 Valheim 是 Coffee Stain 和 Iron Gate AB 的版权。 看看瓦尔海姆！',
    'Special thanks to Ken Oh and DisposableHero for playtesting and being my rubber ducks to bounce ideas off of.': '特别感谢 Ken Oh 和 DisposableHero 进行游戏测试并成为我的橡皮鸭来激发想法。',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

    //树游戏
    'Loading...': '加载中...',
    'Leather Hide': '皮毛',
    'Wolf Hide': '狼皮',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "Mushrooms: ": "蘑菇: ",
    "Stamina Regen: ": "耐力恢复: ",
    "Leather Scraps: ": "皮革废料: ",
    "Sausages: ": "香肠: ",
    "Stamina: ": "耐力: ",
    "Resin: ": "树脂: ",
    "Winterberries: ": "冬莓: ",
    "Large Game Meat: ": "大型野味肉: ",
    "Raw Large Game Meat: ": "生的大型野味肉: ",
    "Wood: ": "木头: ",
    "Sharpening Stone: ": "磨刀石: ",
    "Obsidian: ": "黑曜石: ",
    "Ichor Shard: ": "灵液碎片: ",
    "Honey: ": "蜂蜜: ",
    'Ikon of Pride: ': '骄傲圣像: ',
    "Ikon of the Primordial: ": "原始圣像: ",
    "Entrails: ": "内脏: ",
    "Serpent Meat: ": "蛇肉: ",
    "Raw Serpent Meat: ": "生蛇肉: ",
    "Raw Fish: ": "生鱼肉: ",
    "Stone: ": "石头: ",
    "Stone Axe": "石斧",
    "Serpent Stew: ": "炖蛇: ",
    "Meat Pie: ": "肉饼: ",
    "Bread: ": "面包: ",
    "Bones: ": "骨头: ",
    "Beds: ": "床: ",
    "Sweet Jam: ": "甜果酱: ",
    "Comfort: ": "舒适度: ",
    "Threads: ": "线: ",
    "Ichor: ": "灵液: ",
    "Vikings: ": "维京人: ",
    "Cooked Meat: ": "熟肉制品: ",
    "Fortification: ": "防御工事: ",
    "New comfort item unlocked: ": "解锁新的舒度适物品: ",
    "New house unlocked: ": "新房子解锁: ",
    "New workbench item unlocked: ": "新工作台物品解锁: ",
    "Ancient Fragment: ": "远古碎片: ",
    "Armor: ": "护甲: ",
    " Hide: ": "皮: ",
    "Ikon of Regret: ": "悔恨圣像: ",
    "Coal: ": "煤: ",
    "Carrot Soup: ": "胡萝卜汤: ",
    "Berries: ": "浆果: ",
    "Exploring: ": "探索: ",
    "Health Regen: ": "生命值恢复: ",
    "Brackish Sludge: ": "咸水污泥: ",
    "Endless Breeze: ": "无尽微风: ",
    "Ikon of the Wind: ": "风之圣像: ",
    "Turnips: ": "萝卜: ",
    "Turnip Stew: ": "萝卜炖肉: ",
    "Threads: ": "线: ",
    "Flour: ": "面粉: ",
    "Flax: ": "亚麻: ",
    "Fish Wraps: ": "鱼卷: ",
    "Wheat: ": "麦子: ",
    "Damage: ": "伤害: ",
    "Raw Meat: ": "生肉: ",
    "Queen Bee: ": "蜂王: ",
    "Dwarven Core: ": "地精核心: ",
    "Blueberries: ": "蓝莓: ",
    "Carrot Seeds: ": "胡萝卜种子: ",
    "Copper Bar: ": "铜条: ",
    "Tin Bar: ": "锡条: ",
    "Large Bone: ": "大骨头: ",
    "Yellow Mushrooms: ": "黄蘑菇: ",
    "Leather Hide: ": "毛皮: ",
    "Eternal Blossom: ": "永生花: ",
    "Endless Flame: ": "无尽火焰: ",
    "Turnip Seeds: ": "萝卜种子: ",
    "Ornate Wood: ": "华丽的木材: ",
    "Heart of the Mountain: ": "山之心: ",
    "Chains: ": "链条: ",
    "Ikon of Decay: ": "腐朽圣像: ",
    "Hard Wood: ": "硬木: ",
    "Mead: ": "蜂蜜酒: ",
    "Acc: ": "命中: ",
    "Carrots: ": "胡萝卜: ",
    "Copper Ore: ": "铜矿石: ",
    "Ikon of Renewal: ": "重生圣像: ",
    "Tin Ore: ": "锡矿石: ",
    "World Tier: ": "世界层级: ",
    "New crafting item unlocked: ": "解锁了新的工艺物品：",
    "Crude Bow": "粗弓",
    "-> Sweet Jam ": "-> 甜果酱 ",
    "-> Threads ": "-> 线 ",
    "-> Mead ": "-> 蜂蜜酒 ",
    "-> Flour ": "-> 面粉 ",
    "-> Coal ": "-> 煤 ",
    "-> Copper Bar ": "-> 铜条 ",
    "-> Iron Bar ": "-> 铁条 ",
    "-> Silver Bar ": "-> 银条 ",
    "-> Steel Bar ": "-> 钢条 ",
    "-> Titanium Bar ": "-> 钛条 ",
    "-> Gold Bar ": "-> 金条 ",
    "-> Tin Bar ": "-> 锡条 ",
    "-> Carrot Soup ": "-> 胡萝卜汤 ",
    "-> Fish Wraps ": "-> 鱼汤 ",
    "-> Meat Pie ": "-> 肉饼 ",
    "-> Sausages ": "-> 香肠 ",
    "-> Serpent Stew ": "-> 炖蛇 ",
    "-> Turnip Stew ": "-> 萝卜炖肉 ",
    "-> Honey ": "-> 蜂蜜 ",
    "-> Bread ": "-> 面包 ",
    "-> Cooked Meat": "-> 熟肉 ",
    "-> Large Game Meat": "-> 大型野味肉",
    "-> Serpent Meat ": "-> 蛇肉",
    "Ikon of the Bounty": "赏金圣像",
    "Mother\'s Memory": "女妖的记忆",
    'Skeleton': '骷髅',
    'The Mother': '女妖',
    "Goblin Youngling": "哥布林幼崽",
    "Troll": "巨魔",
    'Bone Pickaxe': '骨镐',
    'Leather Armor': '皮甲',
    'Leather Greaves': '皮革护腿',
    'Leather Helmet': '皮头盔',
    "Goblin Brute": "哥布林蛮子",
    "Monsters jump out of the darkness!\n": "怪物从黑暗中跳出来！\n",
    "Wolf": "狼",
    "New processing item unlocked: ": "解锁新加工项目：",
    "New fortification unlocked: ": "解锁新防御工事：",
    "New forge item unlocked: ": "新锻造物品解锁：",
    "The Stag": "麈",
    "Bronze": "青铜",
    "Goblin Scout": "哥布林斥候",
    "Slime": "史莱姆",
    "Drauger": "尸鬼",
    "Draugr": "尸鬼",
    "The Citadel": "城堡",
    "Iron": "铁",
    "Steel": "钢",
    "Silver": "银",
    "Wraith": "幽灵",
    'The Plague': '瘟疫',
    "Stone Golem": "石像鬼",
    "Werewolf": "狼人",
    "Dark Elf": "魅魔",
    "Lizardman": "蜥蜴人",
    "Drake": "鸭人",
    'Bee Hive': '蜂巢',
    "Gold": "黄金",
    "Titanium": "钛",
    "Tough": "硬",
    "Lizardbrute": "蜥蜴幼崽",
    "The Gale": "风神",
    "Spectre": "恶鬼",
    "A Draugr Warrior has entered the battlefield!": "一个 尸鬼战士 已经进入了战场！",
    "Draugr Warrior": "尸鬼战士",
    "Shadow": "阴影",
    "The Trickster": "欺诈鬼",
    "Surtling": "瑟林",
    "The Doomed God": "末日之神",
    "The Allfather": "天父",
    "Died: Day ": "死亡: 天数 ",
    "Born: Day ": "出生: 天数 ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    ' Noble': '贵族',
    ' Warrior': '战士',
    " Hide: ": "皮: ",
    " Bar: ": "条: ",
    " Ore: ": "矿石: ",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    " has defeated Skeleton!": "击败了骷髅！",
    " has defeated Goblin Youngling!": "击败了哥布林幼崽！",
    " has been defeated by Goblin Youngling...": "被哥布林幼崽打败了……",
    " has defeated Bee Hive!": "击败了蜂巢！",
    "Raw Large Game Meat": "生的大型野味肉",
    "Raw Meat": "生肉",
    "Raw Serpent Meat": "生蛇肉",
    " has defeated The Mother!": "击败了女妖！",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^([\d\.]+) \/ (\d+)$/,
    /^(\d+)$/,
    /^.X(.+)$/,
    /^..X(.+)$/,
    /^...X(.+)$/,
    /^....X(.+)$/,
    /^.....X(.+)$/,
    /^XX(.+)$/,
    /^X.(.+)$/,
    /^华丽的木材: (.+)$/,
    /^浆果: (.+)$/,
    /^萝卜: (.+)$/,
    /^铜条: (.+)$/,
    /^银矿石: (.+)$/,
    /^煤: (.+)$/,
    /^蘑菇: (.+)$/,
    /^银条: (.+)$/,
    /^甜果酱: (.+)$/,
    /^铁条: (.+)$/,
    /^锡条: (.+)$/,
    /^(\d+) \/ (\d+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^\"Hail, (.+)! Welcome to my lands\"$/, '\“万岁，$1！欢迎来到我的土地\”'],
    [/^Encounter Rate: (.+)\% \/ day$/, '遭遇几率: $1\% \/ 天'],
    [/^ Hide: ([\d\.,]+)$/, ' 皮: $1'],
    [/^Attack ([\d\.,]+)$/, '攻击 $1'],
    [/^([\d\.,]+) Ichor$/, '$1 灵液'],
    [/^([\d\.,]+) Flour$/, '$1 面粉'],
    [/^([\d\.,]+) Copper Ore$/, '$1 铜矿石'],
    [/^([\d\.,]+) Tin Ore$/, '$1 锡矿石'],
    [/^([\d\.,]+) Titanium Ore$/, '$1 钛矿石'],
    [/^([\d\.,]+) Silver Ore$/, '$1 银矿石'],
    [/^([\d\.,]+) Flax$/, '$1 亚麻'],
    [/^([\d\.,]+) Iron Ore$/, '$1 铁矿石'],
    [/^([\d\.,]+) Gold Ore$/, '$1 金矿石'],
    [/^([\d\.,]+) Obsidian$/, '$1 黑曜石'],
    [/^([\d\.,]+) Coal$/, '$1 煤'],
    [/^([\d\.,]+) Carrots$/, '$1 胡萝卜'],
    [/^([\d\.,]+) Entrails$/, '$1 内脏'],
    [/^([\d\.,]+) Mushrooms$/, '$1 蘑菇'],
    [/^([\d\.,]+) Raw Fish$/, '$1 生鱼肉'],
    [/^([\d\.,]+) Turnips$/, '$1 萝卜'],
    [/^([\d\.,]+) Berries$/, '$1 浆果'],
    [/^([\d\.,]+) Blueberries$/, '$1 蓝莓'],
    [/^([\d\.,]+) Wheat$/, '$1 麦子'],
    [/^([\d\.,]+) Winterberries$/, '$1 冬莓'],
    [/^([\d\.,]+) Honey$/, '$1 蜂蜜'],
    [/^([\d\.,]+) Wood$/, '$1 木头'],
    [/^([\d\.,]+) dmg \/ ([\d\.,]+) stm \/ ([\d\.]+) acc$/, '$1 伤害 \/ $2 耐力 \/ $3 命中'],
    [/^The Mother hits (.+) for (.+) damage and uses (.+) stamina!$/, '女妖击中 $1 造成 $2 点伤害并消耗 $3 点耐力！'],
    [/^(.+) gets (.+) point to maximum health and stamina.$/, '$1 获得 $2 点最大生命值和耐力。'],
    [/^(.+)misses and uses (.+) stamina...$/, '$1 未命中并消耗了 $2 耐力...'],
    [/^(.+)hits Goblin Youngling for (.+) damage and uses (.+) stamina!$/, '$1 击中 哥布林幼崽 造成 $2 点伤害并消耗 $3 点耐力！'],
    [/^(.+)hits The Mother for (.+) damage and uses (.+) stamina!$/, '$1 击中 女妖 造成 $2 点伤害并消耗 $3 点耐力！'],
    [/^(.+)hits Surtling for (.+) damage and uses (.+) stamina!$/, '$1 击中 瑟林 造成 $2 点伤害并消耗 $3 点耐力！'],
    [/^(.+)hits Goblin Brute for (.+) damage and uses (.+) stamina!$/, '$1 击中 哥布林蛮子 造成 $2 点伤害并消耗 $3 点耐力！'],
    [/^(.+)hits The Stag for (.+) damage and uses (.+) stamina!$/, '$1 击中 麈 造成 $2 点伤害并消耗 $3 点耐力！'],
    [/^(.+)hits Lizardman for (.+) damage and uses (.+) stamina!$/, '$1 击中 蜥蜴人 造成 $2 点伤害并消耗 $3 点耐力！'],
    [/^(.+)hits The Allfather for (.+) damage and uses (.+) stamina!$/, '$1 击中 天父 造成 $2 点伤害并消耗 $3 点耐力！'],
    [/^(.+)hits Skeleton for (.+) damage and uses (.+) stamina!$/, '$1 击中 骷髅 造成 $2 点伤害并消耗 $3 点耐力！'],
    [/^(.+)hits Dark Elf for (.+) damage and uses (.+) stamina!$/, '$1 击中 魅魔 造成 $2 点伤害并消耗 $3 点耐力！'],
    [/^(.+)hits Wolf for (.+) damage and uses (.+) stamina!$/, '$1 击中 狼 造成 $2 点伤害并消耗 $3 点耐力！'],
    [/^(.+)hits Troll for (.+) damage and uses (.+) stamina!$/, '$1 击中 巨魔 造成 $2 点伤害并消耗 $3 点耐力！'],
    [/^(.+)hits Draugr for (.+) damage and uses (.+) stamina!$/, '$1 击中 尸鬼2 造成 $2 点伤害并消耗 $3 点耐力！'],
    [/^(.+)hits Drauger for (.+) damage and uses (.+) stamina!$/, '$1 击中 尸鬼 造成 $2 点伤害并消耗 $3 点耐力！'],
    [/^(.+)hits The Plague for (.+) damage and uses (.+) stamina!$/, '$1 击中 瘟疫 造成 $2 点伤害并消耗 $3 点耐力！'],
    [/^(.+)hits The Citadel for (.+) damage and uses (.+) stamina!$/, '$1 击中 城堡 造成 $2 点伤害并消耗 $3 点耐力！'],
    [/^(.+)hits Stone Golem for (.+) damage and uses (.+) stamina!$/, '$1 击中 石像鬼 造成 $2 点伤害并消耗 $3 点耐力！'],
    [/^(.+)hits Werewolf for (.+) damage and uses (.+) stamina!$/, '$1 击中 狼人 造成 $2 点伤害并消耗 $3 点耐力！'],
    [/^(.+)hits Lizardbrute for (.+) damage and uses (.+) stamina!$/, '$1 击中 蜥蜴幼崽 造成 $2 点伤害并消耗 $3 点耐力！'],
    [/^(.+)hits Drake for (.+) damage and uses (.+) stamina!$/, '$1 击中 鸭人 造成 $2 点伤害并消耗 $3 点耐力！'],
    [/^(.+)hits The Gale for (.+) damage and uses (.+) stamina!$/, '$1 击中 风神 造成 $2 点伤害并消耗 $3 点耐力！'],
    [/^(.+)hits Shadow for (.+) damage and uses (.+) stamina!$/, '$1 击中 阴影 造成 $2 点伤害并消耗 $3 点耐力！'],
    [/^(.+)hits The Doomed God for (.+) damage and uses (.+) stamina!$/, '$1 击中 末日之神 造成 $2 点伤害并消耗 $3 点耐力！'],
    [/^(.+)hits Slime for (.+) damage and uses (.+) stamina!$/, '$1 击中 史莱姆 造成 $2 点伤害并消耗 $3 点耐力！'],
    [/^(.+)hits Draugr Noble for (.+) damage and uses (.+) stamina!$/, '$1 击中 尸鬼贵族 造成 $2 点伤害并消耗 $3 点耐力！'],
    [/^(.+)hits Spectre for (.+) damage and uses (.+) stamina!$/, '$1 击中 恶鬼 造成 $2 点伤害并消耗 $3 点耐力！'],
    [/^(.+)hits Goblin Scout for (.+) damage and uses (.+) stamina!$/, '$1 击中 哥布林斥候 造成 $2 点伤害并消耗 $3 点耐力！'],
    [/^(.+)hits Wraith for (.+) damage and uses (.+) stamina!$/, '$1 击中 幽灵 造成 $2 点伤害并消耗 $3 点耐力！'],
    [/^(.+)hits Draugr Warrior for (.+) damage and uses (.+) stamina!$/, '$1 击中 尸鬼战士 造成 $2 点伤害并消耗 $3 点耐力！'],
    [/^(.+)hits The Trickster for (.+) damage and uses (.+) stamina!$/, '$1 击中 欺诈鬼 造成 $2 点伤害并消耗 $3 点耐力！'],
    [/^(.+)hits Bee Hive for (.+) damage and uses (.+) stamina!$/, '$1 击中 蜂巢 造成 $2 点伤害并消耗 $3 点耐力！'],
    [/^ hits (.+) for (.+) damage and uses (.+) stamina!$/, ' 击中 $1 造成 $2 点伤害并消耗 $3 点耐力！'],
    [/^ hits (.+) for (.+) damage and uses (.+) stamina!$/, '哥布林蛮子 击中 $1 造成 $2 点伤害并消耗 $3 点耐力！'],
    [/^(.+) has been defeated by Lizardman...$/, '$1 被 蜥蜴人 打败了……'],
    [/^(.+) has been defeated by Werewolf...$/, '$1 被 狼人 打败了……'],
    [/^(.+) has been defeated by Surtling...$/, '$1 被 瑟林 打败了……'],
    [/^(.+) has been defeated by Dark Elf...$/, '$1 被 魅魔 打败了……'],
    [/^(.+) has been defeated by Stone Golem...$/, '$1 被 石像鬼 打败了……'],
    [/^(.+) has been defeated by Drake...$/, '$1 被 鸭人 打败了……'],
    [/^(.+) has been defeated by Spectre...$/, '$1 被 恶鬼 打败了……'],
    [/^(.+) has been defeated by Wolf...$/, '$1 被 狼 打败了……'],
    [/^(.+) has been defeated by Wraith...$/, '$1 被 幽灵 打败了……'],
    [/^(.+) has been defeated by Goblin Scout...$/, '$1 被 哥布林斥候 打败了……'],
    [/^(.+) has been defeated by Slime...$/, '$1 被 史莱姆 打败了……'],
    [/^(.+) has been defeated by Draugr...$/, '$1 被 尸鬼2 打败了……'],
    [/^(.+) has been defeated by Goblin Brute...$/, '$1 被 哥布林蛮子 打败了……'],
    [/^(.+) has been defeated by Goblin Brute...$/, '$1 被 哥布林蛮子 打败了……'],
    [/^(.+) has been defeated by Lizardbrute...$/, '$1 被 蜥蜴幼崽 打败了……'],
    [/^(.+) has been defeated by Troll...$/, '$1 被 巨魔 打败了……'],
    [/^(.+) has been defeated by The Citadel...$/, '$1 被 城堡 打败了……'],
    [/^(.+) has been defeated by Shadow...$/, '$1 被 阴影 打败了……'],
    [/^(.+) has been defeated by Draugr Noble...$/, '$1 被 尸鬼贵族 打败了……'],
    [/^(.+) has been defeated by The Trickster...$/, '$1 被 欺诈鬼 打败了……'],
    [/^(.+) has been defeated by The Allfather...$/, '$1 被 天父 打败了……'],
    [/^(.+) has been defeated by Wolf...$/, '$1 被 狼 打败了……'],
    [/^(.+) has been defeated by The Gale...$/, '$1 被 风神 打败了……'],
    [/^(.+) has been defeated by The Stag...$/, '$1 被 麈 打败了……'],
    [/^(.+) has been defeated by The Plague...$/, '$1 被 瘟疫 打败了……'],
    [/^(.+) has been defeated by Draugr Warrior...$/, '$1 被 尸鬼战士 打败了……'],
    [/^(.+) has been defeated by The Drauger...$/, '$1 被 尸鬼 打败了……'],
    [/^(.+) has been defeated by The Doomed God...$/, '$1 被 末日之神 打败了……'],
    [/^(.+) has defeatedd Stone Golem!$/, '$1 击败了 石像鬼 ！'],
    [/^(.+) has defeated Surtling!$/, '$1 击败了 瑟林 ！'],
    [/^(.+) has defeated Wraith!$/, '$1 击败了 幽灵 ！'],
    [/^(.+) has defeated Lizardbrute!$/, '$1 击败了 蜥蜴幼崽 ！'],
    [/^(.+) has defeated Spectre!$/, '$1 击败了 恶鬼 ！'],
    [/^(.+) has defeated The Gale!$/, '$1 击败了 风神 ！'],
    [/^(.+) has defeated The Allfather!$/, '$1 击败了 天父 ！'],
    [/^(.+) has defeated Werewolf!$/, '$1 击败了 狼人 ！'],
    [/^(.+) has defeated The Plague!$/, '$1 击败了 瘟疫 ！'],
    [/^(.+) has defeated Dark Elf!$/, '$1 击败了 魅魔 ！'],
    [/^(.+) has defeated Shadow!$/, '$1 击败了 阴影 ！'],
    [/^(.+) has defeated Lizardman!$/, '$1 击败了 蜥蜴人 ！'],
    [/^(.+) has defeated Draugr!$/, '$1 击败了 尸鬼2 ！'],
    [/^(.+) has defeated Drauger!$/, '$1 击败了 尸鬼 ！'],
    [/^(.+) has defeated Wolf!$/, '$1 击败了 狼 ！'],
    [/^(.+) has defeated The Doomed God!$/, '$1 击败了 末日之神 ！'],
    [/^(.+) has defeated Drake!$/, '$1 击败了 鸭人 ！'],
    [/^(.+) has defeated The Citadel!$/, '$1 击败了 城堡 ！'],
    [/^(.+) has defeated Draugr Noble!$/, '$1 击败了 尸鬼贵族 ！'],
    [/^(.+) has defeated Slime!$/, '$1 击败了 史莱姆 ！'],
    [/^(.+) has defeated The Stag!$/, '$1 击败了 麈 ！'],
    [/^(.+) has defeated Stone Golem!$/, '$1 击败了 石像鬼 ！'],
    [/^(.+) has defeated Draugr Warrior!$/, '$1 击败了 尸鬼战士 ！'],
    [/^(.+) has defeated The Trickster!$/, '$1 击败了 欺诈鬼 ！'],
    [/^(.+) has defeated Troll!$/, '$1 击败了 巨魔 ！'],
    [/^(.+) has defeated Goblin Scout!$/, '$1 击败了 哥布林斥候 ！'],
    [/^(.+) has defeated Goblin Brute!$/, '$1 击败了 哥布林蛮子 ！'],
    [/^If revived, gets (.+) points to maximum health and maximum stamina.$/, '如果复活，最大生命值和最大耐力增加 $1 点。'],
    [/^ drops (.+) Ancient Fragment!$/, '掉落 $1 远古碎片！'],
    [/^ drops (.+) Endless Flame!$/, '掉落 $1 无尽火焰！'],
    [/^ drops (.+) Endless Breeze!$/, '掉落 $1 无尽微风！'],
    [/^ drops (.+) Heart of the Mountain!$/, '掉落 $1 山之心！'],
    [/^ drops (.+) Gold Ore!$/, '掉落 $1 金矿石！'],
    [/^ drops (.+) Entrails!$/, '掉落 $1 内脏！'],
    [/^ drops (.+) Brackish Sludge!$/, '掉落 $1 咸水污泥！'],
    [/^ drops (.+) Ichor Shard!$/, '掉落 $1 灵液碎片！'],
    [/^ drops (.+) Sharpening Stone!$/, '掉落 $1 磨刀石！'],
    [/^ drops (.+) Wolf Hide!$/, '掉落 $1 狼皮！'],
    [/^ drops (.+) Eternal Blossom!$/, '掉落 $1 永生花！'],
    [/^ drops (.+) Large Bone!$/, '掉落 $1 大骨头！'],
    [/^ drops (.+) Troll Hide!$/, '掉落 $1 巨魔皮！'],
    [/^ drops (.+) Chains!$/, '掉落 $1 链条！'],
    [/^ drops (.+) Resin!$/, '掉落 $1 树脂！'],
    [/^ drops (.+) Bones!$/, '掉落 $1 骨头！'],
    [/^ drops (.+) Ichor!$/, '掉落 $1 灵液！'],
    [/^ drops (.+) Mother\'s Memory!$/, '掉落 $1 女妖的记忆！'],
    [/^You find (.+) Gold Ore!$/, '你找到了 $1 金矿石!'],
    [/^You find (.+) Chains!$/, '你找到了 $1 链条!'],
    [/^You find (.+) Dwarven Core!$/, '你找到了 $1 地精核心!'],
    [/^You find (.+) Yellow Mushrooms!$/, '你找到了 $1 黄蘑菇!'],
    [/^Value: (.+) Ichor$/, '价值：$1 灵液'],
    [/^Head, (.+) armor$/, '头部, $1 护甲'],
    [/^Body, (.+) armor$/, '身体, $1 护甲'],
    [/^Legs, (.+) armor$/, '腿部, $1 护甲'],
    [/^Starting day (.+) on the battlefield...$/, '从第 $1 天开始在战场上......'],
    [/^Day: (.+)$/, '天：$1'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^(\d+) Royal points$/, '$1 皇家点数'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);