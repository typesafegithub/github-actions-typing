(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-core-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-core-js-legacy'.");
    }root['kotlinx-serialization-kotlinx-serialization-core-js-legacy'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-core-js-legacy'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-core-js-legacy'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var getKClass = Kotlin.getKClass;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Annotation = Kotlin.kotlin.Annotation;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var asList = Kotlin.kotlin.collections.asList_us0mfu$;
  var Unit = Kotlin.kotlin.Unit;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var LazyThreadSafetyMode = Kotlin.kotlin.LazyThreadSafetyMode;
  var kotlin_js_internal_StringCompanionObject = Kotlin.kotlin.js.internal.StringCompanionObject;
  var toString = Kotlin.toString;
  var lazy = Kotlin.kotlin.lazy_kls4a0$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var zip = Kotlin.kotlin.collections.zip_r9t3v7$;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var Grouping = Kotlin.kotlin.collections.Grouping;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  var Map = Kotlin.kotlin.collections.Map;
  var throwCCE = Kotlin.throwCCE;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var IllegalArgumentException = Kotlin.kotlin.IllegalArgumentException;
  var IllegalArgumentException_init_0 = Kotlin.kotlin.IllegalArgumentException_init;
  var IllegalArgumentException_init_1 = Kotlin.kotlin.IllegalArgumentException_init_dbl4no$;
  var getCallableRef = Kotlin.getCallableRef;
  var Collection = Kotlin.kotlin.collections.Collection;
  var equals = Kotlin.equals;
  var List = Kotlin.kotlin.collections.List;
  var MutableList = Kotlin.kotlin.collections.MutableList;
  var ArrayList = Kotlin.kotlin.collections.ArrayList;
  var HashSet = Kotlin.kotlin.collections.HashSet;
  var Set = Kotlin.kotlin.collections.Set;
  var MutableSet = Kotlin.kotlin.collections.MutableSet;
  var LinkedHashSet = Kotlin.kotlin.collections.LinkedHashSet;
  var HashMap = Kotlin.kotlin.collections.HashMap;
  var MutableMap = Kotlin.kotlin.collections.MutableMap;
  var LinkedHashMap = Kotlin.kotlin.collections.LinkedHashMap;
  var Map$Entry = Kotlin.kotlin.collections.Map.Entry;
  var Pair = Kotlin.kotlin.Pair;
  var Triple = Kotlin.kotlin.Triple;
  var KClass = Kotlin.kotlin.reflect.KClass;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var toLong = Kotlin.kotlin.text.toLong_pdl1vz$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var hashCode = Kotlin.hashCode;
  var Iterator = Kotlin.kotlin.collections.Iterator;
  var Iterable = Kotlin.kotlin.collections.Iterable;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_287e2$;
  var contentEquals = Kotlin.arrayEquals;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var toHashSet = Kotlin.kotlin.collections.toHashSet_7wnvza$;
  var toBooleanArray = Kotlin.kotlin.collections.toBooleanArray_xmyvgf$;
  var withIndex = Kotlin.kotlin.collections.withIndex_us0mfu$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var lazy_0 = Kotlin.kotlin.lazy_klfg04$;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var toBoxedChar = Kotlin.toBoxedChar;
  var Any = Object;
  var Throwable = Error;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var getValue = Kotlin.kotlin.collections.getValue_t9ocha$;
  var ArrayList_init_1 = Kotlin.kotlin.collections.ArrayList_init_mqih57$;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_mqih57$;
  var HashSet_init_0 = Kotlin.kotlin.collections.HashSet_init_mqih57$;
  var LinkedHashMap_init_1 = Kotlin.kotlin.collections.LinkedHashMap_init_73mtqc$;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var HashMap_init_0 = Kotlin.kotlin.collections.HashMap_init_73mtqc$;
  var LinkedHashSet_init_0 = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var L1 = Kotlin.Long.ONE;
  var L_1 = Kotlin.Long.NEG_ONE;
  var countTrailingZeroBits = Kotlin.kotlin.countTrailingZeroBits_mts6qi$;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_se6h4x$;
  var L0 = Kotlin.Long.ZERO;
  var indexOf = Kotlin.kotlin.collections.indexOf_mjy6jw$;
  var contentToString = Kotlin.arrayToString;
  var get_indices = Kotlin.kotlin.collections.get_indices_m7z4lg$;
  var Array_0 = Array;
  var kotlin_js_internal_IntCompanionObject = Kotlin.kotlin.js.internal.IntCompanionObject;
  var kotlin_js_internal_LongCompanionObject = Kotlin.kotlin.js.internal.LongCompanionObject;
  var kotlin_js_internal_ByteCompanionObject = Kotlin.kotlin.js.internal.ByteCompanionObject;
  var kotlin_js_internal_ShortCompanionObject = Kotlin.kotlin.js.internal.ShortCompanionObject;
  var UInt_init = Kotlin.kotlin.UInt;
  var ULong_init = Kotlin.kotlin.ULong;
  var UByte_init = Kotlin.kotlin.UByte;
  var UShort_init = Kotlin.kotlin.UShort;
  var toByte = Kotlin.toByte;
  var CharRange = Kotlin.kotlin.ranges.CharRange;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
  var trimStart = Kotlin.kotlin.text.trimStart_wqw3xr$;
  var HashSet_init_1 = Kotlin.kotlin.collections.HashSet_init_ww73n8$;
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  var contentHashCode = Kotlin.arrayHashCode;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var copyOf = Kotlin.kotlin.collections.copyOf_mrm5p$;
  var copyOf_0 = Kotlin.kotlin.collections.copyOf_m2jy6x$;
  var copyOf_1 = Kotlin.kotlin.collections.copyOf_c03ot6$;
  var copyOf_2 = Kotlin.kotlin.collections.copyOf_3aefkx$;
  var kotlin_js_internal_FloatCompanionObject = Kotlin.kotlin.js.internal.FloatCompanionObject;
  var copyOf_3 = Kotlin.kotlin.collections.copyOf_rblqex$;
  var kotlin_js_internal_DoubleCompanionObject = Kotlin.kotlin.js.internal.DoubleCompanionObject;
  var copyOf_4 = Kotlin.kotlin.collections.copyOf_xgrzbe$;
  var unboxChar = Kotlin.unboxChar;
  var kotlin_js_internal_CharCompanionObject = Kotlin.kotlin.js.internal.CharCompanionObject;
  var copyOf_5 = Kotlin.kotlin.collections.copyOf_gtcw5h$;
  var kotlin_js_internal_BooleanCompanionObject = Kotlin.kotlin.js.internal.BooleanCompanionObject;
  var copyOf_6 = Kotlin.kotlin.collections.copyOf_1qu12l$;
  var PrimitiveClasses$stringClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.stringClass;
  var Char = Kotlin.BoxedChar;
  var PrimitiveClasses$charArrayClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.charArrayClass;
  var PrimitiveClasses$doubleClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.doubleClass;
  var PrimitiveClasses$doubleArrayClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.doubleArrayClass;
  var PrimitiveClasses$floatClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.floatClass;
  var PrimitiveClasses$floatArrayClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.floatArrayClass;
  var Long = Kotlin.Long;
  var PrimitiveClasses$longArrayClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.longArrayClass;
  var PrimitiveClasses$intClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.intClass;
  var PrimitiveClasses$intArrayClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.intArrayClass;
  var PrimitiveClasses$shortClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.shortClass;
  var PrimitiveClasses$shortArrayClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.shortArrayClass;
  var PrimitiveClasses$byteClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.byteClass;
  var PrimitiveClasses$byteArrayClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.byteArrayClass;
  var PrimitiveClasses$booleanClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.booleanClass;
  var PrimitiveClasses$booleanArrayClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.booleanArrayClass;
  var kotlin = Kotlin.kotlin;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var equals_0 = Kotlin.kotlin.text.equals_igcy3c$;
  var trimIndent = Kotlin.kotlin.text.trimIndent_pdl1vz$;
  var isLowerCase = Kotlin.kotlin.text.isLowerCase_myv2d0$;
  var titlecase = Kotlin.kotlin.text.titlecase_myv2d0$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var lastOrNull = Kotlin.kotlin.collections.lastOrNull_2p1efm$;
  var get_lastIndex_0 = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var asSequence = Kotlin.kotlin.collections.asSequence_abgq59$;
  var IndexOutOfBoundsException = Kotlin.kotlin.IndexOutOfBoundsException;
  var get_indices_0 = Kotlin.kotlin.collections.get_indices_l1lu5t$;
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  var PrimitiveClasses$arrayClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.arrayClass;
  var findAssociatedObject = Kotlin.findAssociatedObject_yjf3nl$;
  EncodeDefault$Mode.prototype = Object.create(Enum.prototype);
  EncodeDefault$Mode.prototype.constructor = EncodeDefault$Mode;
  PolymorphicSerializer.prototype = Object.create(AbstractPolymorphicSerializer.prototype);
  PolymorphicSerializer.prototype.constructor = PolymorphicSerializer;
  SealedClassSerializer.prototype = Object.create(AbstractPolymorphicSerializer.prototype);
  SealedClassSerializer.prototype.constructor = SealedClassSerializer;
  SerializationException.prototype = Object.create(IllegalArgumentException.prototype);
  SerializationException.prototype.constructor = SerializationException;
  MissingFieldException.prototype = Object.create(SerializationException.prototype);
  MissingFieldException.prototype.constructor = MissingFieldException;
  UnknownFieldException.prototype = Object.create(SerializationException.prototype);
  UnknownFieldException.prototype.constructor = UnknownFieldException;
  SerialKind$ENUM.prototype = Object.create(SerialKind.prototype);
  SerialKind$ENUM.prototype.constructor = SerialKind$ENUM;
  SerialKind$CONTEXTUAL.prototype = Object.create(SerialKind.prototype);
  SerialKind$CONTEXTUAL.prototype.constructor = SerialKind$CONTEXTUAL;
  PrimitiveKind.prototype = Object.create(SerialKind.prototype);
  PrimitiveKind.prototype.constructor = PrimitiveKind;
  PrimitiveKind$BOOLEAN.prototype = Object.create(PrimitiveKind.prototype);
  PrimitiveKind$BOOLEAN.prototype.constructor = PrimitiveKind$BOOLEAN;
  PrimitiveKind$BYTE.prototype = Object.create(PrimitiveKind.prototype);
  PrimitiveKind$BYTE.prototype.constructor = PrimitiveKind$BYTE;
  PrimitiveKind$CHAR.prototype = Object.create(PrimitiveKind.prototype);
  PrimitiveKind$CHAR.prototype.constructor = PrimitiveKind$CHAR;
  PrimitiveKind$SHORT.prototype = Object.create(PrimitiveKind.prototype);
  PrimitiveKind$SHORT.prototype.constructor = PrimitiveKind$SHORT;
  PrimitiveKind$INT.prototype = Object.create(PrimitiveKind.prototype);
  PrimitiveKind$INT.prototype.constructor = PrimitiveKind$INT;
  PrimitiveKind$LONG.prototype = Object.create(PrimitiveKind.prototype);
  PrimitiveKind$LONG.prototype.constructor = PrimitiveKind$LONG;
  PrimitiveKind$FLOAT.prototype = Object.create(PrimitiveKind.prototype);
  PrimitiveKind$FLOAT.prototype.constructor = PrimitiveKind$FLOAT;
  PrimitiveKind$DOUBLE.prototype = Object.create(PrimitiveKind.prototype);
  PrimitiveKind$DOUBLE.prototype.constructor = PrimitiveKind$DOUBLE;
  PrimitiveKind$STRING.prototype = Object.create(PrimitiveKind.prototype);
  PrimitiveKind$STRING.prototype.constructor = PrimitiveKind$STRING;
  StructureKind.prototype = Object.create(SerialKind.prototype);
  StructureKind.prototype.constructor = StructureKind;
  StructureKind$CLASS.prototype = Object.create(StructureKind.prototype);
  StructureKind$CLASS.prototype.constructor = StructureKind$CLASS;
  StructureKind$LIST.prototype = Object.create(StructureKind.prototype);
  StructureKind$LIST.prototype.constructor = StructureKind$LIST;
  StructureKind$MAP.prototype = Object.create(StructureKind.prototype);
  StructureKind$MAP.prototype.constructor = StructureKind$MAP;
  StructureKind$OBJECT.prototype = Object.create(StructureKind.prototype);
  StructureKind$OBJECT.prototype.constructor = StructureKind$OBJECT;
  PolymorphicKind.prototype = Object.create(SerialKind.prototype);
  PolymorphicKind.prototype.constructor = PolymorphicKind;
  PolymorphicKind$SEALED.prototype = Object.create(PolymorphicKind.prototype);
  PolymorphicKind$SEALED.prototype.constructor = PolymorphicKind$SEALED;
  PolymorphicKind$OPEN.prototype = Object.create(PolymorphicKind.prototype);
  PolymorphicKind$OPEN.prototype.constructor = PolymorphicKind$OPEN;
  PrimitiveArrayDescriptor.prototype = Object.create(ListLikeDescriptor.prototype);
  PrimitiveArrayDescriptor.prototype.constructor = PrimitiveArrayDescriptor;
  ArrayClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  ArrayClassDesc.prototype.constructor = ArrayClassDesc;
  ArrayListClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  ArrayListClassDesc.prototype.constructor = ArrayListClassDesc;
  LinkedHashSetClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  LinkedHashSetClassDesc.prototype.constructor = LinkedHashSetClassDesc;
  HashSetClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  HashSetClassDesc.prototype.constructor = HashSetClassDesc;
  LinkedHashMapClassDesc.prototype = Object.create(MapLikeDescriptor.prototype);
  LinkedHashMapClassDesc.prototype.constructor = LinkedHashMapClassDesc;
  HashMapClassDesc.prototype = Object.create(MapLikeDescriptor.prototype);
  HashMapClassDesc.prototype.constructor = HashMapClassDesc;
  ListLikeSerializer.prototype = Object.create(AbstractCollectionSerializer.prototype);
  ListLikeSerializer.prototype.constructor = ListLikeSerializer;
  MapLikeSerializer.prototype = Object.create(AbstractCollectionSerializer.prototype);
  MapLikeSerializer.prototype.constructor = MapLikeSerializer;
  PrimitiveArraySerializer.prototype = Object.create(ListLikeSerializer.prototype);
  PrimitiveArraySerializer.prototype.constructor = PrimitiveArraySerializer;
  ReferenceArraySerializer.prototype = Object.create(ListLikeSerializer.prototype);
  ReferenceArraySerializer.prototype.constructor = ReferenceArraySerializer;
  ArrayListSerializer.prototype = Object.create(ListLikeSerializer.prototype);
  ArrayListSerializer.prototype.constructor = ArrayListSerializer;
  LinkedHashSetSerializer.prototype = Object.create(ListLikeSerializer.prototype);
  LinkedHashSetSerializer.prototype.constructor = LinkedHashSetSerializer;
  HashSetSerializer.prototype = Object.create(ListLikeSerializer.prototype);
  HashSetSerializer.prototype.constructor = HashSetSerializer;
  LinkedHashMapSerializer.prototype = Object.create(MapLikeSerializer.prototype);
  LinkedHashMapSerializer.prototype.constructor = LinkedHashMapSerializer;
  HashMapSerializer.prototype = Object.create(MapLikeSerializer.prototype);
  HashMapSerializer.prototype.constructor = HashMapSerializer;
  EnumDescriptor.prototype = Object.create(PluginGeneratedSerialDescriptor.prototype);
  EnumDescriptor.prototype.constructor = EnumDescriptor;
  InlineClassDescriptor.prototype = Object.create(PluginGeneratedSerialDescriptor.prototype);
  InlineClassDescriptor.prototype.constructor = InlineClassDescriptor;
  NoOpEncoder.prototype = Object.create(AbstractEncoder.prototype);
  NoOpEncoder.prototype.constructor = NoOpEncoder;
  ByteArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  ByteArraySerializer_0.prototype.constructor = ByteArraySerializer_0;
  ByteArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  ByteArrayBuilder.prototype.constructor = ByteArrayBuilder;
  ShortArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  ShortArraySerializer_0.prototype.constructor = ShortArraySerializer_0;
  ShortArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  ShortArrayBuilder.prototype.constructor = ShortArrayBuilder;
  IntArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  IntArraySerializer_0.prototype.constructor = IntArraySerializer_0;
  IntArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  IntArrayBuilder.prototype.constructor = IntArrayBuilder;
  LongArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  LongArraySerializer_0.prototype.constructor = LongArraySerializer_0;
  LongArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  LongArrayBuilder.prototype.constructor = LongArrayBuilder;
  FloatArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  FloatArraySerializer_0.prototype.constructor = FloatArraySerializer_0;
  FloatArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  FloatArrayBuilder.prototype.constructor = FloatArrayBuilder;
  DoubleArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  DoubleArraySerializer_0.prototype.constructor = DoubleArraySerializer_0;
  DoubleArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  DoubleArrayBuilder.prototype.constructor = DoubleArrayBuilder;
  CharArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  CharArraySerializer_0.prototype.constructor = CharArraySerializer_0;
  CharArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  CharArrayBuilder.prototype.constructor = CharArrayBuilder;
  BooleanArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  BooleanArraySerializer_0.prototype.constructor = BooleanArraySerializer_0;
  BooleanArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  BooleanArrayBuilder.prototype.constructor = BooleanArrayBuilder;
  NamedValueEncoder.prototype = Object.create(TaggedEncoder.prototype);
  NamedValueEncoder.prototype.constructor = NamedValueEncoder;
  NamedValueDecoder.prototype = Object.create(TaggedDecoder.prototype);
  NamedValueDecoder.prototype.constructor = NamedValueDecoder;
  MapEntrySerializer_0.prototype = Object.create(KeyValueSerializer.prototype);
  MapEntrySerializer_0.prototype.constructor = MapEntrySerializer_0;
  PairSerializer_0.prototype = Object.create(KeyValueSerializer.prototype);
  PairSerializer_0.prototype.constructor = PairSerializer_0;
  SerialModuleImpl.prototype = Object.create(SerializersModule.prototype);
  SerialModuleImpl.prototype.constructor = SerialModuleImpl;
  ContextualProvider$Argless.prototype = Object.create(ContextualProvider.prototype);
  ContextualProvider$Argless.prototype.constructor = ContextualProvider$Argless;
  ContextualProvider$WithTypeArguments.prototype = Object.create(ContextualProvider.prototype);
  ContextualProvider$WithTypeArguments.prototype.constructor = ContextualProvider$WithTypeArguments;
  SerializerAlreadyRegisteredException.prototype = Object.create(IllegalArgumentException.prototype);
  SerializerAlreadyRegisteredException.prototype.constructor = SerializerAlreadyRegisteredException;
  function Serializable(with_0) {
    if (with_0 === void 0)
      with_0 = getKClass(KSerializer);
    this.with = with_0;
  }
  Serializable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Serializable',
    interfaces: [Annotation]
  };
  function Serializer(forClass) {
    this.forClass = forClass;
  }
  Serializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Serializer',
    interfaces: [Annotation]
  };
  function SerialName(value) {
    this.value = value;
  }
  SerialName.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SerialName',
    interfaces: [Annotation]
  };
  function Required() {
  }
  Required.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Required',
    interfaces: [Annotation]
  };
  function Transient() {
  }
  Transient.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Transient',
    interfaces: [Annotation]
  };
  function EncodeDefault(mode) {
    if (mode === void 0)
      mode = EncodeDefault$Mode$ALWAYS_getInstance();
    this.mode = mode;
  }
  function EncodeDefault$Mode(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function EncodeDefault$Mode_initFields() {
    EncodeDefault$Mode_initFields = function () {
    };
    EncodeDefault$Mode$ALWAYS_instance = new EncodeDefault$Mode('ALWAYS', 0);
    EncodeDefault$Mode$NEVER_instance = new EncodeDefault$Mode('NEVER', 1);
  }
  var EncodeDefault$Mode$ALWAYS_instance;
  function EncodeDefault$Mode$ALWAYS_getInstance() {
    EncodeDefault$Mode_initFields();
    return EncodeDefault$Mode$ALWAYS_instance;
  }
  var EncodeDefault$Mode$NEVER_instance;
  function EncodeDefault$Mode$NEVER_getInstance() {
    EncodeDefault$Mode_initFields();
    return EncodeDefault$Mode$NEVER_instance;
  }
  EncodeDefault$Mode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mode',
    interfaces: [Enum]
  };
  function EncodeDefault$Mode$values() {
    return [EncodeDefault$Mode$ALWAYS_getInstance(), EncodeDefault$Mode$NEVER_getInstance()];
  }
  EncodeDefault$Mode.values = EncodeDefault$Mode$values;
  function EncodeDefault$Mode$valueOf(name) {
    switch (name) {
      case 'ALWAYS':
        return EncodeDefault$Mode$ALWAYS_getInstance();
      case 'NEVER':
        return EncodeDefault$Mode$NEVER_getInstance();
      default:throwISE('No enum constant kotlinx.serialization.EncodeDefault.Mode.' + name);
    }
  }
  EncodeDefault$Mode.valueOf_61zpoe$ = EncodeDefault$Mode$valueOf;
  EncodeDefault.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EncodeDefault',
    interfaces: [Annotation]
  };
  function SerialInfo() {
  }
  SerialInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SerialInfo',
    interfaces: [Annotation]
  };
  function InheritableSerialInfo() {
  }
  InheritableSerialInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InheritableSerialInfo',
    interfaces: [Annotation]
  };
  function Contextual() {
  }
  Contextual.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Contextual',
    interfaces: [Annotation]
  };
  function UseContextualSerialization(forClasses) {
    this.forClasses = forClasses;
  }
  UseContextualSerialization.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UseContextualSerialization',
    interfaces: [Annotation]
  };
  function UseSerializers(serializerClasses) {
    this.serializerClasses = serializerClasses;
  }
  UseSerializers.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UseSerializers',
    interfaces: [Annotation]
  };
  function Polymorphic() {
  }
  Polymorphic.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Polymorphic',
    interfaces: [Annotation]
  };
  function ExperimentalSerializationApi() {
  }
  ExperimentalSerializationApi.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ExperimentalSerializationApi',
    interfaces: [Annotation]
  };
  function InternalSerializationApi() {
  }
  InternalSerializationApi.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InternalSerializationApi',
    interfaces: [Annotation]
  };
  function ContextualSerializer(serializableClass, fallbackSerializer, typeArgumentsSerializers) {
    this.serializableClass_0 = serializableClass;
    this.fallbackSerializer_0 = fallbackSerializer;
    this.typeArgumentsSerializers_0 = asList(typeArgumentsSerializers);
    this.descriptor_ay3qfp$_0 = withContext(buildSerialDescriptor('kotlinx.serialization.ContextualSerializer', SerialKind$CONTEXTUAL_getInstance(), [], ContextualSerializer$descriptor$lambda(this)), this.serializableClass_0);
  }
  ContextualSerializer.prototype.serializer_0 = function (serializersModule) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = serializersModule.getContextual_2n2k9f$(this.serializableClass_0, this.typeArgumentsSerializers_0)) != null ? tmp$ : this.fallbackSerializer_0) != null ? tmp$_0 : serializerNotRegistered(this.serializableClass_0);
  };
  Object.defineProperty(ContextualSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_ay3qfp$_0;
    }
  });
  ContextualSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    encoder.encodeSerializableValue_tf03ej$(this.serializer_0(encoder.serializersModule), value);
  };
  ContextualSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return decoder.decodeSerializableValue_w63s0f$(this.serializer_0(decoder.serializersModule));
  };
  function ContextualSerializer$descriptor$lambda(this$ContextualSerializer) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      var $receiver_0 = (tmp$_0 = (tmp$ = this$ContextualSerializer.fallbackSerializer_0) != null ? tmp$.descriptor : null) != null ? tmp$_0.annotations : null;
      $receiver.annotations = $receiver_0 != null ? $receiver_0 : emptyList();
      return Unit;
    };
  }
  ContextualSerializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ContextualSerializer',
    interfaces: [KSerializer]
  };
  function ContextualSerializer_init(serializableClass, $this) {
    $this = $this || Object.create(ContextualSerializer.prototype);
    ContextualSerializer.call($this, serializableClass, null, EMPTY_SERIALIZER_ARRAY);
    return $this;
  }
  function KSerializer() {
  }
  KSerializer.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'KSerializer',
    interfaces: [DeserializationStrategy, SerializationStrategy]
  };
  function SerializationStrategy() {
  }
  SerializationStrategy.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SerializationStrategy',
    interfaces: []
  };
  function DeserializationStrategy() {
  }
  DeserializationStrategy.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DeserializationStrategy',
    interfaces: []
  };
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.baseClass_x5jvam$_0 = baseClass;
    this._annotations_0 = emptyList();
    this.descriptor_nog3ww$_0 = lazy(LazyThreadSafetyMode.PUBLICATION, PolymorphicSerializer$descriptor$lambda(this));
  }
  Object.defineProperty(PolymorphicSerializer.prototype, 'baseClass', {
    get: function () {
      return this.baseClass_x5jvam$_0;
    }
  });
  Object.defineProperty(PolymorphicSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_nog3ww$_0.value;
    }
  });
  PolymorphicSerializer.prototype.toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + this.baseClass + ')';
  };
  function PolymorphicSerializer$descriptor$lambda$lambda(this$PolymorphicSerializer) {
    return function ($receiver) {
      $receiver.element_vxrguq$('type', serializer_13(kotlin_js_internal_StringCompanionObject).descriptor);
      $receiver.element_vxrguq$('value', buildSerialDescriptor('kotlinx.serialization.Polymorphic<' + toString(this$PolymorphicSerializer.baseClass.simpleName) + '>', SerialKind$CONTEXTUAL_getInstance(), []));
      $receiver.annotations = this$PolymorphicSerializer._annotations_0;
      return Unit;
    };
  }
  function PolymorphicSerializer$descriptor$lambda(this$PolymorphicSerializer) {
    return function () {
      return withContext(buildSerialDescriptor('kotlinx.serialization.Polymorphic', PolymorphicKind$OPEN_getInstance(), [], PolymorphicSerializer$descriptor$lambda$lambda(this$PolymorphicSerializer)), this$PolymorphicSerializer.baseClass);
    };
  }
  PolymorphicSerializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PolymorphicSerializer',
    interfaces: [AbstractPolymorphicSerializer]
  };
  function PolymorphicSerializer_init(baseClass, classAnnotations, $this) {
    $this = $this || Object.create(PolymorphicSerializer.prototype);
    PolymorphicSerializer.call($this, baseClass);
    $this._annotations_0 = asList(classAnnotations);
    return $this;
  }
  function findPolymorphicSerializer($receiver, decoder, klassName) {
    var tmp$;
    return (tmp$ = $receiver.findPolymorphicSerializerOrNull_ca6uye$(decoder, klassName)) != null ? tmp$ : throwSubtypeNotRegistered(klassName, $receiver.baseClass);
  }
  function findPolymorphicSerializer_0($receiver, encoder, value) {
    var tmp$;
    return (tmp$ = $receiver.findPolymorphicSerializerOrNull_kjsxpj$(encoder, value)) != null ? tmp$ : throwSubtypeNotRegistered_0(Kotlin.getKClassFromExpression(value), $receiver.baseClass);
  }
  function groupingBy$ObjectLiteral(this$groupingBy, closure$keySelector) {
    this.this$groupingBy = this$groupingBy;
    this.closure$keySelector = closure$keySelector;
  }
  groupingBy$ObjectLiteral.prototype.sourceIterator = function () {
    return this.this$groupingBy.iterator();
  };
  groupingBy$ObjectLiteral.prototype.keyOf_11rb$ = function (element) {
    return this.closure$keySelector(element);
  };
  groupingBy$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Grouping]};
  function SealedClassSerializer(serialName, baseClass, subclasses, subclassSerializers) {
    AbstractPolymorphicSerializer.call(this);
    this.baseClass_a0a98o$_0 = baseClass;
    this._annotations_0 = emptyList();
    this.descriptor_gganzq$_0 = lazy(LazyThreadSafetyMode.PUBLICATION, SealedClassSerializer$descriptor$lambda(serialName, this, subclassSerializers));
    this.class2Serializer_0 = null;
    this.serialName2Serializer_0 = null;
    if (subclasses.length !== subclassSerializers.length) {
      throw IllegalArgumentException_init('All subclasses of sealed class ' + toString(this.baseClass.simpleName) + ' should be marked @Serializable');
    }this.class2Serializer_0 = toMap(zip(subclasses, subclassSerializers));
    var $receiver = new groupingBy$ObjectLiteral(this.class2Serializer_0.entries, SealedClassSerializer_init$lambda);
    var destination = LinkedHashMap_init();
    var tmp$;
    tmp$ = $receiver.sourceIterator();
    while (tmp$.hasNext()) {
      var e = tmp$.next();
      var key = $receiver.keyOf_11rb$(e);
      var accumulator = destination.get_11rb$(key);
      var tmp$_0 = destination.put_xwzc9p$;
      accumulator == null && !destination.containsKey_11rb$(key);
      if (accumulator != null) {
        throw IllegalStateException_init(("Multiple sealed subclasses of '" + this.baseClass + "' have the same serial name '" + key + "':" + (" '" + accumulator.key + "', '" + e.key + "'")).toString());
      }tmp$_0.call(destination, key, e);
    }
    var destination_0 = LinkedHashMap_init_0(mapCapacity(destination.size));
    var tmp$_1;
    tmp$_1 = destination.entries.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      destination_0.put_xwzc9p$(element.key, element.value.value);
    }
    this.serialName2Serializer_0 = destination_0;
  }
  Object.defineProperty(SealedClassSerializer.prototype, 'baseClass', {
    get: function () {
      return this.baseClass_a0a98o$_0;
    }
  });
  Object.defineProperty(SealedClassSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_gganzq$_0.value;
    }
  });
  SealedClassSerializer.prototype.findPolymorphicSerializerOrNull_ca6uye$ = function (decoder, klassName) {
    var tmp$;
    var $receiver = this.serialName2Serializer_0;
    var tmp$_0;
    return (tmp$ = (Kotlin.isType(tmp$_0 = $receiver, Map) ? tmp$_0 : throwCCE()).get_11rb$(klassName)) != null ? tmp$ : AbstractPolymorphicSerializer.prototype.findPolymorphicSerializerOrNull_ca6uye$.call(this, decoder, klassName);
  };
  SealedClassSerializer.prototype.findPolymorphicSerializerOrNull_kjsxpj$ = function (encoder, value) {
    var tmp$, tmp$_0;
    var tmp$_1;
    if ((tmp$_0 = (tmp$ = this.class2Serializer_0.get_11rb$(Kotlin.getKClassFromExpression(value))) != null ? tmp$ : AbstractPolymorphicSerializer.prototype.findPolymorphicSerializerOrNull_kjsxpj$.call(this, encoder, value)) != null) {
      var tmp$_2;
      tmp$_1 = Kotlin.isType(tmp$_2 = tmp$_0, SerializationStrategy) ? tmp$_2 : throwCCE();
    } else
      tmp$_1 = null;
    return tmp$_1;
  };
  function SealedClassSerializer$descriptor$lambda$lambda$lambda(closure$subclassSerializers) {
    return function ($receiver) {
      var $receiver_0 = closure$subclassSerializers;
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var element = $receiver_0[tmp$];
        var d = element.descriptor;
        $receiver.element_vxrguq$(d.serialName, d);
      }
      return Unit;
    };
  }
  function SealedClassSerializer$descriptor$lambda$lambda(this$SealedClassSerializer, closure$subclassSerializers) {
    return function ($receiver) {
      $receiver.element_vxrguq$('type', serializer_13(kotlin_js_internal_StringCompanionObject).descriptor);
      var elementDescriptor = buildSerialDescriptor('kotlinx.serialization.Sealed<' + toString(this$SealedClassSerializer.baseClass.simpleName) + '>', SerialKind$CONTEXTUAL_getInstance(), [], SealedClassSerializer$descriptor$lambda$lambda$lambda(closure$subclassSerializers));
      $receiver.element_vxrguq$('value', elementDescriptor);
      $receiver.annotations = this$SealedClassSerializer._annotations_0;
      return Unit;
    };
  }
  function SealedClassSerializer$descriptor$lambda(closure$serialName, this$SealedClassSerializer, closure$subclassSerializers) {
    return function () {
      return buildSerialDescriptor(closure$serialName, PolymorphicKind$SEALED_getInstance(), [], SealedClassSerializer$descriptor$lambda$lambda(this$SealedClassSerializer, closure$subclassSerializers));
    };
  }
  function SealedClassSerializer_init$lambda(it) {
    return it.value.descriptor.serialName;
  }
  SealedClassSerializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SealedClassSerializer',
    interfaces: [AbstractPolymorphicSerializer]
  };
  function SealedClassSerializer_init(serialName, baseClass, subclasses, subclassSerializers, classAnnotations, $this) {
    $this = $this || Object.create(SealedClassSerializer.prototype);
    SealedClassSerializer.call($this, serialName, baseClass, subclasses, subclassSerializers);
    $this._annotations_0 = asList(classAnnotations);
    return $this;
  }
  function SerialFormat() {
  }
  SerialFormat.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SerialFormat',
    interfaces: []
  };
  function BinaryFormat() {
  }
  BinaryFormat.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BinaryFormat',
    interfaces: [SerialFormat]
  };
  function StringFormat() {
  }
  StringFormat.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'StringFormat',
    interfaces: [SerialFormat]
  };
  var encodeToString = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-js-legacy.kotlinx.serialization.encodeToString_6mcrb2$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var serializer = _.kotlinx.serialization.serializer_ca95z9$;
    var KSerializer = _.kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT, $receiver, value) {
      var tmp$;
      return $receiver.encodeToString_tf03ej$(Kotlin.isType(tmp$ = serializer($receiver.serializersModule, getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$ : throwCCE(), value);
    };
  }));
  var decodeFromString = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-js-legacy.kotlinx.serialization.decodeFromString_9hwa22$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var serializer = _.kotlinx.serialization.serializer_ca95z9$;
    var KSerializer = _.kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT, $receiver, string) {
      var tmp$;
      return $receiver.decodeFromString_awif5v$(Kotlin.isType(tmp$ = serializer($receiver.serializersModule, getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$ : throwCCE(), string);
    };
  }));
  function encodeToHexString($receiver, serializer, value) {
    return InternalHexConverter_getInstance().printHexBinary_1fhb37$($receiver.encodeToByteArray_tf03ej$(serializer, value), true);
  }
  function decodeFromHexString($receiver, deserializer, hex) {
    return $receiver.decodeFromByteArray_dntfbn$(deserializer, InternalHexConverter_getInstance().parseHexBinary_61zpoe$(hex));
  }
  var encodeToHexString_0 = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-js-legacy.kotlinx.serialization.encodeToHexString_8urtbi$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var encodeToHexString = _.kotlinx.serialization.encodeToHexString_4yxkwp$;
    var serializer = _.kotlinx.serialization.serializer_ca95z9$;
    var KSerializer = _.kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT, $receiver, value) {
      var tmp$;
      return encodeToHexString($receiver, Kotlin.isType(tmp$ = serializer($receiver.serializersModule, getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$ : throwCCE(), value);
    };
  }));
  var decodeFromHexString_0 = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-js-legacy.kotlinx.serialization.decodeFromHexString_d2thiy$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var decodeFromHexString = _.kotlinx.serialization.decodeFromHexString_f786sb$;
    var serializer = _.kotlinx.serialization.serializer_ca95z9$;
    var KSerializer = _.kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT, $receiver, hex) {
      var tmp$;
      return decodeFromHexString($receiver, Kotlin.isType(tmp$ = serializer($receiver.serializersModule, getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$ : throwCCE(), hex);
    };
  }));
  var encodeToByteArray = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-js-legacy.kotlinx.serialization.encodeToByteArray_8urtbi$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var serializer = _.kotlinx.serialization.serializer_ca95z9$;
    var KSerializer = _.kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT, $receiver, value) {
      var tmp$;
      return $receiver.encodeToByteArray_tf03ej$(Kotlin.isType(tmp$ = serializer($receiver.serializersModule, getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$ : throwCCE(), value);
    };
  }));
  var decodeFromByteArray = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-js-legacy.kotlinx.serialization.decodeFromByteArray_cbh7ow$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var serializer = _.kotlinx.serialization.serializer_ca95z9$;
    var KSerializer = _.kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT, $receiver, bytes) {
      var tmp$;
      return $receiver.decodeFromByteArray_dntfbn$(Kotlin.isType(tmp$ = serializer($receiver.serializersModule, getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$ : throwCCE(), bytes);
    };
  }));
  function SerializationException() {
    this.name = 'SerializationException';
  }
  SerializationException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SerializationException',
    interfaces: [IllegalArgumentException]
  };
  function SerializationException_init($this) {
    $this = $this || Object.create(SerializationException.prototype);
    IllegalArgumentException_init_0($this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_0(message, $this) {
    $this = $this || Object.create(SerializationException.prototype);
    IllegalArgumentException_init(message, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_1(message, cause, $this) {
    $this = $this || Object.create(SerializationException.prototype);
    IllegalArgumentException.call($this, message, cause);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_2(cause, $this) {
    $this = $this || Object.create(SerializationException.prototype);
    IllegalArgumentException_init_1(cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function MissingFieldException(message, cause) {
    SerializationException_init_1(message, cause, this);
    this.name = 'MissingFieldException';
  }
  MissingFieldException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MissingFieldException',
    interfaces: [SerializationException]
  };
  function MissingFieldException_init(fieldName, $this) {
    $this = $this || Object.create(MissingFieldException.prototype);
    MissingFieldException.call($this, "Field '" + fieldName + "' is required, but it was missing", null);
    return $this;
  }
  function MissingFieldException_init_0(fieldNames, serialName, $this) {
    $this = $this || Object.create(MissingFieldException.prototype);
    MissingFieldException.call($this, fieldNames.size === 1 ? "Field '" + fieldNames.get_za3lpa$(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + fieldNames + " are required for type with serial name '" + serialName + "', but they were missing", null);
    return $this;
  }
  function UnknownFieldException(message) {
    SerializationException_init_0(message, this);
    this.name = 'UnknownFieldException';
  }
  UnknownFieldException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UnknownFieldException',
    interfaces: [SerializationException]
  };
  function UnknownFieldException_init(index, $this) {
    $this = $this || Object.create(UnknownFieldException.prototype);
    UnknownFieldException.call($this, 'An unknown field for index ' + index);
    return $this;
  }
  var serializer = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-js-legacy.kotlinx.serialization.serializer_287e2$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var serializer = _.kotlinx.serialization.serializer_saj79j$;
    var KSerializer = _.kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT) {
      var tmp$;
      return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$ : throwCCE();
    };
  }));
  var serializer_0 = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-js-legacy.kotlinx.serialization.serializer_3pytt4$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var serializer = _.kotlinx.serialization.serializer_ca95z9$;
    var KSerializer = _.kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT, $receiver) {
      var tmp$;
      return Kotlin.isType(tmp$ = serializer($receiver, getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$ : throwCCE();
    };
  }));
  function serializer_1(type) {
    return serializer_2(EmptySerializersModule, type);
  }
  function serializerOrNull(type) {
    return serializerOrNull_0(EmptySerializersModule, type);
  }
  function serializer_2($receiver, type) {
    var tmp$;
    return (tmp$ = serializerByKTypeImpl($receiver, type, true)) != null ? tmp$ : platformSpecificSerializerNotRegistered(kclass(type));
  }
  function serializerOrNull_0($receiver, type) {
    return serializerByKTypeImpl($receiver, type, false);
  }
  function serializerByKTypeImpl($receiver, type, failOnMissingTypeArgSerializer) {
    var tmp$, tmp$_0;
    var rootClass = kclass(type);
    var isNullable = type.isMarkedNullable;
    var $receiver_0 = type.arguments;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_1;
    tmp$_1 = $receiver_0.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      var tmp$_2 = destination.add_11rb$;
      var value = item.type;
      var requireNotNull$result;
      if (value == null) {
        var message = 'Star projections in type arguments are not allowed, but had ' + type;
        throw IllegalArgumentException_init(message.toString());
      } else {
        requireNotNull$result = value;
      }
      tmp$_2.call(destination, requireNotNull$result);
    }
    var typeArguments = destination;
    if (typeArguments.isEmpty())
      tmp$_0 = (tmp$ = serializerOrNull_1(rootClass)) != null ? tmp$ : $receiver.getContextual_2n2k9f$(rootClass);
    else
      tmp$_0 = builtinSerializer($receiver, typeArguments, rootClass, failOnMissingTypeArgSerializer);
    var tmp$_3;
    if (tmp$_0 != null) {
      var tmp$_4;
      tmp$_3 = Kotlin.isType(tmp$_4 = tmp$_0, KSerializer) ? tmp$_4 : throwCCE();
    } else
      tmp$_3 = null;
    var result = tmp$_3;
    return result != null ? nullable(result, isNullable) : null;
  }
  function builtinSerializer($receiver, typeArguments, rootClass, failOnMissingTypeArgSerializer) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (failOnMissingTypeArgSerializer) {
      var transform = getCallableRef('serializer', function ($receiver, p1) {
        return serializer_2($receiver, p1);
      }.bind(null, $receiver));
      var destination = ArrayList_init(collectionSizeOrDefault(typeArguments, 10));
      var tmp$_3;
      tmp$_3 = typeArguments.iterator();
      while (tmp$_3.hasNext()) {
        var item = tmp$_3.next();
        destination.add_11rb$(transform(item));
      }
      tmp$ = destination;
    } else {
      var destination_0 = ArrayList_init(collectionSizeOrDefault(typeArguments, 10));
      var tmp$_4;
      tmp$_4 = typeArguments.iterator();
      while (tmp$_4.hasNext()) {
        var item_0 = tmp$_4.next();
        var tmp$_5 = destination_0.add_11rb$;
        var tmp$_6;
        tmp$_6 = serializerOrNull_0($receiver, item_0);
        if (tmp$_6 == null) {
          return null;
        }tmp$_5.call(destination_0, tmp$_6);
      }
      tmp$ = destination_0;
    }
    var serializers = tmp$;
    if (equals(rootClass, getKClass(Collection)) || equals(rootClass, getKClass(List)) || equals(rootClass, getKClass(MutableList)) || equals(rootClass, getKClass(ArrayList)))
      tmp$_2 = new ArrayListSerializer(serializers.get_za3lpa$(0));
    else if (equals(rootClass, getKClass(HashSet)))
      tmp$_2 = new HashSetSerializer(serializers.get_za3lpa$(0));
    else if (equals(rootClass, getKClass(Set)) || equals(rootClass, getKClass(MutableSet)) || equals(rootClass, getKClass(LinkedHashSet)))
      tmp$_2 = new LinkedHashSetSerializer(serializers.get_za3lpa$(0));
    else if (equals(rootClass, getKClass(HashMap)))
      tmp$_2 = new HashMapSerializer(serializers.get_za3lpa$(0), serializers.get_za3lpa$(1));
    else if (equals(rootClass, getKClass(Map)) || equals(rootClass, getKClass(MutableMap)) || equals(rootClass, getKClass(LinkedHashMap)))
      tmp$_2 = new LinkedHashMapSerializer(serializers.get_za3lpa$(0), serializers.get_za3lpa$(1));
    else if (equals(rootClass, getKClass(Map$Entry)))
      tmp$_2 = MapEntrySerializer(serializers.get_za3lpa$(0), serializers.get_za3lpa$(1));
    else if (equals(rootClass, getKClass(Pair)))
      tmp$_2 = PairSerializer(serializers.get_za3lpa$(0), serializers.get_za3lpa$(1));
    else if (equals(rootClass, getKClass(Triple)))
      tmp$_2 = TripleSerializer(serializers.get_za3lpa$(0), serializers.get_za3lpa$(1), serializers.get_za3lpa$(2));
    else {
      if (isReferenceArray(rootClass)) {
        var tmp$_7;
        return Kotlin.isType(tmp$_7 = ArraySerializer_0(Kotlin.isType(tmp$_0 = typeArguments.get_za3lpa$(0).classifier, KClass) ? tmp$_0 : throwCCE(), serializers.get_za3lpa$(0)), KSerializer) ? tmp$_7 : throwCCE();
      }var args = copyToArray(serializers);
      tmp$_2 = (tmp$_1 = constructSerializerForGivenTypeArgs(rootClass, args.slice())) != null ? tmp$_1 : reflectiveOrContextual($receiver, rootClass, serializers);
    }
    return tmp$_2;
  }
  function reflectiveOrContextual($receiver, kClass, typeArgumentsSerializers) {
    var tmp$;
    return (tmp$ = serializerOrNull_1(kClass)) != null ? tmp$ : $receiver.getContextual_2n2k9f$(kClass, typeArgumentsSerializers);
  }
  function serializer_3($receiver) {
    var tmp$;
    return (tmp$ = serializerOrNull_1($receiver)) != null ? tmp$ : serializerNotRegistered($receiver);
  }
  function serializerOrNull_1($receiver) {
    var tmp$;
    return (tmp$ = compiledSerializerImpl($receiver)) != null ? tmp$ : builtinSerializerOrNull($receiver);
  }
  function nullable($receiver, shouldBeNullable) {
    var tmp$;
    if (shouldBeNullable)
      return get_nullable($receiver);
    return Kotlin.isType(tmp$ = $receiver, KSerializer) ? tmp$ : throwCCE();
  }
  function get_nullable($receiver) {
    var tmp$;
    return $receiver.descriptor.isNullable ? Kotlin.isType(tmp$ = $receiver, KSerializer) ? tmp$ : throwCCE() : new NullableSerializer($receiver);
  }
  function PairSerializer(keySerializer, valueSerializer) {
    return new PairSerializer_0(keySerializer, valueSerializer);
  }
  function MapEntrySerializer(keySerializer, valueSerializer) {
    return new MapEntrySerializer_0(keySerializer, valueSerializer);
  }
  function TripleSerializer(aSerializer, bSerializer, cSerializer) {
    return new TripleSerializer_0(aSerializer, bSerializer, cSerializer);
  }
  function serializer_4($receiver) {
    return CharSerializer_getInstance();
  }
  function CharArraySerializer() {
    return CharArraySerializer_getInstance();
  }
  function serializer_5($receiver) {
    return ByteSerializer_getInstance();
  }
  function ByteArraySerializer() {
    return ByteArraySerializer_getInstance();
  }
  function serializer_6($receiver) {
    return ShortSerializer_getInstance();
  }
  function ShortArraySerializer() {
    return ShortArraySerializer_getInstance();
  }
  function serializer_7($receiver) {
    return IntSerializer_getInstance();
  }
  function IntArraySerializer() {
    return IntArraySerializer_getInstance();
  }
  function serializer_8($receiver) {
    return LongSerializer_getInstance();
  }
  function LongArraySerializer() {
    return LongArraySerializer_getInstance();
  }
  function serializer_9($receiver) {
    return FloatSerializer_getInstance();
  }
  function FloatArraySerializer() {
    return FloatArraySerializer_getInstance();
  }
  function serializer_10($receiver) {
    return DoubleSerializer_getInstance();
  }
  function DoubleArraySerializer() {
    return DoubleArraySerializer_getInstance();
  }
  function serializer_11($receiver) {
    return BooleanSerializer_getInstance();
  }
  function BooleanArraySerializer() {
    return BooleanArraySerializer_getInstance();
  }
  function serializer_12($receiver) {
    return UnitSerializer_getInstance();
  }
  function serializer_13($receiver) {
    return StringSerializer_getInstance();
  }
  var ArraySerializer = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-js-legacy.kotlinx.serialization.builtins.ArraySerializer_furkhx$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var ArraySerializer = _.kotlinx.serialization.builtins.ArraySerializer_8tn5u0$;
    return function (T_0, isT, E_0, isE, elementSerializer) {
      return ArraySerializer(getKClass(T_0), elementSerializer);
    };
  }));
  function ArraySerializer_0(kClass, elementSerializer) {
    return new ReferenceArraySerializer(kClass, elementSerializer);
  }
  function ListSerializer(elementSerializer) {
    return new ArrayListSerializer(elementSerializer);
  }
  function SetSerializer(elementSerializer) {
    return new LinkedHashSetSerializer(elementSerializer);
  }
  function MapSerializer(keySerializer, valueSerializer) {
    return new LinkedHashMapSerializer(keySerializer, valueSerializer);
  }
  function serializer_14($receiver) {
    return UIntSerializer_getInstance();
  }
  function serializer_15($receiver) {
    return ULongSerializer_getInstance();
  }
  function serializer_16($receiver) {
    return UByteSerializer_getInstance();
  }
  function serializer_17($receiver) {
    return UShortSerializer_getInstance();
  }
  function LongAsStringSerializer() {
    LongAsStringSerializer_instance = this;
    this.descriptor_hs6dkn$_0 = PrimitiveSerialDescriptor('kotlinx.serialization.LongAsStringSerializer', PrimitiveKind$STRING_getInstance());
  }
  Object.defineProperty(LongAsStringSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_hs6dkn$_0;
    }
  });
  LongAsStringSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    encoder.encodeString_61zpoe$(value.toString());
  };
  LongAsStringSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return toLong(decoder.decodeString());
  };
  LongAsStringSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LongAsStringSerializer',
    interfaces: [KSerializer]
  };
  var LongAsStringSerializer_instance = null;
  function LongAsStringSerializer_getInstance() {
    if (LongAsStringSerializer_instance === null) {
      new LongAsStringSerializer();
    }return LongAsStringSerializer_instance;
  }
  function get_capturedKClass($receiver) {
    if (Kotlin.isType($receiver, ContextDescriptor))
      return $receiver.kClass;
    else if (Kotlin.isType($receiver, SerialDescriptorForNullable))
      return get_capturedKClass($receiver.original_8be2vx$);
    else
      return null;
  }
  function getContextualDescriptor($receiver, descriptor) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = get_capturedKClass(descriptor)) != null) {
      var tmp$_1;
      tmp$_0 = (tmp$_1 = $receiver.getContextual_2n2k9f$(tmp$)) != null ? tmp$_1.descriptor : null;
    } else
      tmp$_0 = null;
    return tmp$_0;
  }
  function getPolymorphicDescriptors($receiver, descriptor) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = get_capturedKClass(descriptor);
    if (tmp$ == null) {
      return emptyList();
    }var kClass = tmp$;
    var $receiver_0 = (tmp$_1 = (Kotlin.isType(tmp$_0 = $receiver, SerialModuleImpl) ? tmp$_0 : throwCCE()).polyBase2Serializers.get_11rb$(kClass)) != null ? tmp$_1.values : null;
    var $receiver_1 = $receiver_0 != null ? $receiver_0 : emptyList();
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_1, 10));
    var tmp$_2;
    tmp$_2 = $receiver_1.iterator();
    while (tmp$_2.hasNext()) {
      var item = tmp$_2.next();
      destination.add_11rb$(item.descriptor);
    }
    return destination;
  }
  function withContext($receiver, context) {
    return new ContextDescriptor($receiver, context);
  }
  function ContextDescriptor(original, kClass) {
    this.original_0 = original;
    this.kClass = kClass;
    this.serialName_nfhor0$_0 = this.original_0.serialName + '<' + toString(this.kClass.simpleName) + '>';
  }
  Object.defineProperty(ContextDescriptor.prototype, 'serialName', {
    configurable: true,
    get: function () {
      return this.serialName_nfhor0$_0;
    }
  });
  ContextDescriptor.prototype.equals = function (other) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$_0 = Kotlin.isType(tmp$ = other, ContextDescriptor) ? tmp$ : null;
    if (tmp$_0 == null) {
      return false;
    }var another = tmp$_0;
    return equals(this.original_0, another.original_0) && ((tmp$_1 = another.kClass) != null ? tmp$_1.equals(this.kClass) : null);
  };
  ContextDescriptor.prototype.hashCode = function () {
    var result = this.kClass.hashCode();
    result = (31 * result | 0) + hashCode(this.serialName) | 0;
    return result;
  };
  ContextDescriptor.prototype.toString = function () {
    return 'ContextDescriptor(kClass: ' + this.kClass + ', original: ' + this.original_0 + ')';
  };
  Object.defineProperty(ContextDescriptor.prototype, 'annotations', {
    configurable: true,
    get: function () {
      return this.original_0.annotations;
    }
  });
  Object.defineProperty(ContextDescriptor.prototype, 'elementsCount', {
    configurable: true,
    get: function () {
      return this.original_0.elementsCount;
    }
  });
  Object.defineProperty(ContextDescriptor.prototype, 'isInline', {
    configurable: true,
    get: function () {
      return this.original_0.isInline;
    }
  });
  Object.defineProperty(ContextDescriptor.prototype, 'isNullable', {
    configurable: true,
    get: function () {
      return this.original_0.isNullable;
    }
  });
  Object.defineProperty(ContextDescriptor.prototype, 'kind', {
    configurable: true,
    get: function () {
      return this.original_0.kind;
    }
  });
  ContextDescriptor.prototype.getElementAnnotations_za3lpa$ = function (index) {
    return this.original_0.getElementAnnotations_za3lpa$(index);
  };
  ContextDescriptor.prototype.getElementDescriptor_za3lpa$ = function (index) {
    return this.original_0.getElementDescriptor_za3lpa$(index);
  };
  ContextDescriptor.prototype.getElementIndex_61zpoe$ = function (name) {
    return this.original_0.getElementIndex_61zpoe$(name);
  };
  ContextDescriptor.prototype.getElementName_za3lpa$ = function (index) {
    return this.original_0.getElementName_za3lpa$(index);
  };
  ContextDescriptor.prototype.isElementOptional_za3lpa$ = function (index) {
    return this.original_0.isElementOptional_za3lpa$(index);
  };
  ContextDescriptor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ContextDescriptor',
    interfaces: [SerialDescriptor]
  };
  function Iterable$ObjectLiteral(closure$iterator) {
    this.closure$iterator = closure$iterator;
  }
  Iterable$ObjectLiteral.prototype.iterator = function () {
    return this.closure$iterator();
  };
  Iterable$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Iterable]};
  function SerialDescriptor() {
  }
  Object.defineProperty(SerialDescriptor.prototype, 'isNullable', {
    configurable: true,
    get: function () {
      return false;
    }
  });
  Object.defineProperty(SerialDescriptor.prototype, 'isInline', {
    configurable: true,
    get: function () {
      return false;
    }
  });
  Object.defineProperty(SerialDescriptor.prototype, 'annotations', {
    configurable: true,
    get: function () {
      return emptyList();
    }
  });
  SerialDescriptor.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SerialDescriptor',
    interfaces: []
  };
  function get_elementDescriptors$lambda$ObjectLiteral(this$elementDescriptors) {
    this.this$elementDescriptors = this$elementDescriptors;
    this.elementsLeft_0 = this$elementDescriptors.elementsCount;
  }
  get_elementDescriptors$lambda$ObjectLiteral.prototype.hasNext = function () {
    return this.elementsLeft_0 > 0;
  };
  get_elementDescriptors$lambda$ObjectLiteral.prototype.next = function () {
    var tmp$, tmp$_0, tmp$_1;
    tmp$_1 = this.this$elementDescriptors.elementsCount;
    tmp$_0 = (tmp$ = this.elementsLeft_0, this.elementsLeft_0 = tmp$ - 1 | 0, tmp$);
    return this.this$elementDescriptors.getElementDescriptor_za3lpa$(tmp$_1 - tmp$_0 | 0);
  };
  get_elementDescriptors$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Iterator]
  };
  function get_elementDescriptors$lambda(this$elementDescriptors) {
    return function () {
      return new get_elementDescriptors$lambda$ObjectLiteral(this$elementDescriptors);
    };
  }
  function get_elementDescriptors($receiver) {
    return new Iterable$ObjectLiteral(get_elementDescriptors$lambda($receiver));
  }
  function get_elementNames$lambda$ObjectLiteral(this$elementNames) {
    this.this$elementNames = this$elementNames;
    this.elementsLeft_0 = this$elementNames.elementsCount;
  }
  get_elementNames$lambda$ObjectLiteral.prototype.hasNext = function () {
    return this.elementsLeft_0 > 0;
  };
  get_elementNames$lambda$ObjectLiteral.prototype.next = function () {
    var tmp$, tmp$_0, tmp$_1;
    tmp$_1 = this.this$elementNames.elementsCount;
    tmp$_0 = (tmp$ = this.elementsLeft_0, this.elementsLeft_0 = tmp$ - 1 | 0, tmp$);
    return this.this$elementNames.getElementName_za3lpa$(tmp$_1 - tmp$_0 | 0);
  };
  get_elementNames$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Iterator]
  };
  function get_elementNames$lambda(this$elementNames) {
    return function () {
      return new get_elementNames$lambda$ObjectLiteral(this$elementNames);
    };
  }
  function get_elementNames($receiver) {
    return new Iterable$ObjectLiteral(get_elementNames$lambda($receiver));
  }
  function buildClassSerialDescriptor$lambda($receiver) {
    return Unit;
  }
  function buildClassSerialDescriptor(serialName, typeParameters, builderAction) {
    if (builderAction === void 0)
      builderAction = buildClassSerialDescriptor$lambda;
    if (!!isBlank(serialName)) {
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init(message.toString());
    }var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builderAction(sdBuilder);
    return new SerialDescriptorImpl(serialName, StructureKind$CLASS_getInstance(), sdBuilder.elementNames_8be2vx$.size, toList(typeParameters), sdBuilder);
  }
  function PrimitiveSerialDescriptor(serialName, kind) {
    if (!!isBlank(serialName)) {
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init(message.toString());
    }return PrimitiveDescriptorSafe(serialName, kind);
  }
  function SerialDescriptor_0(serialName, original) {
    if (!!isBlank(serialName)) {
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init(message.toString());
    }if (!!Kotlin.isType(original.kind, PrimitiveKind)) {
      var message_0 = "For primitive descriptors please use 'PrimitiveSerialDescriptor' instead";
      throw IllegalArgumentException_init(message_0.toString());
    }if (!!equals(serialName, original.serialName)) {
      var message_1 = 'The name of the wrapped descriptor (' + serialName + ') cannot be the same as the name of the original descriptor (' + original.serialName + ')';
      throw IllegalArgumentException_init(message_1.toString());
    }return new WrappedSerialDescriptor(serialName, original);
  }
  function WrappedSerialDescriptor(serialName, original) {
    this.serialName_dnqykq$_0 = serialName;
    this.$delegate_nnj7h3$_0 = original;
  }
  Object.defineProperty(WrappedSerialDescriptor.prototype, 'serialName', {
    get: function () {
      return this.serialName_dnqykq$_0;
    }
  });
  Object.defineProperty(WrappedSerialDescriptor.prototype, 'annotations', {
    configurable: true,
    get: function () {
      return this.$delegate_nnj7h3$_0.annotations;
    }
  });
  Object.defineProperty(WrappedSerialDescriptor.prototype, 'elementsCount', {
    configurable: true,
    get: function () {
      return this.$delegate_nnj7h3$_0.elementsCount;
    }
  });
  Object.defineProperty(WrappedSerialDescriptor.prototype, 'isInline', {
    configurable: true,
    get: function () {
      return this.$delegate_nnj7h3$_0.isInline;
    }
  });
  Object.defineProperty(WrappedSerialDescriptor.prototype, 'isNullable', {
    configurable: true,
    get: function () {
      return this.$delegate_nnj7h3$_0.isNullable;
    }
  });
  Object.defineProperty(WrappedSerialDescriptor.prototype, 'kind', {
    configurable: true,
    get: function () {
      return this.$delegate_nnj7h3$_0.kind;
    }
  });
  WrappedSerialDescriptor.prototype.getElementAnnotations_za3lpa$ = function (index) {
    return this.$delegate_nnj7h3$_0.getElementAnnotations_za3lpa$(index);
  };
  WrappedSerialDescriptor.prototype.getElementDescriptor_za3lpa$ = function (index) {
    return this.$delegate_nnj7h3$_0.getElementDescriptor_za3lpa$(index);
  };
  WrappedSerialDescriptor.prototype.getElementIndex_61zpoe$ = function (name) {
    return this.$delegate_nnj7h3$_0.getElementIndex_61zpoe$(name);
  };
  WrappedSerialDescriptor.prototype.getElementName_za3lpa$ = function (index) {
    return this.$delegate_nnj7h3$_0.getElementName_za3lpa$(index);
  };
  WrappedSerialDescriptor.prototype.isElementOptional_za3lpa$ = function (index) {
    return this.$delegate_nnj7h3$_0.isElementOptional_za3lpa$(index);
  };
  WrappedSerialDescriptor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WrappedSerialDescriptor',
    interfaces: [SerialDescriptor]
  };
  function buildSerialDescriptor$lambda($receiver) {
    return Unit;
  }
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    if (builder === void 0)
      builder = buildSerialDescriptor$lambda;
    if (!!isBlank(serialName)) {
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init(message.toString());
    }if (!!equals(kind, StructureKind$CLASS_getInstance())) {
      var message_0 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
      throw IllegalArgumentException_init(message_0.toString());
    }var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.elementNames_8be2vx$.size, toList(typeParameters), sdBuilder);
  }
  var serialDescriptor = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-js-legacy.kotlinx.serialization.descriptors.serialDescriptor_287e2$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var serializer = _.kotlinx.serialization.serializer_saj79j$;
    var KSerializer = _.kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT) {
      var tmp$;
      return (Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$ : throwCCE()).descriptor;
    };
  }));
  function serialDescriptor_0(type) {
    return serializer_1(type).descriptor;
  }
  function listSerialDescriptor(elementDescriptor) {
    return new ArrayListClassDesc(elementDescriptor);
  }
  var listSerialDescriptor_0 = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-js-legacy.kotlinx.serialization.descriptors.listSerialDescriptor_287e2$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var listSerialDescriptor = _.kotlinx.serialization.descriptors.listSerialDescriptor_24f42q$;
    var serializer = _.kotlinx.serialization.serializer_saj79j$;
    var KSerializer = _.kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT) {
      var tmp$;
      return listSerialDescriptor((Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$ : throwCCE()).descriptor);
    };
  }));
  function mapSerialDescriptor(keyDescriptor, valueDescriptor) {
    return new HashMapClassDesc(keyDescriptor, valueDescriptor);
  }
  var mapSerialDescriptor_0 = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-js-legacy.kotlinx.serialization.descriptors.mapSerialDescriptor_q3lmfv$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var mapSerialDescriptor = _.kotlinx.serialization.descriptors.mapSerialDescriptor_2ezn58$;
    var serializer = _.kotlinx.serialization.serializer_saj79j$;
    var KSerializer = _.kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (K_0, isK, V_0, isV) {
      var tmp$;
      var tmp$_0;
      return mapSerialDescriptor((Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType(K_0)), KSerializer) ? tmp$ : throwCCE()).descriptor, (Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType(V_0)), KSerializer) ? tmp$_0 : throwCCE()).descriptor);
    };
  }));
  function setSerialDescriptor(elementDescriptor) {
    return new HashSetClassDesc(elementDescriptor);
  }
  var setSerialDescriptor_0 = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-js-legacy.kotlinx.serialization.descriptors.setSerialDescriptor_287e2$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var setSerialDescriptor = _.kotlinx.serialization.descriptors.setSerialDescriptor_24f42q$;
    var serializer = _.kotlinx.serialization.serializer_saj79j$;
    var KSerializer = _.kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT) {
      var tmp$;
      return setSerialDescriptor((Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$ : throwCCE()).descriptor);
    };
  }));
  function get_nullable_0($receiver) {
    if ($receiver.isNullable)
      return $receiver;
    return new SerialDescriptorForNullable($receiver);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.serialName = serialName;
    this.isNullable = false;
    this.annotations = emptyList();
    this.elementNames_8be2vx$ = ArrayList_init_0();
    this.uniqueNames_0 = HashSet_init();
    this.elementDescriptors_8be2vx$ = ArrayList_init_0();
    this.elementAnnotations_8be2vx$ = ArrayList_init_0();
    this.elementOptionality_8be2vx$ = ArrayList_init_0();
  }
  ClassSerialDescriptorBuilder.prototype.element_vxrguq$ = function (elementName, descriptor, annotations, isOptional) {
    if (annotations === void 0)
      annotations = emptyList();
    if (isOptional === void 0)
      isOptional = false;
    if (!this.uniqueNames_0.add_11rb$(elementName)) {
      var message = "Element with name '" + elementName + "' is already registered";
      throw IllegalArgumentException_init(message.toString());
    }this.elementNames_8be2vx$.add_11rb$(elementName);
    this.elementDescriptors_8be2vx$.add_11rb$(descriptor);
    this.elementAnnotations_8be2vx$.add_11rb$(annotations);
    this.elementOptionality_8be2vx$.add_11rb$(isOptional);
  };
  ClassSerialDescriptorBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ClassSerialDescriptorBuilder',
    interfaces: []
  };
  var element = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-js-legacy.kotlinx.serialization.descriptors.element_i7uu7a$', wrapFunction(function () {
    var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var serializer = _.kotlinx.serialization.serializer_saj79j$;
    var KSerializer = _.kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT, $receiver, elementName, annotations, isOptional) {
      if (annotations === void 0)
        annotations = emptyList();
      if (isOptional === void 0)
        isOptional = false;
      var tmp$;
      var descriptor = (Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$ : throwCCE()).descriptor;
      $receiver.element_vxrguq$(elementName, descriptor, annotations, isOptional);
    };
  }));
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.serialName_btmdyn$_0 = serialName;
    this.kind_589tly$_0 = kind;
    this.elementsCount_wewqc2$_0 = elementsCount;
    this.annotations_efqcf6$_0 = builder.annotations;
    this.serialNames_bcpscy$_0 = toHashSet(builder.elementNames_8be2vx$);
    this.elementNames_0 = copyToArray(builder.elementNames_8be2vx$);
    this.elementDescriptors_0 = compactArray(builder.elementDescriptors_8be2vx$);
    this.elementAnnotations_0 = copyToArray(builder.elementAnnotations_8be2vx$);
    this.elementOptionality_0 = toBooleanArray(builder.elementOptionality_8be2vx$);
    var $receiver = withIndex(this.elementNames_0);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(to(item.value, item.index));
    }
    this.name2Index_0 = toMap(destination);
    this.typeParametersDescriptors_0 = compactArray(typeParameters);
    this._hashCode_6e2cwc$_0 = lazy_0(SerialDescriptorImpl$_hashCode$lambda(this));
  }
  Object.defineProperty(SerialDescriptorImpl.prototype, 'serialName', {
    get: function () {
      return this.serialName_btmdyn$_0;
    }
  });
  Object.defineProperty(SerialDescriptorImpl.prototype, 'kind', {
    get: function () {
      return this.kind_589tly$_0;
    }
  });
  Object.defineProperty(SerialDescriptorImpl.prototype, 'elementsCount', {
    get: function () {
      return this.elementsCount_wewqc2$_0;
    }
  });
  Object.defineProperty(SerialDescriptorImpl.prototype, 'annotations', {
    configurable: true,
    get: function () {
      return this.annotations_efqcf6$_0;
    }
  });
  Object.defineProperty(SerialDescriptorImpl.prototype, 'serialNames', {
    configurable: true,
    get: function () {
      return this.serialNames_bcpscy$_0;
    }
  });
  Object.defineProperty(SerialDescriptorImpl.prototype, '_hashCode_0', {
    configurable: true,
    get: function () {
      return this._hashCode_6e2cwc$_0.value;
    }
  });
  SerialDescriptorImpl.prototype.getElementName_za3lpa$ = function (index) {
    return getChecked(this.elementNames_0, index);
  };
  SerialDescriptorImpl.prototype.getElementIndex_61zpoe$ = function (name) {
    var tmp$;
    return (tmp$ = this.name2Index_0.get_11rb$(name)) != null ? tmp$ : -3;
  };
  SerialDescriptorImpl.prototype.getElementAnnotations_za3lpa$ = function (index) {
    return getChecked(this.elementAnnotations_0, index);
  };
  SerialDescriptorImpl.prototype.getElementDescriptor_za3lpa$ = function (index) {
    return getChecked(this.elementDescriptors_0, index);
  };
  SerialDescriptorImpl.prototype.isElementOptional_za3lpa$ = function (index) {
    return getChecked_0(this.elementOptionality_0, index);
  };
  SerialDescriptorImpl.prototype.equals = function (other) {
    var equalsImpl$result;
    equalsImpl$break: do {
      var tmp$;
      if (this === other) {
        equalsImpl$result = true;
        break equalsImpl$break;
      }if (!Kotlin.isType(other, SerialDescriptorImpl)) {
        equalsImpl$result = false;
        break equalsImpl$break;
      }if (!equals(this.serialName, other.serialName)) {
        equalsImpl$result = false;
        break equalsImpl$break;
      }if (!contentEquals(this.typeParametersDescriptors_0, other.typeParametersDescriptors_0)) {
        equalsImpl$result = false;
        break equalsImpl$break;
      }if (this.elementsCount !== other.elementsCount) {
        equalsImpl$result = false;
        break equalsImpl$break;
      }tmp$ = this.elementsCount;
      for (var index = 0; index < tmp$; index++) {
        if (!equals(this.getElementDescriptor_za3lpa$(index).serialName, other.getElementDescriptor_za3lpa$(index).serialName)) {
          equalsImpl$result = false;
          break equalsImpl$break;
        }if (!equals(this.getElementDescriptor_za3lpa$(index).kind, other.getElementDescriptor_za3lpa$(index).kind)) {
          equalsImpl$result = false;
          break equalsImpl$break;
        }}
      equalsImpl$result = true;
    }
     while (false);
    return equalsImpl$result;
  };
  SerialDescriptorImpl.prototype.hashCode = function () {
    return this._hashCode_0;
  };
  function SerialDescriptorImpl$toString$lambda(this$SerialDescriptorImpl) {
    return function (it) {
      return this$SerialDescriptorImpl.getElementName_za3lpa$(it) + ': ' + this$SerialDescriptorImpl.getElementDescriptor_za3lpa$(it).serialName;
    };
  }
  SerialDescriptorImpl.prototype.toString = function () {
    return joinToString(until(0, this.elementsCount), ', ', this.serialName + '(', ')', void 0, void 0, SerialDescriptorImpl$toString$lambda(this));
  };
  function SerialDescriptorImpl$_hashCode$lambda(this$SerialDescriptorImpl) {
    return function () {
      return hashCodeImpl(this$SerialDescriptorImpl, this$SerialDescriptorImpl.typeParametersDescriptors_0);
    };
  }
  SerialDescriptorImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SerialDescriptorImpl',
    interfaces: [CachedNames, SerialDescriptor]
  };
  function SerialKind() {
  }
  function SerialKind$ENUM() {
    SerialKind$ENUM_instance = this;
    SerialKind.call(this);
  }
  SerialKind$ENUM.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ENUM',
    interfaces: [SerialKind]
  };
  var SerialKind$ENUM_instance = null;
  function SerialKind$ENUM_getInstance() {
    if (SerialKind$ENUM_instance === null) {
      new SerialKind$ENUM();
    }return SerialKind$ENUM_instance;
  }
  function SerialKind$CONTEXTUAL() {
    SerialKind$CONTEXTUAL_instance = this;
    SerialKind.call(this);
  }
  SerialKind$CONTEXTUAL.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CONTEXTUAL',
    interfaces: [SerialKind]
  };
  var SerialKind$CONTEXTUAL_instance = null;
  function SerialKind$CONTEXTUAL_getInstance() {
    if (SerialKind$CONTEXTUAL_instance === null) {
      new SerialKind$CONTEXTUAL();
    }return SerialKind$CONTEXTUAL_instance;
  }
  SerialKind.prototype.toString = function () {
    return ensureNotNull(Kotlin.getKClassFromExpression(this).simpleName);
  };
  SerialKind.prototype.hashCode = function () {
    return hashCode(this.toString());
  };
  SerialKind.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SerialKind',
    interfaces: []
  };
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  function PrimitiveKind$BOOLEAN() {
    PrimitiveKind$BOOLEAN_instance = this;
    PrimitiveKind.call(this);
  }
  PrimitiveKind$BOOLEAN.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BOOLEAN',
    interfaces: [PrimitiveKind]
  };
  var PrimitiveKind$BOOLEAN_instance = null;
  function PrimitiveKind$BOOLEAN_getInstance() {
    if (PrimitiveKind$BOOLEAN_instance === null) {
      new PrimitiveKind$BOOLEAN();
    }return PrimitiveKind$BOOLEAN_instance;
  }
  function PrimitiveKind$BYTE() {
    PrimitiveKind$BYTE_instance = this;
    PrimitiveKind.call(this);
  }
  PrimitiveKind$BYTE.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BYTE',
    interfaces: [PrimitiveKind]
  };
  var PrimitiveKind$BYTE_instance = null;
  function PrimitiveKind$BYTE_getInstance() {
    if (PrimitiveKind$BYTE_instance === null) {
      new PrimitiveKind$BYTE();
    }return PrimitiveKind$BYTE_instance;
  }
  function PrimitiveKind$CHAR() {
    PrimitiveKind$CHAR_instance = this;
    PrimitiveKind.call(this);
  }
  PrimitiveKind$CHAR.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CHAR',
    interfaces: [PrimitiveKind]
  };
  var PrimitiveKind$CHAR_instance = null;
  function PrimitiveKind$CHAR_getInstance() {
    if (PrimitiveKind$CHAR_instance === null) {
      new PrimitiveKind$CHAR();
    }return PrimitiveKind$CHAR_instance;
  }
  function PrimitiveKind$SHORT() {
    PrimitiveKind$SHORT_instance = this;
    PrimitiveKind.call(this);
  }
  PrimitiveKind$SHORT.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SHORT',
    interfaces: [PrimitiveKind]
  };
  var PrimitiveKind$SHORT_instance = null;
  function PrimitiveKind$SHORT_getInstance() {
    if (PrimitiveKind$SHORT_instance === null) {
      new PrimitiveKind$SHORT();
    }return PrimitiveKind$SHORT_instance;
  }
  function PrimitiveKind$INT() {
    PrimitiveKind$INT_instance = this;
    PrimitiveKind.call(this);
  }
  PrimitiveKind$INT.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'INT',
    interfaces: [PrimitiveKind]
  };
  var PrimitiveKind$INT_instance = null;
  function PrimitiveKind$INT_getInstance() {
    if (PrimitiveKind$INT_instance === null) {
      new PrimitiveKind$INT();
    }return PrimitiveKind$INT_instance;
  }
  function PrimitiveKind$LONG() {
    PrimitiveKind$LONG_instance = this;
    PrimitiveKind.call(this);
  }
  PrimitiveKind$LONG.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LONG',
    interfaces: [PrimitiveKind]
  };
  var PrimitiveKind$LONG_instance = null;
  function PrimitiveKind$LONG_getInstance() {
    if (PrimitiveKind$LONG_instance === null) {
      new PrimitiveKind$LONG();
    }return PrimitiveKind$LONG_instance;
  }
  function PrimitiveKind$FLOAT() {
    PrimitiveKind$FLOAT_instance = this;
    PrimitiveKind.call(this);
  }
  PrimitiveKind$FLOAT.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FLOAT',
    interfaces: [PrimitiveKind]
  };
  var PrimitiveKind$FLOAT_instance = null;
  function PrimitiveKind$FLOAT_getInstance() {
    if (PrimitiveKind$FLOAT_instance === null) {
      new PrimitiveKind$FLOAT();
    }return PrimitiveKind$FLOAT_instance;
  }
  function PrimitiveKind$DOUBLE() {
    PrimitiveKind$DOUBLE_instance = this;
    PrimitiveKind.call(this);
  }
  PrimitiveKind$DOUBLE.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DOUBLE',
    interfaces: [PrimitiveKind]
  };
  var PrimitiveKind$DOUBLE_instance = null;
  function PrimitiveKind$DOUBLE_getInstance() {
    if (PrimitiveKind$DOUBLE_instance === null) {
      new PrimitiveKind$DOUBLE();
    }return PrimitiveKind$DOUBLE_instance;
  }
  function PrimitiveKind$STRING() {
    PrimitiveKind$STRING_instance = this;
    PrimitiveKind.call(this);
  }
  PrimitiveKind$STRING.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'STRING',
    interfaces: [PrimitiveKind]
  };
  var PrimitiveKind$STRING_instance = null;
  function PrimitiveKind$STRING_getInstance() {
    if (PrimitiveKind$STRING_instance === null) {
      new PrimitiveKind$STRING();
    }return PrimitiveKind$STRING_instance;
  }
  PrimitiveKind.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PrimitiveKind',
    interfaces: [SerialKind]
  };
  function StructureKind() {
    SerialKind.call(this);
  }
  function StructureKind$CLASS() {
    StructureKind$CLASS_instance = this;
    StructureKind.call(this);
  }
  StructureKind$CLASS.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CLASS',
    interfaces: [StructureKind]
  };
  var StructureKind$CLASS_instance = null;
  function StructureKind$CLASS_getInstance() {
    if (StructureKind$CLASS_instance === null) {
      new StructureKind$CLASS();
    }return StructureKind$CLASS_instance;
  }
  function StructureKind$LIST() {
    StructureKind$LIST_instance = this;
    StructureKind.call(this);
  }
  StructureKind$LIST.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LIST',
    interfaces: [StructureKind]
  };
  var StructureKind$LIST_instance = null;
  function StructureKind$LIST_getInstance() {
    if (StructureKind$LIST_instance === null) {
      new StructureKind$LIST();
    }return StructureKind$LIST_instance;
  }
  function StructureKind$MAP() {
    StructureKind$MAP_instance = this;
    StructureKind.call(this);
  }
  StructureKind$MAP.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MAP',
    interfaces: [StructureKind]
  };
  var StructureKind$MAP_instance = null;
  function StructureKind$MAP_getInstance() {
    if (StructureKind$MAP_instance === null) {
      new StructureKind$MAP();
    }return StructureKind$MAP_instance;
  }
  function StructureKind$OBJECT() {
    StructureKind$OBJECT_instance = this;
    StructureKind.call(this);
  }
  StructureKind$OBJECT.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'OBJECT',
    interfaces: [StructureKind]
  };
  var StructureKind$OBJECT_instance = null;
  function StructureKind$OBJECT_getInstance() {
    if (StructureKind$OBJECT_instance === null) {
      new StructureKind$OBJECT();
    }return StructureKind$OBJECT_instance;
  }
  StructureKind.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StructureKind',
    interfaces: [SerialKind]
  };
  function PolymorphicKind() {
    SerialKind.call(this);
  }
  function PolymorphicKind$SEALED() {
    PolymorphicKind$SEALED_instance = this;
    PolymorphicKind.call(this);
  }
  PolymorphicKind$SEALED.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SEALED',
    interfaces: [PolymorphicKind]
  };
  var PolymorphicKind$SEALED_instance = null;
  function PolymorphicKind$SEALED_getInstance() {
    if (PolymorphicKind$SEALED_instance === null) {
      new PolymorphicKind$SEALED();
    }return PolymorphicKind$SEALED_instance;
  }
  function PolymorphicKind$OPEN() {
    PolymorphicKind$OPEN_instance = this;
    PolymorphicKind.call(this);
  }
  PolymorphicKind$OPEN.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'OPEN',
    interfaces: [PolymorphicKind]
  };
  var PolymorphicKind$OPEN_instance = null;
  function PolymorphicKind$OPEN_getInstance() {
    if (PolymorphicKind$OPEN_instance === null) {
      new PolymorphicKind$OPEN();
    }return PolymorphicKind$OPEN_instance;
  }
  PolymorphicKind.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PolymorphicKind',
    interfaces: [SerialKind]
  };
  function AbstractDecoder() {
  }
  AbstractDecoder.prototype.decodeValue = function () {
    throw SerializationException_init_0(Kotlin.getKClassFromExpression(this).toString() + " can't retrieve untyped values");
  };
  AbstractDecoder.prototype.decodeNotNullMark = function () {
    return true;
  };
  AbstractDecoder.prototype.decodeNull = function () {
    return null;
  };
  AbstractDecoder.prototype.decodeBoolean = function () {
    var tmp$;
    return typeof (tmp$ = this.decodeValue()) === 'boolean' ? tmp$ : throwCCE();
  };
  AbstractDecoder.prototype.decodeByte = function () {
    var tmp$;
    return typeof (tmp$ = this.decodeValue()) === 'number' ? tmp$ : throwCCE();
  };
  AbstractDecoder.prototype.decodeShort = function () {
    var tmp$;
    return typeof (tmp$ = this.decodeValue()) === 'number' ? tmp$ : throwCCE();
  };
  AbstractDecoder.prototype.decodeInt = function () {
    var tmp$;
    return typeof (tmp$ = this.decodeValue()) === 'number' ? tmp$ : throwCCE();
  };
  AbstractDecoder.prototype.decodeLong = function () {
    var tmp$;
    return Kotlin.isType(tmp$ = this.decodeValue(), Kotlin.Long) ? tmp$ : throwCCE();
  };
  AbstractDecoder.prototype.decodeFloat = function () {
    var tmp$;
    return typeof (tmp$ = this.decodeValue()) === 'number' ? tmp$ : throwCCE();
  };
  AbstractDecoder.prototype.decodeDouble = function () {
    var tmp$;
    return typeof (tmp$ = this.decodeValue()) === 'number' ? tmp$ : throwCCE();
  };
  AbstractDecoder.prototype.decodeChar = function () {
    var tmp$;
    return Kotlin.isChar(tmp$ = this.decodeValue()) ? tmp$ : throwCCE();
  };
  AbstractDecoder.prototype.decodeString = function () {
    var tmp$;
    return typeof (tmp$ = this.decodeValue()) === 'string' ? tmp$ : throwCCE();
  };
  AbstractDecoder.prototype.decodeEnum_24f42q$ = function (enumDescriptor) {
    var tmp$;
    return typeof (tmp$ = this.decodeValue()) === 'number' ? tmp$ : throwCCE();
  };
  AbstractDecoder.prototype.decodeInline_24f42q$ = function (inlineDescriptor) {
    return this;
  };
  AbstractDecoder.prototype.decodeSerializableValue_19c8k5$$default = function (deserializer, previousValue) {
    return this.decodeSerializableValue_w63s0f$(deserializer);
  };
  AbstractDecoder.prototype.decodeSerializableValue_19c8k5$ = function (deserializer, previousValue, callback$default) {
    if (previousValue === void 0)
      previousValue = null;
    return callback$default ? callback$default(deserializer, previousValue) : this.decodeSerializableValue_19c8k5$$default(deserializer, previousValue);
  };
  AbstractDecoder.prototype.beginStructure_24f42q$ = function (descriptor) {
    return this;
  };
  AbstractDecoder.prototype.endStructure_24f42q$ = function (descriptor) {
  };
  AbstractDecoder.prototype.decodeBooleanElement_szpzho$ = function (descriptor, index) {
    return this.decodeBoolean();
  };
  AbstractDecoder.prototype.decodeByteElement_szpzho$ = function (descriptor, index) {
    return this.decodeByte();
  };
  AbstractDecoder.prototype.decodeShortElement_szpzho$ = function (descriptor, index) {
    return this.decodeShort();
  };
  AbstractDecoder.prototype.decodeIntElement_szpzho$ = function (descriptor, index) {
    return this.decodeInt();
  };
  AbstractDecoder.prototype.decodeLongElement_szpzho$ = function (descriptor, index) {
    return this.decodeLong();
  };
  AbstractDecoder.prototype.decodeFloatElement_szpzho$ = function (descriptor, index) {
    return this.decodeFloat();
  };
  AbstractDecoder.prototype.decodeDoubleElement_szpzho$ = function (descriptor, index) {
    return this.decodeDouble();
  };
  AbstractDecoder.prototype.decodeCharElement_szpzho$ = function (descriptor, index) {
    return this.decodeChar();
  };
  AbstractDecoder.prototype.decodeStringElement_szpzho$ = function (descriptor, index) {
    return this.decodeString();
  };
  AbstractDecoder.prototype.decodeInlineElement_szpzho$ = function (descriptor, index) {
    return this.decodeInline_24f42q$(descriptor.getElementDescriptor_za3lpa$(index));
  };
  AbstractDecoder.prototype.decodeSerializableElement_12e8id$$default = function (descriptor, index, deserializer, previousValue) {
    return this.decodeSerializableValue_19c8k5$(deserializer, previousValue);
  };
  AbstractDecoder.prototype.decodeNullableSerializableElement_8viuyw$$default = function (descriptor, index, deserializer, previousValue) {
    var isNullabilitySupported = deserializer.descriptor.isNullable;
    return isNullabilitySupported || this.decodeNotNullMark() ? this.decodeSerializableValue_19c8k5$(deserializer, previousValue) : this.decodeNull();
  };
  AbstractDecoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractDecoder',
    interfaces: [CompositeDecoder, Decoder]
  };
  function AbstractEncoder() {
  }
  AbstractEncoder.prototype.beginStructure_24f42q$ = function (descriptor) {
    return this;
  };
  AbstractEncoder.prototype.endStructure_24f42q$ = function (descriptor) {
  };
  AbstractEncoder.prototype.encodeElement_szpzho$ = function (descriptor, index) {
    return true;
  };
  AbstractEncoder.prototype.encodeValue_za3rmp$ = function (value) {
    throw SerializationException_init_0('Non-serializable ' + Kotlin.getKClassFromExpression(value) + ' is not supported by ' + Kotlin.getKClassFromExpression(this) + ' encoder');
  };
  AbstractEncoder.prototype.encodeNull = function () {
    throw SerializationException_init_0("'null' is not supported by default");
  };
  AbstractEncoder.prototype.encodeBoolean_6taknv$ = function (value) {
    this.encodeValue_za3rmp$(value);
  };
  AbstractEncoder.prototype.encodeByte_s8j3t7$ = function (value) {
    this.encodeValue_za3rmp$(value);
  };
  AbstractEncoder.prototype.encodeShort_mq22fl$ = function (value) {
    this.encodeValue_za3rmp$(value);
  };
  AbstractEncoder.prototype.encodeInt_za3lpa$ = function (value) {
    this.encodeValue_za3rmp$(value);
  };
  AbstractEncoder.prototype.encodeLong_s8cxhz$ = function (value) {
    this.encodeValue_za3rmp$(value);
  };
  AbstractEncoder.prototype.encodeFloat_mx4ult$ = function (value) {
    this.encodeValue_za3rmp$(value);
  };
  AbstractEncoder.prototype.encodeDouble_14dthe$ = function (value) {
    this.encodeValue_za3rmp$(value);
  };
  AbstractEncoder.prototype.encodeChar_s8itvh$ = function (value) {
    this.encodeValue_za3rmp$(toBoxedChar(value));
  };
  AbstractEncoder.prototype.encodeString_61zpoe$ = function (value) {
    this.encodeValue_za3rmp$(value);
  };
  AbstractEncoder.prototype.encodeEnum_szpzho$ = function (enumDescriptor, index) {
    this.encodeValue_za3rmp$(index);
  };
  AbstractEncoder.prototype.encodeInline_24f42q$ = function (inlineDescriptor) {
    return this;
  };
  AbstractEncoder.prototype.encodeBooleanElement_qh7jdn$ = function (descriptor, index, value) {
    if (this.encodeElement_szpzho$(descriptor, index))
      this.encodeBoolean_6taknv$(value);
  };
  AbstractEncoder.prototype.encodeByteElement_j0u8y3$ = function (descriptor, index, value) {
    if (this.encodeElement_szpzho$(descriptor, index))
      this.encodeByte_s8j3t7$(value);
  };
  AbstractEncoder.prototype.encodeShortElement_l83pjl$ = function (descriptor, index, value) {
    if (this.encodeElement_szpzho$(descriptor, index))
      this.encodeShort_mq22fl$(value);
  };
  AbstractEncoder.prototype.encodeIntElement_ptg7oe$ = function (descriptor, index, value) {
    if (this.encodeElement_szpzho$(descriptor, index))
      this.encodeInt_za3lpa$(value);
  };
  AbstractEncoder.prototype.encodeLongElement_j0o2mv$ = function (descriptor, index, value) {
    if (this.encodeElement_szpzho$(descriptor, index))
      this.encodeLong_s8cxhz$(value);
  };
  AbstractEncoder.prototype.encodeFloatElement_lf6hpt$ = function (descriptor, index, value) {
    if (this.encodeElement_szpzho$(descriptor, index))
      this.encodeFloat_mx4ult$(value);
  };
  AbstractEncoder.prototype.encodeDoubleElement_powrwi$ = function (descriptor, index, value) {
    if (this.encodeElement_szpzho$(descriptor, index))
      this.encodeDouble_14dthe$(value);
  };
  AbstractEncoder.prototype.encodeCharElement_j0tz0d$ = function (descriptor, index, value) {
    if (this.encodeElement_szpzho$(descriptor, index))
      this.encodeChar_s8itvh$(value);
  };
  AbstractEncoder.prototype.encodeStringElement_iij8qq$ = function (descriptor, index, value) {
    if (this.encodeElement_szpzho$(descriptor, index))
      this.encodeString_61zpoe$(value);
  };
  AbstractEncoder.prototype.encodeInlineElement_szpzho$ = function (descriptor, index) {
    return this.encodeElement_szpzho$(descriptor, index) ? this.encodeInline_24f42q$(descriptor.getElementDescriptor_za3lpa$(index)) : NoOpEncoder_getInstance();
  };
  AbstractEncoder.prototype.encodeSerializableElement_r4qlx7$ = function (descriptor, index, serializer, value) {
    if (this.encodeElement_szpzho$(descriptor, index))
      this.encodeSerializableValue_tf03ej$(serializer, value);
  };
  AbstractEncoder.prototype.encodeNullableSerializableElement_qw92s8$ = function (descriptor, index, serializer, value) {
    if (this.encodeElement_szpzho$(descriptor, index))
      this.encodeNullableSerializableValue_f4686g$(serializer, value);
  };
  AbstractEncoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractEncoder',
    interfaces: [CompositeEncoder, Encoder]
  };
  function Decoder() {
  }
  Decoder.prototype.decodeSerializableValue_w63s0f$ = function (deserializer) {
    return deserializer.deserialize_bq71mq$(this);
  };
  Decoder.prototype.decodeNullableSerializableValue_aae3ea$ = function (deserializer) {
    var isNullabilitySupported = deserializer.descriptor.isNullable;
    return isNullabilitySupported || this.decodeNotNullMark() ? this.decodeSerializableValue_w63s0f$(deserializer) : this.decodeNull();
  };
  Decoder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Decoder',
    interfaces: []
  };
  function CompositeDecoder() {
    CompositeDecoder$Companion_getInstance();
  }
  function CompositeDecoder$Companion() {
    CompositeDecoder$Companion_instance = this;
    this.DECODE_DONE = -1;
    this.UNKNOWN_NAME = -3;
  }
  CompositeDecoder$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CompositeDecoder$Companion_instance = null;
  function CompositeDecoder$Companion_getInstance() {
    if (CompositeDecoder$Companion_instance === null) {
      new CompositeDecoder$Companion();
    }return CompositeDecoder$Companion_instance;
  }
  CompositeDecoder.prototype.decodeSequentially = function () {
    return false;
  };
  CompositeDecoder.prototype.decodeCollectionSize_24f42q$ = function (descriptor) {
    return -1;
  };
  CompositeDecoder.prototype.decodeSerializableElement_12e8id$ = function (descriptor, index, deserializer, previousValue, callback$default) {
    if (previousValue === void 0)
      previousValue = null;
    return callback$default ? callback$default(descriptor, index, deserializer, previousValue) : this.decodeSerializableElement_12e8id$$default(descriptor, index, deserializer, previousValue);
  };
  CompositeDecoder.prototype.decodeNullableSerializableElement_8viuyw$ = function (descriptor, index, deserializer, previousValue, callback$default) {
    if (previousValue === void 0)
      previousValue = null;
    return callback$default ? callback$default(descriptor, index, deserializer, previousValue) : this.decodeNullableSerializableElement_8viuyw$$default(descriptor, index, deserializer, previousValue);
  };
  CompositeDecoder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CompositeDecoder',
    interfaces: []
  };
  var decodeStructure = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-js-legacy.kotlinx.serialization.encoding.decodeStructure_tzrhxq$', wrapFunction(function () {
    var Throwable = Error;
    return function ($receiver, descriptor, block) {
      var composite = $receiver.beginStructure_24f42q$(descriptor);
      var ex = null;
      try {
        return block(composite);
      } catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          ex = e;
          throw e;
        } else
          throw e;
      }
      finally {
        if (ex == null)
          composite.endStructure_24f42q$(descriptor);
      }
    };
  }));
  var decodeMethodDeprecated;
  function Encoder() {
  }
  Encoder.prototype.encodeNotNullMark = function () {
  };
  Encoder.prototype.beginCollection_szpzho$ = function (descriptor, collectionSize) {
    return this.beginStructure_24f42q$(descriptor);
  };
  Encoder.prototype.encodeSerializableValue_tf03ej$ = function (serializer, value) {
    serializer.serialize_55azsf$(this, value);
  };
  Encoder.prototype.encodeNullableSerializableValue_f4686g$ = function (serializer, value) {
    var tmp$;
    var isNullabilitySupported = serializer.descriptor.isNullable;
    if (isNullabilitySupported) {
      return this.encodeSerializableValue_tf03ej$(Kotlin.isType(tmp$ = serializer, SerializationStrategy) ? tmp$ : throwCCE(), value);
    }if (value == null) {
      this.encodeNull();
    } else {
      this.encodeNotNullMark();
      this.encodeSerializableValue_tf03ej$(serializer, value);
    }
  };
  Encoder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Encoder',
    interfaces: []
  };
  function CompositeEncoder() {
  }
  CompositeEncoder.prototype.shouldEncodeElementDefault_szpzho$ = function (descriptor, index) {
    return true;
  };
  CompositeEncoder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CompositeEncoder',
    interfaces: []
  };
  var encodeStructure = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-js-legacy.kotlinx.serialization.encoding.encodeStructure_iqdhfr$', wrapFunction(function () {
    var Throwable = Error;
    return function ($receiver, descriptor, block) {
      var composite = $receiver.beginStructure_24f42q$(descriptor);
      var ex = null;
      try {
        block(composite);
      } catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          ex = e;
          throw e;
        } else
          throw e;
      }
      finally {
        if (ex == null)
          composite.endStructure_24f42q$(descriptor);
      }
    };
  }));
  var encodeCollection = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-js-legacy.kotlinx.serialization.encoding.encodeCollection_mcp0x$', function ($receiver, descriptor, collectionSize, block) {
    var $receiver_0 = $receiver.beginCollection_szpzho$(descriptor, collectionSize);
    block($receiver_0);
    $receiver_0.endStructure_24f42q$(descriptor);
  });
  var encodeCollection_0 = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-js-legacy.kotlinx.serialization.encoding.encodeCollection_z7tnzi$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var wrapFunction = Kotlin.wrapFunction;
    var encodeCollection$lambda = wrapFunction(function () {
      var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
      return function (closure$collection, closure$block) {
        return function ($receiver) {
          var $receiver_0 = closure$collection;
          var tmp$, tmp$_0;
          var index = 0;
          tmp$ = $receiver_0.iterator();
          while (tmp$.hasNext()) {
            var item = tmp$.next();
            closure$block($receiver, checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0)), item);
          }
          return Unit;
        };
      };
    });
    return function ($receiver, descriptor, collection, block) {
      var $receiver_0 = $receiver.beginCollection_szpzho$(descriptor, collection.size);
      encodeCollection$lambda(collection, block)($receiver_0);
      $receiver_0.endStructure_24f42q$(descriptor);
    };
  }));
  function AbstractPolymorphicSerializer() {
  }
  AbstractPolymorphicSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var actualSerializer = findPolymorphicSerializer_0(this, encoder, value);
    var descriptor = this.descriptor;
    var composite = encoder.beginStructure_24f42q$(descriptor);
    var ex = null;
    try {
      composite.encodeStringElement_iij8qq$(this.descriptor, 0, actualSerializer.descriptor.serialName);
      var tmp$;
      composite.encodeSerializableElement_r4qlx7$(this.descriptor, 1, Kotlin.isType(tmp$ = actualSerializer, SerializationStrategy) ? tmp$ : throwCCE(), value);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        ex = e;
        throw e;
      } else
        throw e;
    }
    finally {
      if (ex == null)
        composite.endStructure_24f42q$(descriptor);
    }
  };
  AbstractPolymorphicSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var descriptor = this.descriptor;
    var decodeStructure$result;
    var composite = decoder.beginStructure_24f42q$(descriptor);
    var ex = null;
    try {
      var tmp$, tmp$_0;
      var klassName = {v: null};
      var value = null;
      if (composite.decodeSequentially()) {
        return this.decodeSequentially_j3xsyv$_0(composite);
      }mainLoop: while (true) {
        var index = composite.decodeElementIndex_24f42q$(this.descriptor);
        switch (index) {
          case -1:
            break mainLoop;
          case 0:
            klassName.v = composite.decodeStringElement_szpzho$(this.descriptor, index);
            break;
          case 1:
            var value_0 = klassName.v;
            var requireNotNull$result;
            if (value_0 == null) {
              var message = 'Cannot read polymorphic value before its type token';
              throw IllegalArgumentException_init(message.toString());
            } else {
              requireNotNull$result = value_0;
            }

            klassName.v = requireNotNull$result;
            var serializer = findPolymorphicSerializer(this, composite, klassName.v);
            value = composite.decodeSerializableElement_12e8id$(this.descriptor, index, serializer);
            break;
          default:throw SerializationException_init_0('Invalid index in polymorphic deserialization of ' + ((tmp$ = klassName.v) != null ? tmp$ : 'unknown class') + ('\n' + ' Expected 0, 1 or DECODE_DONE(-1), but found ' + index));
        }
      }
      var value_1 = value;
      var requireNotNull$result_0;
      if (value_1 == null) {
        var message_0 = 'Polymorphic value has not been read for class ' + toString(klassName.v);
        throw IllegalArgumentException_init(message_0.toString());
      } else {
        requireNotNull$result_0 = value_1;
      }
      decodeStructure$result = Kotlin.isType(tmp$_0 = requireNotNull$result_0, Any) ? tmp$_0 : throwCCE();
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        ex = e;
        throw e;
      } else
        throw e;
    }
    finally {
      if (ex == null)
        composite.endStructure_24f42q$(descriptor);
    }
    return decodeStructure$result;
  };
  AbstractPolymorphicSerializer.prototype.decodeSequentially_j3xsyv$_0 = function (compositeDecoder) {
    var klassName = compositeDecoder.decodeStringElement_szpzho$(this.descriptor, 0);
    var serializer = findPolymorphicSerializer(this, compositeDecoder, klassName);
    return compositeDecoder.decodeSerializableElement_12e8id$(this.descriptor, 1, serializer);
  };
  AbstractPolymorphicSerializer.prototype.findPolymorphicSerializerOrNull_ca6uye$ = function (decoder, klassName) {
    return decoder.serializersModule.getPolymorphic_l2fy3k$(this.baseClass, klassName);
  };
  AbstractPolymorphicSerializer.prototype.findPolymorphicSerializerOrNull_kjsxpj$ = function (encoder, value) {
    return encoder.serializersModule.getPolymorphic_joiicr$(this.baseClass, value);
  };
  AbstractPolymorphicSerializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractPolymorphicSerializer',
    interfaces: [KSerializer]
  };
  function throwSubtypeNotRegistered(subClassName, baseClass) {
    var scope = "in the scope of '" + toString(baseClass.simpleName) + "'";
    throw SerializationException_init_0(subClassName == null ? 'Class discriminator was missing and no default polymorphic serializers were registered ' + scope : "Class '" + toString(subClassName) + "' is not registered for polymorphic serialization " + scope + '.' + '\n' + "Mark the base class as 'sealed' or register the serializer explicitly.");
  }
  function throwSubtypeNotRegistered_0(subClass, baseClass) {
    var tmp$;
    return throwSubtypeNotRegistered((tmp$ = subClass.simpleName) != null ? tmp$ : subClass.toString(), baseClass);
  }
  function CachedNames() {
  }
  CachedNames.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CachedNames',
    interfaces: []
  };
  function ListLikeDescriptor(elementDescriptor) {
    this.elementDescriptor = elementDescriptor;
    this.elementsCount_axr0xc$_0 = 1;
  }
  Object.defineProperty(ListLikeDescriptor.prototype, 'kind', {
    configurable: true,
    get: function () {
      return StructureKind$LIST_getInstance();
    }
  });
  Object.defineProperty(ListLikeDescriptor.prototype, 'elementsCount', {
    configurable: true,
    get: function () {
      return this.elementsCount_axr0xc$_0;
    }
  });
  ListLikeDescriptor.prototype.getElementName_za3lpa$ = function (index) {
    return index.toString();
  };
  ListLikeDescriptor.prototype.getElementIndex_61zpoe$ = function (name) {
    var tmp$;
    tmp$ = toIntOrNull(name);
    if (tmp$ == null) {
      throw IllegalArgumentException_init(name + ' is not a valid list index');
    }return tmp$;
  };
  ListLikeDescriptor.prototype.isElementOptional_za3lpa$ = function (index) {
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.serialName + ' expects only non-negative indices';
      throw IllegalArgumentException_init(message.toString());
    }return false;
  };
  ListLikeDescriptor.prototype.getElementAnnotations_za3lpa$ = function (index) {
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.serialName + ' expects only non-negative indices';
      throw IllegalArgumentException_init(message.toString());
    }return emptyList();
  };
  ListLikeDescriptor.prototype.getElementDescriptor_za3lpa$ = function (index) {
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.serialName + ' expects only non-negative indices';
      throw IllegalArgumentException_init(message.toString());
    }return this.elementDescriptor;
  };
  ListLikeDescriptor.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!Kotlin.isType(other, ListLikeDescriptor))
      return false;
    if (equals(this.elementDescriptor, other.elementDescriptor) && equals(this.serialName, other.serialName))
      return true;
    return false;
  };
  ListLikeDescriptor.prototype.hashCode = function () {
    return (hashCode(this.elementDescriptor) * 31 | 0) + hashCode(this.serialName) | 0;
  };
  ListLikeDescriptor.prototype.toString = function () {
    return this.serialName + '(' + this.elementDescriptor + ')';
  };
  ListLikeDescriptor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ListLikeDescriptor',
    interfaces: [SerialDescriptor]
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.serialName_ra35nx$_0 = serialName;
    this.keyDescriptor = keyDescriptor;
    this.valueDescriptor = valueDescriptor;
    this.elementsCount_qp2ocq$_0 = 2;
  }
  Object.defineProperty(MapLikeDescriptor.prototype, 'serialName', {
    get: function () {
      return this.serialName_ra35nx$_0;
    }
  });
  Object.defineProperty(MapLikeDescriptor.prototype, 'kind', {
    configurable: true,
    get: function () {
      return StructureKind$MAP_getInstance();
    }
  });
  Object.defineProperty(MapLikeDescriptor.prototype, 'elementsCount', {
    configurable: true,
    get: function () {
      return this.elementsCount_qp2ocq$_0;
    }
  });
  MapLikeDescriptor.prototype.getElementName_za3lpa$ = function (index) {
    return index.toString();
  };
  MapLikeDescriptor.prototype.getElementIndex_61zpoe$ = function (name) {
    var tmp$;
    tmp$ = toIntOrNull(name);
    if (tmp$ == null) {
      throw IllegalArgumentException_init(name + ' is not a valid map index');
    }return tmp$;
  };
  MapLikeDescriptor.prototype.isElementOptional_za3lpa$ = function (index) {
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.serialName + ' expects only non-negative indices';
      throw IllegalArgumentException_init(message.toString());
    }return false;
  };
  MapLikeDescriptor.prototype.getElementAnnotations_za3lpa$ = function (index) {
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.serialName + ' expects only non-negative indices';
      throw IllegalArgumentException_init(message.toString());
    }return emptyList();
  };
  MapLikeDescriptor.prototype.getElementDescriptor_za3lpa$ = function (index) {
    var tmp$;
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.serialName + ' expects only non-negative indices';
      throw IllegalArgumentException_init(message.toString());
    }switch (index % 2) {
      case 0:
        tmp$ = this.keyDescriptor;
        break;
      case 1:
        tmp$ = this.valueDescriptor;
        break;
      default:throw IllegalStateException_init('Unreached'.toString());
    }
    return tmp$;
  };
  MapLikeDescriptor.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!Kotlin.isType(other, MapLikeDescriptor))
      return false;
    if (!equals(this.serialName, other.serialName))
      return false;
    if (!equals(this.keyDescriptor, other.keyDescriptor))
      return false;
    if (!equals(this.valueDescriptor, other.valueDescriptor))
      return false;
    return true;
  };
  MapLikeDescriptor.prototype.hashCode = function () {
    var result = hashCode(this.serialName);
    result = (31 * result | 0) + hashCode(this.keyDescriptor) | 0;
    result = (31 * result | 0) + hashCode(this.valueDescriptor) | 0;
    return result;
  };
  MapLikeDescriptor.prototype.toString = function () {
    return this.serialName + '(' + this.keyDescriptor + ', ' + this.valueDescriptor + ')';
  };
  MapLikeDescriptor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MapLikeDescriptor',
    interfaces: [SerialDescriptor]
  };
  var ARRAY_NAME;
  var ARRAY_LIST_NAME;
  var LINKED_HASH_SET_NAME;
  var HASH_SET_NAME;
  var LINKED_HASH_MAP_NAME;
  var HASH_MAP_NAME;
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.serialName_reprdi$_0 = primitive.serialName + 'Array';
  }
  Object.defineProperty(PrimitiveArrayDescriptor.prototype, 'serialName', {
    configurable: true,
    get: function () {
      return this.serialName_reprdi$_0;
    }
  });
  PrimitiveArrayDescriptor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PrimitiveArrayDescriptor',
    interfaces: [ListLikeDescriptor]
  };
  function ArrayClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  Object.defineProperty(ArrayClassDesc.prototype, 'serialName', {
    configurable: true,
    get: function () {
      return ARRAY_NAME;
    }
  });
  ArrayClassDesc.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArrayClassDesc',
    interfaces: [ListLikeDescriptor]
  };
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  Object.defineProperty(ArrayListClassDesc.prototype, 'serialName', {
    configurable: true,
    get: function () {
      return ARRAY_LIST_NAME;
    }
  });
  ArrayListClassDesc.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArrayListClassDesc',
    interfaces: [ListLikeDescriptor]
  };
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  Object.defineProperty(LinkedHashSetClassDesc.prototype, 'serialName', {
    configurable: true,
    get: function () {
      return LINKED_HASH_SET_NAME;
    }
  });
  LinkedHashSetClassDesc.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LinkedHashSetClassDesc',
    interfaces: [ListLikeDescriptor]
  };
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  Object.defineProperty(HashSetClassDesc.prototype, 'serialName', {
    configurable: true,
    get: function () {
      return HASH_SET_NAME;
    }
  });
  HashSetClassDesc.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HashSetClassDesc',
    interfaces: [ListLikeDescriptor]
  };
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, LINKED_HASH_MAP_NAME, keyDesc, valueDesc);
  }
  LinkedHashMapClassDesc.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LinkedHashMapClassDesc',
    interfaces: [MapLikeDescriptor]
  };
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, HASH_MAP_NAME, keyDesc, valueDesc);
  }
  HashMapClassDesc.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HashMapClassDesc',
    interfaces: [MapLikeDescriptor]
  };
  function AbstractCollectionSerializer() {
  }
  AbstractCollectionSerializer.prototype.merge_h7kg3q$ = function (decoder, previous) {
    var tmp$;
    var builder = (tmp$ = previous != null ? this.toBuilder_wikn$(previous) : null) != null ? tmp$ : this.builder();
    var startIndex = this.builderSize_wili$(builder);
    var compositeDecoder = decoder.beginStructure_24f42q$(this.descriptor);
    if (compositeDecoder.decodeSequentially()) {
      this.readAll_8oyp34$(compositeDecoder, builder, startIndex, this.readSize_bl0yv7$_0(compositeDecoder, builder));
    } else {
      while (true) {
        var index = compositeDecoder.decodeElementIndex_24f42q$(this.descriptor);
        if (index === -1)
          break;
        this.readElement_8pvye7$(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.endStructure_24f42q$(this.descriptor);
    return this.toResult_wili$(builder);
  };
  AbstractCollectionSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return this.merge_h7kg3q$(decoder, null);
  };
  AbstractCollectionSerializer.prototype.readSize_bl0yv7$_0 = function (decoder, builder) {
    var size = decoder.decodeCollectionSize_24f42q$(this.descriptor);
    this.checkCapacity_rk7bw8$(builder, size);
    return size;
  };
  AbstractCollectionSerializer.prototype.readElement_8pvye7$ = function (decoder, index, builder, checkIndex, callback$default) {
    if (checkIndex === void 0)
      checkIndex = true;
    callback$default ? callback$default(decoder, index, builder, checkIndex) : this.readElement_8pvye7$$default(decoder, index, builder, checkIndex);
  };
  AbstractCollectionSerializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractCollectionSerializer',
    interfaces: [KSerializer]
  };
  function ListLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.elementSerializer_0 = elementSerializer;
  }
  function ListLikeSerializer$serialize$lambda(closure$value, this$ListLikeSerializer, closure$size) {
    return function ($receiver) {
      var tmp$;
      var iterator = this$ListLikeSerializer.collectionIterator_wikn$(closure$value);
      tmp$ = closure$size;
      for (var index = 0; index < tmp$; index++)
        $receiver.encodeSerializableElement_r4qlx7$(this$ListLikeSerializer.descriptor, index, this$ListLikeSerializer.elementSerializer_0, iterator.next());
      return Unit;
    };
  }
  ListLikeSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var size = this.collectionSize_wikn$(value);
    var descriptor = this.descriptor;
    var $receiver = encoder.beginCollection_szpzho$(descriptor, size);
    ListLikeSerializer$serialize$lambda(value, this, size)($receiver);
    $receiver.endStructure_24f42q$(descriptor);
  };
  ListLikeSerializer.prototype.readAll_8oyp34$ = function (decoder, builder, startIndex, size) {
    if (!(size >= 0)) {
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init(message.toString());
    }for (var index = 0; index < size; index++)
      this.readElement_8pvye7$(decoder, startIndex + index | 0, builder, false);
  };
  ListLikeSerializer.prototype.readElement_8pvye7$$default = function (decoder, index, builder, checkIndex) {
    this.insert_p422l$(builder, index, decoder.decodeSerializableElement_12e8id$(this.descriptor, index, this.elementSerializer_0));
  };
  ListLikeSerializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ListLikeSerializer',
    interfaces: [AbstractCollectionSerializer]
  };
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.keySerializer = keySerializer;
    this.valueSerializer = valueSerializer;
  }
  MapLikeSerializer.prototype.readAll_8oyp34$ = function (decoder, builder, startIndex, size) {
    var tmp$;
    if (!(size >= 0)) {
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init(message.toString());
    }tmp$ = size * 2 | 0;
    for (var index = 0; index < tmp$; index += 2)
      this.readElement_8pvye7$(decoder, startIndex + index | 0, builder, false);
  };
  MapLikeSerializer.prototype.readElement_8pvye7$$default = function (decoder, index, builder, checkIndex) {
    var tmp$, tmp$_0;
    var key = decoder.decodeSerializableElement_12e8id$(this.descriptor, index, this.keySerializer);
    if (checkIndex) {
      var $receiver = decoder.decodeElementIndex_24f42q$(this.descriptor);
      if (!($receiver === (index + 1 | 0))) {
        var message = 'Value must follow key in a map, index for key: ' + index + ', returned index for value: ' + $receiver;
        throw IllegalArgumentException_init(message.toString());
      }tmp$ = $receiver;
    } else {
      tmp$ = index + 1 | 0;
    }
    var vIndex = tmp$;
    if (builder.containsKey_11rb$(key) && !Kotlin.isType(this.valueSerializer.descriptor.kind, PrimitiveKind)) {
      tmp$_0 = decoder.decodeSerializableElement_12e8id$(this.descriptor, vIndex, this.valueSerializer, getValue(builder, key));
    } else {
      tmp$_0 = decoder.decodeSerializableElement_12e8id$(this.descriptor, vIndex, this.valueSerializer);
    }
    var value = tmp$_0;
    builder.put_xwzc9p$(key, value);
  };
  function MapLikeSerializer$serialize$lambda(closure$value, this$MapLikeSerializer) {
    return function ($receiver) {
      var iterator = this$MapLikeSerializer.collectionIterator_wikn$(closure$value);
      var index = {v: 0};
      while (iterator.hasNext()) {
        var element = iterator.next();
        var this$MapLikeSerializer_0 = this$MapLikeSerializer;
        var k = element.key;
        var v = element.value;
        var tmp$, tmp$_0;
        $receiver.encodeSerializableElement_r4qlx7$(this$MapLikeSerializer_0.descriptor, (tmp$ = index.v, index.v = tmp$ + 1 | 0, tmp$), this$MapLikeSerializer_0.keySerializer, k);
        $receiver.encodeSerializableElement_r4qlx7$(this$MapLikeSerializer_0.descriptor, (tmp$_0 = index.v, index.v = tmp$_0 + 1 | 0, tmp$_0), this$MapLikeSerializer_0.valueSerializer, v);
      }
      return Unit;
    };
  }
  MapLikeSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var size = this.collectionSize_wikn$(value);
    var descriptor = this.descriptor;
    var $receiver = encoder.beginCollection_szpzho$(descriptor, size);
    MapLikeSerializer$serialize$lambda(value, this)($receiver);
    $receiver.endStructure_24f42q$(descriptor);
  };
  MapLikeSerializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MapLikeSerializer',
    interfaces: [AbstractCollectionSerializer]
  };
  function PrimitiveArrayBuilder() {
  }
  PrimitiveArrayBuilder.prototype.ensureCapacity_za3lpa$ = function (requiredCapacity, callback$default) {
    if (requiredCapacity === void 0)
      requiredCapacity = this.position + 1 | 0;
    callback$default ? callback$default(requiredCapacity) : this.ensureCapacity_za3lpa$$default(requiredCapacity);
  };
  PrimitiveArrayBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PrimitiveArrayBuilder',
    interfaces: []
  };
  function PrimitiveArraySerializer(primitiveSerializer) {
    ListLikeSerializer.call(this, primitiveSerializer);
    this.descriptor_o3qkn1$_0 = new PrimitiveArrayDescriptor(primitiveSerializer.descriptor);
  }
  Object.defineProperty(PrimitiveArraySerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_o3qkn1$_0;
    }
  });
  PrimitiveArraySerializer.prototype.builderSize_wili$ = function ($receiver) {
    return $receiver.position;
  };
  PrimitiveArraySerializer.prototype.toResult_wili$ = function ($receiver) {
    return $receiver.build();
  };
  PrimitiveArraySerializer.prototype.checkCapacity_rk7bw8$ = function ($receiver, size) {
    $receiver.ensureCapacity_za3lpa$(size);
  };
  PrimitiveArraySerializer.prototype.collectionIterator_wikn$ = function ($receiver) {
    throw IllegalStateException_init('This method lead to boxing and must not be used, use writeContents instead'.toString());
  };
  PrimitiveArraySerializer.prototype.insert_p422l$ = function ($receiver, index, element) {
    throw IllegalStateException_init('This method lead to boxing and must not be used, use Builder.append instead'.toString());
  };
  PrimitiveArraySerializer.prototype.builder = function () {
    return this.toBuilder_wikn$(this.empty());
  };
  function PrimitiveArraySerializer$serialize$lambda(closure$value, closure$size, this$PrimitiveArraySerializer) {
    return function ($receiver) {
      this$PrimitiveArraySerializer.writeContent_q3xt5$($receiver, closure$value, closure$size);
      return Unit;
    };
  }
  PrimitiveArraySerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var size = this.collectionSize_wikn$(value);
    var descriptor = this.descriptor;
    var $receiver = encoder.beginCollection_szpzho$(descriptor, size);
    PrimitiveArraySerializer$serialize$lambda(value, size, this)($receiver);
    $receiver.endStructure_24f42q$(descriptor);
  };
  PrimitiveArraySerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return this.merge_h7kg3q$(decoder, null);
  };
  PrimitiveArraySerializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PrimitiveArraySerializer',
    interfaces: [ListLikeSerializer]
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    ListLikeSerializer.call(this, eSerializer);
    this.kClass_0 = kClass;
    this.descriptor_8482jr$_0 = new ArrayClassDesc(eSerializer.descriptor);
  }
  Object.defineProperty(ReferenceArraySerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_8482jr$_0;
    }
  });
  ReferenceArraySerializer.prototype.collectionSize_wikn$ = function ($receiver) {
    return $receiver.length;
  };
  ReferenceArraySerializer.prototype.collectionIterator_wikn$ = function ($receiver) {
    return Kotlin.arrayIterator($receiver);
  };
  ReferenceArraySerializer.prototype.builder = function () {
    return ArrayList_init_0();
  };
  ReferenceArraySerializer.prototype.builderSize_wili$ = function ($receiver) {
    return $receiver.size;
  };
  ReferenceArraySerializer.prototype.toResult_wili$ = function ($receiver) {
    return toNativeArrayImpl($receiver, this.kClass_0);
  };
  ReferenceArraySerializer.prototype.toBuilder_wikn$ = function ($receiver) {
    return ArrayList_init_1(asList($receiver));
  };
  ReferenceArraySerializer.prototype.checkCapacity_rk7bw8$ = function ($receiver, size) {
    $receiver.ensureCapacity_za3lpa$(size);
  };
  ReferenceArraySerializer.prototype.insert_p422l$ = function ($receiver, index, element) {
    $receiver.add_wxm5ur$(index, element);
  };
  ReferenceArraySerializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ReferenceArraySerializer',
    interfaces: [ListLikeSerializer]
  };
  function ArrayListSerializer(element) {
    ListLikeSerializer.call(this, element);
    this.descriptor_7uwoa2$_0 = new ArrayListClassDesc(element.descriptor);
  }
  Object.defineProperty(ArrayListSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_7uwoa2$_0;
    }
  });
  ArrayListSerializer.prototype.collectionSize_wikn$ = function ($receiver) {
    return $receiver.size;
  };
  ArrayListSerializer.prototype.collectionIterator_wikn$ = function ($receiver) {
    return $receiver.iterator();
  };
  ArrayListSerializer.prototype.builder = function () {
    return ArrayList_init_0();
  };
  ArrayListSerializer.prototype.builderSize_wili$ = function ($receiver) {
    return $receiver.size;
  };
  ArrayListSerializer.prototype.toResult_wili$ = function ($receiver) {
    return $receiver;
  };
  ArrayListSerializer.prototype.toBuilder_wikn$ = function ($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = $receiver, ArrayList) ? tmp$ : null) != null ? tmp$_0 : ArrayList_init_1($receiver);
  };
  ArrayListSerializer.prototype.checkCapacity_rk7bw8$ = function ($receiver, size) {
    $receiver.ensureCapacity_za3lpa$(size);
  };
  ArrayListSerializer.prototype.insert_p422l$ = function ($receiver, index, element) {
    $receiver.add_wxm5ur$(index, element);
  };
  ArrayListSerializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArrayListSerializer',
    interfaces: [ListLikeSerializer]
  };
  function LinkedHashSetSerializer(eSerializer) {
    ListLikeSerializer.call(this, eSerializer);
    this.descriptor_vnfc7m$_0 = new LinkedHashSetClassDesc(eSerializer.descriptor);
  }
  Object.defineProperty(LinkedHashSetSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_vnfc7m$_0;
    }
  });
  LinkedHashSetSerializer.prototype.collectionSize_wikn$ = function ($receiver) {
    return $receiver.size;
  };
  LinkedHashSetSerializer.prototype.collectionIterator_wikn$ = function ($receiver) {
    return $receiver.iterator();
  };
  LinkedHashSetSerializer.prototype.builder = function () {
    return LinkedHashSet_init_0();
  };
  LinkedHashSetSerializer.prototype.builderSize_wili$ = function ($receiver) {
    return $receiver.size;
  };
  LinkedHashSetSerializer.prototype.toResult_wili$ = function ($receiver) {
    return $receiver;
  };
  LinkedHashSetSerializer.prototype.toBuilder_wikn$ = function ($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = $receiver, LinkedHashSet) ? tmp$ : null) != null ? tmp$_0 : LinkedHashSet_init($receiver);
  };
  LinkedHashSetSerializer.prototype.checkCapacity_rk7bw8$ = function ($receiver, size) {
  };
  LinkedHashSetSerializer.prototype.insert_p422l$ = function ($receiver, index, element) {
    $receiver.add_11rb$(element);
  };
  LinkedHashSetSerializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LinkedHashSetSerializer',
    interfaces: [ListLikeSerializer]
  };
  function HashSetSerializer(eSerializer) {
    ListLikeSerializer.call(this, eSerializer);
    this.descriptor_yqpz47$_0 = new HashSetClassDesc(eSerializer.descriptor);
  }
  Object.defineProperty(HashSetSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_yqpz47$_0;
    }
  });
  HashSetSerializer.prototype.collectionSize_wikn$ = function ($receiver) {
    return $receiver.size;
  };
  HashSetSerializer.prototype.collectionIterator_wikn$ = function ($receiver) {
    return $receiver.iterator();
  };
  HashSetSerializer.prototype.builder = function () {
    return HashSet_init();
  };
  HashSetSerializer.prototype.builderSize_wili$ = function ($receiver) {
    return $receiver.size;
  };
  HashSetSerializer.prototype.toResult_wili$ = function ($receiver) {
    return $receiver;
  };
  HashSetSerializer.prototype.toBuilder_wikn$ = function ($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = $receiver, HashSet) ? tmp$ : null) != null ? tmp$_0 : HashSet_init_0($receiver);
  };
  HashSetSerializer.prototype.checkCapacity_rk7bw8$ = function ($receiver, size) {
  };
  HashSetSerializer.prototype.insert_p422l$ = function ($receiver, index, element) {
    $receiver.add_11rb$(element);
  };
  HashSetSerializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HashSetSerializer',
    interfaces: [ListLikeSerializer]
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.descriptor_pixp0o$_0 = new LinkedHashMapClassDesc(kSerializer.descriptor, vSerializer.descriptor);
  }
  Object.defineProperty(LinkedHashMapSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_pixp0o$_0;
    }
  });
  LinkedHashMapSerializer.prototype.collectionSize_wikn$ = function ($receiver) {
    return $receiver.size;
  };
  LinkedHashMapSerializer.prototype.collectionIterator_wikn$ = function ($receiver) {
    return $receiver.entries.iterator();
  };
  LinkedHashMapSerializer.prototype.builder = function () {
    return LinkedHashMap_init();
  };
  LinkedHashMapSerializer.prototype.builderSize_wili$ = function ($receiver) {
    return $receiver.size * 2 | 0;
  };
  LinkedHashMapSerializer.prototype.toResult_wili$ = function ($receiver) {
    return $receiver;
  };
  LinkedHashMapSerializer.prototype.toBuilder_wikn$ = function ($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = $receiver, LinkedHashMap) ? tmp$ : null) != null ? tmp$_0 : LinkedHashMap_init_1($receiver);
  };
  LinkedHashMapSerializer.prototype.checkCapacity_rk7bw8$ = function ($receiver, size) {
  };
  LinkedHashMapSerializer.prototype.insertKeyValuePair_fbr58l$ = function ($receiver, index, key, value) {
    $receiver.put_xwzc9p$(key, value);
  };
  LinkedHashMapSerializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LinkedHashMapSerializer',
    interfaces: [MapLikeSerializer]
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.descriptor_kvyydd$_0 = new HashMapClassDesc(kSerializer.descriptor, vSerializer.descriptor);
  }
  Object.defineProperty(HashMapSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_kvyydd$_0;
    }
  });
  HashMapSerializer.prototype.collectionSize_wikn$ = function ($receiver) {
    return $receiver.size;
  };
  HashMapSerializer.prototype.collectionIterator_wikn$ = function ($receiver) {
    return $receiver.entries.iterator();
  };
  HashMapSerializer.prototype.builder = function () {
    return HashMap_init();
  };
  HashMapSerializer.prototype.builderSize_wili$ = function ($receiver) {
    return $receiver.size * 2 | 0;
  };
  HashMapSerializer.prototype.toResult_wili$ = function ($receiver) {
    return $receiver;
  };
  HashMapSerializer.prototype.toBuilder_wikn$ = function ($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = $receiver, HashMap) ? tmp$ : null) != null ? tmp$_0 : HashMap_init_0($receiver);
  };
  HashMapSerializer.prototype.checkCapacity_rk7bw8$ = function ($receiver, size) {
  };
  HashMapSerializer.prototype.insertKeyValuePair_fbr58l$ = function ($receiver, index, key, value) {
    $receiver.put_xwzc9p$(key, value);
  };
  HashMapSerializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HashMapSerializer',
    interfaces: [MapLikeSerializer]
  };
  function ElementMarker(descriptor, readIfAbsent) {
    ElementMarker$Companion_getInstance();
    this.descriptor_0 = descriptor;
    this.readIfAbsent_0 = readIfAbsent;
    this.lowerMarks_0 = null;
    this.highMarksArray_0 = null;
    var tmp$;
    var elementsCount = this.descriptor_0.elementsCount;
    if (elementsCount <= 64) {
      if (elementsCount === 64) {
        tmp$ = L0;
      } else {
        tmp$ = L_1.shiftLeft(elementsCount);
      }
      this.lowerMarks_0 = tmp$;
      this.highMarksArray_0 = ElementMarker$Companion_getInstance().EMPTY_HIGH_MARKS_0;
    } else {
      this.lowerMarks_0 = L0;
      this.highMarksArray_0 = this.prepareHighMarksArray_0(elementsCount);
    }
  }
  function ElementMarker$Companion() {
    ElementMarker$Companion_instance = this;
    this.EMPTY_HIGH_MARKS_0 = Kotlin.longArray(0);
  }
  ElementMarker$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ElementMarker$Companion_instance = null;
  function ElementMarker$Companion_getInstance() {
    if (ElementMarker$Companion_instance === null) {
      new ElementMarker$Companion();
    }return ElementMarker$Companion_instance;
  }
  ElementMarker.prototype.mark_za3lpa$ = function (index) {
    if (index < 64) {
      this.lowerMarks_0 = this.lowerMarks_0.or(L1.shiftLeft(index));
    } else {
      this.markHigh_0(index);
    }
  };
  ElementMarker.prototype.nextUnmarkedIndex = function () {
    var elementsCount = this.descriptor_0.elementsCount;
    while (!equals(this.lowerMarks_0, L_1)) {
      var index = countTrailingZeroBits(this.lowerMarks_0.inv());
      this.lowerMarks_0 = this.lowerMarks_0.or(L1.shiftLeft(index));
      if (this.readIfAbsent_0(this.descriptor_0, index)) {
        return index;
      }}
    if (elementsCount > 64) {
      return this.nextUnmarkedHighIndex_0();
    }return -1;
  };
  ElementMarker.prototype.prepareHighMarksArray_0 = function (elementsCount) {
    var slotsCount = elementsCount - 1 >>> 6;
    var elementsInLastSlot = elementsCount & 63;
    var highMarks = Kotlin.longArray(slotsCount);
    if (elementsInLastSlot !== 0) {
      highMarks[get_lastIndex(highMarks)] = L_1.shiftLeft(elementsCount);
    }return highMarks;
  };
  ElementMarker.prototype.markHigh_0 = function (index) {
    var slot = (index >>> 6) - 1 | 0;
    var offsetInSlot = index & 63;
    this.highMarksArray_0[slot] = this.highMarksArray_0[slot].or(L1.shiftLeft(offsetInSlot));
  };
  ElementMarker.prototype.nextUnmarkedHighIndex_0 = function () {
    var tmp$;
    tmp$ = this.highMarksArray_0;
    for (var slot = 0; slot !== tmp$.length; ++slot) {
      var slotOffset = (slot + 1 | 0) * 64 | 0;
      var slotMarks = this.highMarksArray_0[slot];
      while (!equals(slotMarks, L_1)) {
        var indexInSlot = countTrailingZeroBits(slotMarks.inv());
        slotMarks = slotMarks.or(L1.shiftLeft(indexInSlot));
        var index = slotOffset + indexInSlot | 0;
        if (this.readIfAbsent_0(this.descriptor_0, index)) {
          this.highMarksArray_0[slot] = slotMarks;
          return index;
        }}
      this.highMarksArray_0[slot] = slotMarks;
    }
    return -1;
  };
  ElementMarker.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ElementMarker',
    interfaces: []
  };
  var elementsHashCodeBy$lambda = wrapFunction(function () {
    var hashCode = Kotlin.hashCode;
    return function (closure$selector) {
      return function (hash, element) {
        var tmp$ = 31 * hash | 0;
        var $receiver = closure$selector(element);
        var tmp$_0;
        return tmp$ + ((tmp$_0 = $receiver != null ? hashCode($receiver) : null) != null ? tmp$_0 : 0) | 0;
      };
    };
  });
  function EnumDescriptor(name, elementsCount) {
    PluginGeneratedSerialDescriptor.call(this, name, void 0, elementsCount);
    this.kind_8antlo$_0 = SerialKind$ENUM_getInstance();
    this.elementDescriptors_r8dl0w$_0 = lazy_0(EnumDescriptor$elementDescriptors$lambda(elementsCount, name, this));
  }
  Object.defineProperty(EnumDescriptor.prototype, 'kind', {
    configurable: true,
    get: function () {
      return this.kind_8antlo$_0;
    }
  });
  Object.defineProperty(EnumDescriptor.prototype, 'elementDescriptors_0', {
    configurable: true,
    get: function () {
      return this.elementDescriptors_r8dl0w$_0.value;
    }
  });
  EnumDescriptor.prototype.getElementDescriptor_za3lpa$ = function (index) {
    return getChecked(this.elementDescriptors_0, index);
  };
  EnumDescriptor.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null)
      return false;
    if (!Kotlin.isType(other, SerialDescriptor))
      return false;
    if (other.kind !== SerialKind$ENUM_getInstance())
      return false;
    if (!equals(this.serialName, other.serialName))
      return false;
    if (!equals(cachedSerialNames(this), cachedSerialNames(other)))
      return false;
    return true;
  };
  EnumDescriptor.prototype.toString = function () {
    return joinToString(get_elementNames(this), ', ', this.serialName + '(', ')');
  };
  EnumDescriptor.prototype.hashCode = function () {
    var result = hashCode(this.serialName);
    var tmp$;
    var accumulator = 1;
    tmp$ = get_elementNames(this).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      accumulator = (31 * accumulator | 0) + ((tmp$_0 = element != null ? hashCode(element) : null) != null ? tmp$_0 : 0) | 0;
    }
    var elementsHashCode = accumulator;
    result = (31 * result | 0) + elementsHashCode | 0;
    return result;
  };
  function EnumDescriptor$elementDescriptors$lambda(closure$elementsCount, closure$name, this$EnumDescriptor) {
    return function () {
      var size = closure$elementsCount;
      var array = Array_0(size);
      var tmp$;
      tmp$ = array.length - 1 | 0;
      for (var i = 0; i <= tmp$; i++) {
        array[i] = buildSerialDescriptor(closure$name + '.' + this$EnumDescriptor.getElementName_za3lpa$(i), StructureKind$OBJECT_getInstance(), []);
      }
      return array;
    };
  }
  EnumDescriptor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EnumDescriptor',
    interfaces: [PluginGeneratedSerialDescriptor]
  };
  function EnumSerializer(serialName, values) {
    this.values_0 = values;
    this.descriptor_ulj9cc$_0 = buildSerialDescriptor(serialName, SerialKind$ENUM_getInstance(), [], EnumSerializer$descriptor$lambda(this, serialName));
  }
  Object.defineProperty(EnumSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_ulj9cc$_0;
    }
  });
  EnumSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var index = indexOf(this.values_0, value);
    if (index === -1) {
      throw SerializationException_init_0(value.toString() + ' is not a valid enum ' + this.descriptor.serialName + ', ' + ('must be one of ' + contentToString(this.values_0)));
    }encoder.encodeEnum_szpzho$(this.descriptor, index);
  };
  EnumSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index = decoder.decodeEnum_24f42q$(this.descriptor);
    if (!get_indices(this.values_0).contains_mef7kx$(index)) {
      throw SerializationException_init_0(index.toString() + ' is not among valid ' + this.descriptor.serialName + ' enum values, ' + ('values size is ' + this.values_0.length));
    }return this.values_0[index];
  };
  EnumSerializer.prototype.toString = function () {
    return 'kotlinx.serialization.internal.EnumSerializer<' + this.descriptor.serialName + '>';
  };
  function EnumSerializer$descriptor$lambda(this$EnumSerializer, closure$serialName) {
    return function ($receiver) {
      var $receiver_0 = this$EnumSerializer.values_0;
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var element = $receiver_0[tmp$];
        var fqn = closure$serialName + '.' + element.name;
        var enumMemberDescriptor = buildSerialDescriptor(fqn, StructureKind$OBJECT_getInstance(), []);
        $receiver.element_vxrguq$(element.name, enumMemberDescriptor);
      }
      return Unit;
    };
  }
  EnumSerializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EnumSerializer',
    interfaces: [KSerializer]
  };
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.isInline_4xqniz$_0 = true;
  }
  Object.defineProperty(InlineClassDescriptor.prototype, 'isInline', {
    configurable: true,
    get: function () {
      return this.isInline_4xqniz$_0;
    }
  });
  InlineClassDescriptor.prototype.hashCode = function () {
    return PluginGeneratedSerialDescriptor.prototype.hashCode.call(this) * 31 | 0;
  };
  InlineClassDescriptor.prototype.equals = function (other) {
    var equalsImpl$result;
    equalsImpl$break: do {
      var tmp$;
      if (this === other) {
        equalsImpl$result = true;
        break equalsImpl$break;
      }if (!Kotlin.isType(other, InlineClassDescriptor)) {
        equalsImpl$result = false;
        break equalsImpl$break;
      }if (!equals(this.serialName, other.serialName)) {
        equalsImpl$result = false;
        break equalsImpl$break;
      }if (!(other.isInline && contentEquals(this.typeParameterDescriptors_8be2vx$, other.typeParameterDescriptors_8be2vx$))) {
        equalsImpl$result = false;
        break equalsImpl$break;
      }if (this.elementsCount !== other.elementsCount) {
        equalsImpl$result = false;
        break equalsImpl$break;
      }tmp$ = this.elementsCount;
      for (var index = 0; index < tmp$; index++) {
        if (!equals(this.getElementDescriptor_za3lpa$(index).serialName, other.getElementDescriptor_za3lpa$(index).serialName)) {
          equalsImpl$result = false;
          break equalsImpl$break;
        }if (!equals(this.getElementDescriptor_za3lpa$(index).kind, other.getElementDescriptor_za3lpa$(index).kind)) {
          equalsImpl$result = false;
          break equalsImpl$break;
        }}
      equalsImpl$result = true;
    }
     while (false);
    return equalsImpl$result;
  };
  InlineClassDescriptor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InlineClassDescriptor',
    interfaces: [PluginGeneratedSerialDescriptor]
  };
  function InlinePrimitiveDescriptor$ObjectLiteral(closure$primitiveSerializer) {
    this.closure$primitiveSerializer = closure$primitiveSerializer;
  }
  InlinePrimitiveDescriptor$ObjectLiteral.prototype.childSerializers = function () {
    return [this.closure$primitiveSerializer];
  };
  Object.defineProperty(InlinePrimitiveDescriptor$ObjectLiteral.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      throw IllegalStateException_init('unsupported'.toString());
    }
  });
  InlinePrimitiveDescriptor$ObjectLiteral.prototype.serialize_55azsf$ = function (encoder, value) {
    throw IllegalStateException_init('unsupported'.toString());
  };
  InlinePrimitiveDescriptor$ObjectLiteral.prototype.deserialize_bq71mq$ = function (decoder) {
    throw IllegalStateException_init('unsupported'.toString());
  };
  InlinePrimitiveDescriptor$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [GeneratedSerializer]
  };
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$ObjectLiteral(primitiveSerializer));
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.descriptor_twumwr$_0 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_7(kotlin_js_internal_IntCompanionObject));
  }
  Object.defineProperty(UIntSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_twumwr$_0;
    }
  });
  UIntSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    encoder.encodeInline_24f42q$(this.descriptor).encodeInt_za3lpa$(value.data);
  };
  UIntSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return new UInt_init(decoder.decodeInline_24f42q$(this.descriptor).decodeInt());
  };
  UIntSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'UIntSerializer',
    interfaces: [KSerializer]
  };
  var UIntSerializer_instance = null;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance === null) {
      new UIntSerializer();
    }return UIntSerializer_instance;
  }
  function ULongSerializer() {
    ULongSerializer_instance = this;
    this.descriptor_3i3rs4$_0 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_8(kotlin_js_internal_LongCompanionObject));
  }
  Object.defineProperty(ULongSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_3i3rs4$_0;
    }
  });
  ULongSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    encoder.encodeInline_24f42q$(this.descriptor).encodeLong_s8cxhz$(value.data);
  };
  ULongSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return new ULong_init(decoder.decodeInline_24f42q$(this.descriptor).decodeLong());
  };
  ULongSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ULongSerializer',
    interfaces: [KSerializer]
  };
  var ULongSerializer_instance = null;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance === null) {
      new ULongSerializer();
    }return ULongSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.descriptor_x7d240$_0 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_5(kotlin_js_internal_ByteCompanionObject));
  }
  Object.defineProperty(UByteSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_x7d240$_0;
    }
  });
  UByteSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    encoder.encodeInline_24f42q$(this.descriptor).encodeByte_s8j3t7$(value.data);
  };
  UByteSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return new UByte_init(decoder.decodeInline_24f42q$(this.descriptor).decodeByte());
  };
  UByteSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'UByteSerializer',
    interfaces: [KSerializer]
  };
  var UByteSerializer_instance = null;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance === null) {
      new UByteSerializer();
    }return UByteSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.descriptor_q9gay6$_0 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_6(kotlin_js_internal_ShortCompanionObject));
  }
  Object.defineProperty(UShortSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_q9gay6$_0;
    }
  });
  UShortSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    encoder.encodeInline_24f42q$(this.descriptor).encodeShort_mq22fl$(value.data);
  };
  UShortSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return new UShort_init(decoder.decodeInline_24f42q$(this.descriptor).decodeShort());
  };
  UShortSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'UShortSerializer',
    interfaces: [KSerializer]
  };
  var UShortSerializer_instance = null;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance === null) {
      new UShortSerializer();
    }return UShortSerializer_instance;
  }
  function jsonCachedSerialNames($receiver) {
    return cachedSerialNames($receiver);
  }
  function NoOpEncoder() {
    NoOpEncoder_instance = this;
    AbstractEncoder.call(this);
    this.serializersModule_buddhf$_0 = EmptySerializersModule;
  }
  Object.defineProperty(NoOpEncoder.prototype, 'serializersModule', {
    configurable: true,
    get: function () {
      return this.serializersModule_buddhf$_0;
    }
  });
  NoOpEncoder.prototype.encodeValue_za3rmp$ = function (value) {
  };
  NoOpEncoder.prototype.encodeNull = function () {
  };
  NoOpEncoder.prototype.encodeBoolean_6taknv$ = function (value) {
  };
  NoOpEncoder.prototype.encodeByte_s8j3t7$ = function (value) {
  };
  NoOpEncoder.prototype.encodeShort_mq22fl$ = function (value) {
  };
  NoOpEncoder.prototype.encodeInt_za3lpa$ = function (value) {
  };
  NoOpEncoder.prototype.encodeLong_s8cxhz$ = function (value) {
  };
  NoOpEncoder.prototype.encodeFloat_mx4ult$ = function (value) {
  };
  NoOpEncoder.prototype.encodeDouble_14dthe$ = function (value) {
  };
  NoOpEncoder.prototype.encodeChar_s8itvh$ = function (value) {
  };
  NoOpEncoder.prototype.encodeString_61zpoe$ = function (value) {
  };
  NoOpEncoder.prototype.encodeEnum_szpzho$ = function (enumDescriptor, index) {
  };
  NoOpEncoder.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'NoOpEncoder',
    interfaces: [AbstractEncoder]
  };
  var NoOpEncoder_instance = null;
  function NoOpEncoder_getInstance() {
    if (NoOpEncoder_instance === null) {
      new NoOpEncoder();
    }return NoOpEncoder_instance;
  }
  function NullableSerializer(serializer) {
    this.serializer_0 = serializer;
    this.descriptor_kbvl2k$_0 = new SerialDescriptorForNullable(this.serializer_0.descriptor);
  }
  Object.defineProperty(NullableSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_kbvl2k$_0;
    }
  });
  NullableSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    if (value != null) {
      encoder.encodeNotNullMark();
      encoder.encodeSerializableValue_tf03ej$(this.serializer_0, value);
    } else {
      encoder.encodeNull();
    }
  };
  NullableSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return decoder.decodeNotNullMark() ? decoder.decodeSerializableValue_w63s0f$(this.serializer_0) : decoder.decodeNull();
  };
  NullableSerializer.prototype.equals = function (other) {
    var tmp$, tmp$_0;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    Kotlin.isType(tmp$_0 = other, NullableSerializer) ? tmp$_0 : throwCCE();
    if (!equals(this.serializer_0, other.serializer_0))
      return false;
    return true;
  };
  NullableSerializer.prototype.hashCode = function () {
    return hashCode(this.serializer_0);
  };
  NullableSerializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NullableSerializer',
    interfaces: [KSerializer]
  };
  function SerialDescriptorForNullable(original) {
    this.original_8be2vx$ = original;
    this.serialName_szvoqg$_0 = this.original_8be2vx$.serialName + '?';
    this.serialNames_oi6dhz$_0 = cachedSerialNames(this.original_8be2vx$);
  }
  Object.defineProperty(SerialDescriptorForNullable.prototype, 'serialName', {
    configurable: true,
    get: function () {
      return this.serialName_szvoqg$_0;
    }
  });
  Object.defineProperty(SerialDescriptorForNullable.prototype, 'serialNames', {
    configurable: true,
    get: function () {
      return this.serialNames_oi6dhz$_0;
    }
  });
  Object.defineProperty(SerialDescriptorForNullable.prototype, 'isNullable', {
    configurable: true,
    get: function () {
      return true;
    }
  });
  SerialDescriptorForNullable.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!Kotlin.isType(other, SerialDescriptorForNullable))
      return false;
    if (!equals(this.original_8be2vx$, other.original_8be2vx$))
      return false;
    return true;
  };
  SerialDescriptorForNullable.prototype.toString = function () {
    return this.original_8be2vx$.toString() + '?';
  };
  SerialDescriptorForNullable.prototype.hashCode = function () {
    return hashCode(this.original_8be2vx$) * 31 | 0;
  };
  Object.defineProperty(SerialDescriptorForNullable.prototype, 'annotations', {
    configurable: true,
    get: function () {
      return this.original_8be2vx$.annotations;
    }
  });
  Object.defineProperty(SerialDescriptorForNullable.prototype, 'elementsCount', {
    configurable: true,
    get: function () {
      return this.original_8be2vx$.elementsCount;
    }
  });
  Object.defineProperty(SerialDescriptorForNullable.prototype, 'isInline', {
    configurable: true,
    get: function () {
      return this.original_8be2vx$.isInline;
    }
  });
  Object.defineProperty(SerialDescriptorForNullable.prototype, 'kind', {
    configurable: true,
    get: function () {
      return this.original_8be2vx$.kind;
    }
  });
  SerialDescriptorForNullable.prototype.getElementAnnotations_za3lpa$ = function (index) {
    return this.original_8be2vx$.getElementAnnotations_za3lpa$(index);
  };
  SerialDescriptorForNullable.prototype.getElementDescriptor_za3lpa$ = function (index) {
    return this.original_8be2vx$.getElementDescriptor_za3lpa$(index);
  };
  SerialDescriptorForNullable.prototype.getElementIndex_61zpoe$ = function (name) {
    return this.original_8be2vx$.getElementIndex_61zpoe$(name);
  };
  SerialDescriptorForNullable.prototype.getElementName_za3lpa$ = function (index) {
    return this.original_8be2vx$.getElementName_za3lpa$(index);
  };
  SerialDescriptorForNullable.prototype.isElementOptional_za3lpa$ = function (index) {
    return this.original_8be2vx$.isElementOptional_za3lpa$(index);
  };
  SerialDescriptorForNullable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SerialDescriptorForNullable',
    interfaces: [CachedNames, SerialDescriptor]
  };
  function ObjectSerializer(serialName, objectInstance) {
    this.objectInstance_0 = objectInstance;
    this._annotations_0 = emptyList();
    this.descriptor_uhy216$_0 = lazy(LazyThreadSafetyMode.PUBLICATION, ObjectSerializer$descriptor$lambda(serialName, this));
  }
  Object.defineProperty(ObjectSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_uhy216$_0.value;
    }
  });
  ObjectSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    encoder.beginStructure_24f42q$(this.descriptor).endStructure_24f42q$(this.descriptor);
  };
  ObjectSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    decoder.beginStructure_24f42q$(this.descriptor).endStructure_24f42q$(this.descriptor);
    return this.objectInstance_0;
  };
  function ObjectSerializer$descriptor$lambda$lambda(this$ObjectSerializer) {
    return function ($receiver) {
      $receiver.annotations = this$ObjectSerializer._annotations_0;
      return Unit;
    };
  }
  function ObjectSerializer$descriptor$lambda(closure$serialName, this$ObjectSerializer) {
    return function () {
      return buildSerialDescriptor(closure$serialName, StructureKind$OBJECT_getInstance(), [], ObjectSerializer$descriptor$lambda$lambda(this$ObjectSerializer));
    };
  }
  ObjectSerializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ObjectSerializer',
    interfaces: [KSerializer]
  };
  function ObjectSerializer_init(serialName, objectInstance, classAnnotations, $this) {
    $this = $this || Object.create(ObjectSerializer.prototype);
    ObjectSerializer.call($this, serialName, objectInstance);
    $this._annotations_0 = asList(classAnnotations);
    return $this;
  }
  function InternalHexConverter() {
    InternalHexConverter_instance = this;
    this.hexCode_0 = '0123456789ABCDEF';
  }
  InternalHexConverter.prototype.parseHexBinary_61zpoe$ = function (s) {
    var len = s.length;
    if (!(len % 2 === 0)) {
      var message = 'HexBinary string must be even length';
      throw IllegalArgumentException_init(message.toString());
    }var bytes = new Int8Array(len / 2 | 0);
    var i = {v: 0};
    while (i.v < len) {
      var h = this.hexToInt_0(s.charCodeAt(i.v));
      var l = this.hexToInt_0(s.charCodeAt(i.v + 1 | 0));
      if (!!(h === -1 || l === -1)) {
        var message_0 = 'Invalid hex chars: ' + String.fromCharCode(s.charCodeAt(i.v)) + String.fromCharCode(s.charCodeAt(i.v + 1 | 0));
        throw IllegalArgumentException_init(message_0.toString());
      }bytes[i.v / 2 | 0] = toByte((h << 4) + l | 0);
      i.v = i.v + 2 | 0;
    }
    return bytes;
  };
  InternalHexConverter.prototype.hexToInt_0 = function (ch) {
    if ((new CharRange(48, 57)).contains_mef7kx$(ch))
      return ch - 48;
    else if ((new CharRange(65, 70)).contains_mef7kx$(ch))
      return ch - 65 + 10 | 0;
    else if ((new CharRange(97, 102)).contains_mef7kx$(ch))
      return ch - 97 + 10 | 0;
    else
      return -1;
  };
  InternalHexConverter.prototype.printHexBinary_1fhb37$ = function (data, lowerCase) {
    if (lowerCase === void 0)
      lowerCase = false;
    var tmp$;
    var r = StringBuilder_init(data.length * 2 | 0);
    for (tmp$ = 0; tmp$ !== data.length; ++tmp$) {
      var b = data[tmp$];
      r.append_s8itvh$(this.hexCode_0.charCodeAt(b >> 4 & 15));
      r.append_s8itvh$(this.hexCode_0.charCodeAt(b & 15));
    }
    return lowerCase ? r.toString().toLowerCase() : r.toString();
  };
  InternalHexConverter.prototype.toHexString_za3lpa$ = function (n) {
    var tmp$;
    var arr = new Int8Array(4);
    for (var i = 0; i < 4; i++) {
      arr[i] = toByte(n >> 24 - (i * 8 | 0));
    }
    var $receiver = trimStart(this.printHexBinary_1fhb37$(arr, true), Kotlin.charArrayOf(48));
    return (tmp$ = $receiver.length > 0 ? $receiver : null) != null ? tmp$ : '0';
  };
  InternalHexConverter.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'InternalHexConverter',
    interfaces: []
  };
  var InternalHexConverter_instance = null;
  function InternalHexConverter_getInstance() {
    if (InternalHexConverter_instance === null) {
      new InternalHexConverter();
    }return InternalHexConverter_instance;
  }
  function cachedSerialNames($receiver) {
    var tmp$;
    if (Kotlin.isType($receiver, CachedNames))
      return $receiver.serialNames;
    var result = HashSet_init_1($receiver.elementsCount);
    tmp$ = $receiver.elementsCount;
    for (var i = 0; i < tmp$; i++) {
      var element = $receiver.getElementName_za3lpa$(i);
      result.add_11rb$(element);
    }
    return result;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function compactArray($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = !($receiver == null || $receiver.isEmpty()) ? $receiver : null) != null ? copyToArray(tmp$) : null) != null ? tmp$_0 : EMPTY_DESCRIPTOR_ARRAY;
  }
  var cast = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-js-legacy.kotlinx.serialization.internal.cast_irzu8f$', wrapFunction(function () {
    var KSerializer = _.kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function ($receiver) {
      var tmp$;
      return Kotlin.isType(tmp$ = $receiver, KSerializer) ? tmp$ : throwCCE();
    };
  }));
  var cast_0 = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-js-legacy.kotlinx.serialization.internal.cast_sjryxj$', wrapFunction(function () {
    var SerializationStrategy = _.kotlinx.serialization.SerializationStrategy;
    var throwCCE = Kotlin.throwCCE;
    return function ($receiver) {
      var tmp$;
      return Kotlin.isType(tmp$ = $receiver, SerializationStrategy) ? tmp$ : throwCCE();
    };
  }));
  var cast_1 = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-js-legacy.kotlinx.serialization.internal.cast_pbw0sq$', wrapFunction(function () {
    var DeserializationStrategy = _.kotlinx.serialization.DeserializationStrategy;
    var throwCCE = Kotlin.throwCCE;
    return function ($receiver) {
      var tmp$;
      return Kotlin.isType(tmp$ = $receiver, DeserializationStrategy) ? tmp$ : throwCCE();
    };
  }));
  function serializerNotRegistered($receiver) {
    throw SerializationException_init_0("Serializer for class '" + toString($receiver.simpleName) + "' is not found." + '\n' + 'Mark the class as @Serializable or provide the serializer explicitly.');
  }
  function kclass($receiver) {
    var tmp$, tmp$_0;
    var t = $receiver.classifier;
    if (Kotlin.isType(t, KClass))
      tmp$ = t;
    else {
      throw IllegalStateException_init(('Only KClass supported as classifier, got ' + toString(t)).toString());
    }
    return Kotlin.isType(tmp$_0 = tmp$, KClass) ? tmp$_0 : throwCCE();
  }
  var elementsHashCodeBy = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-js-legacy.kotlinx.serialization.internal.elementsHashCodeBy_9ua6wn$', wrapFunction(function () {
    var wrapFunction = Kotlin.wrapFunction;
    var hashCode = Kotlin.hashCode;
    var elementsHashCodeBy$lambda = wrapFunction(function () {
      var hashCode = Kotlin.hashCode;
      return function (closure$selector) {
        return function (hash, element) {
          var tmp$ = 31 * hash | 0;
          var $receiver = closure$selector(element);
          var tmp$_0;
          return tmp$ + ((tmp$_0 = $receiver != null ? hashCode($receiver) : null) != null ? tmp$_0 : 0) | 0;
        };
      };
    });
    return function ($receiver, selector) {
      var tmp$;
      var accumulator = 1;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var tmp$_0 = 31 * accumulator | 0;
        var $receiver_0 = selector(element);
        var tmp$_1;
        accumulator = tmp$_0 + ((tmp$_1 = $receiver_0 != null ? hashCode($receiver_0) : null) != null ? tmp$_1 : 0) | 0;
      }
      return accumulator;
    };
  }));
  function throwMissingFieldException(seen, goldenMask, descriptor) {
    var missingFields = ArrayList_init_0();
    var missingFieldsBits = goldenMask & ~seen;
    for (var i = 0; i < 32; i++) {
      if ((missingFieldsBits & 1) !== 0) {
        var element = descriptor.getElementName_za3lpa$(i);
        missingFields.add_11rb$(element);
      }missingFieldsBits = missingFieldsBits >>> 1;
    }
    throw MissingFieldException_init_0(missingFields, descriptor.serialName);
  }
  function throwArrayMissingFieldException(seenArray, goldenMaskArray, descriptor) {
    var missingFields = ArrayList_init_0();
    for (var maskSlot = 0; maskSlot !== goldenMaskArray.length; ++maskSlot) {
      var missingFieldsBits = goldenMaskArray[maskSlot] & ~seenArray[maskSlot];
      if (missingFieldsBits !== 0) {
        for (var i = 0; i < 32; i++) {
          if ((missingFieldsBits & 1) !== 0) {
            var element = descriptor.getElementName_za3lpa$((maskSlot * 32 | 0) + i | 0);
            missingFields.add_11rb$(element);
          }missingFieldsBits = missingFieldsBits >>> 1;
        }
      }}
    throw MissingFieldException_init_0(missingFields, descriptor.serialName);
  }
  var elementsHashCodeBy$lambda_0 = wrapFunction(function () {
    var hashCode = Kotlin.hashCode;
    return function (closure$selector) {
      return function (hash, element) {
        var tmp$ = 31 * hash | 0;
        var $receiver = closure$selector(element);
        var tmp$_0;
        return tmp$ + ((tmp$_0 = $receiver != null ? hashCode($receiver) : null) != null ? tmp$_0 : 0) | 0;
      };
    };
  });
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    if (generatedSerializer === void 0)
      generatedSerializer = null;
    this.serialName_igazkg$_0 = serialName;
    this.generatedSerializer_0 = generatedSerializer;
    this.elementsCount_qx3iur$_0 = elementsCount;
    this.added_0 = -1;
    var array = Array_0(this.elementsCount);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = '[UNINITIALIZED]';
    }
    this.names_0 = array;
    this.propertiesAnnotations_0 = Kotlin.newArray(this.elementsCount, null);
    this.classAnnotations_0 = null;
    this.elementsOptionality_0 = Kotlin.booleanArray(this.elementsCount);
    this.indices_0 = emptyMap();
    this.childSerializers_am32qy$_0 = lazy(LazyThreadSafetyMode.PUBLICATION, PluginGeneratedSerialDescriptor$childSerializers$lambda(this));
    this.typeParameterDescriptors_8be2vx$_tf62pe$_0 = lazy(LazyThreadSafetyMode.PUBLICATION, PluginGeneratedSerialDescriptor$typeParameterDescriptors$lambda(this));
    this._hashCode_61j445$_0 = lazy(LazyThreadSafetyMode.PUBLICATION, PluginGeneratedSerialDescriptor$_hashCode$lambda(this));
  }
  Object.defineProperty(PluginGeneratedSerialDescriptor.prototype, 'serialName', {
    get: function () {
      return this.serialName_igazkg$_0;
    }
  });
  Object.defineProperty(PluginGeneratedSerialDescriptor.prototype, 'elementsCount', {
    get: function () {
      return this.elementsCount_qx3iur$_0;
    }
  });
  Object.defineProperty(PluginGeneratedSerialDescriptor.prototype, 'kind', {
    configurable: true,
    get: function () {
      return StructureKind$CLASS_getInstance();
    }
  });
  Object.defineProperty(PluginGeneratedSerialDescriptor.prototype, 'annotations', {
    configurable: true,
    get: function () {
      var tmp$;
      return (tmp$ = this.classAnnotations_0) != null ? tmp$ : emptyList();
    }
  });
  Object.defineProperty(PluginGeneratedSerialDescriptor.prototype, 'serialNames', {
    configurable: true,
    get: function () {
      return this.indices_0.keys;
    }
  });
  Object.defineProperty(PluginGeneratedSerialDescriptor.prototype, 'childSerializers_0', {
    configurable: true,
    get: function () {
      return this.childSerializers_am32qy$_0.value;
    }
  });
  Object.defineProperty(PluginGeneratedSerialDescriptor.prototype, 'typeParameterDescriptors_8be2vx$', {
    configurable: true,
    get: function () {
      return this.typeParameterDescriptors_8be2vx$_tf62pe$_0.value;
    }
  });
  Object.defineProperty(PluginGeneratedSerialDescriptor.prototype, '_hashCode_0', {
    configurable: true,
    get: function () {
      return this._hashCode_61j445$_0.value;
    }
  });
  PluginGeneratedSerialDescriptor.prototype.addElement_ivxn3r$ = function (name, isOptional) {
    if (isOptional === void 0)
      isOptional = false;
    this.names_0[this.added_0 = this.added_0 + 1 | 0, this.added_0] = name;
    this.elementsOptionality_0[this.added_0] = isOptional;
    this.propertiesAnnotations_0[this.added_0] = null;
    if (this.added_0 === (this.elementsCount - 1 | 0)) {
      this.indices_0 = this.buildIndices_0();
    }};
  PluginGeneratedSerialDescriptor.prototype.pushAnnotation_yj921w$ = function (annotation) {
    var it = this.propertiesAnnotations_0[this.added_0];
    var block$result;
    if (it == null) {
      var result = ArrayList_init(1);
      this.propertiesAnnotations_0[this.added_0] = result;
      block$result = result;
    } else {
      block$result = it;
    }
    var list = block$result;
    list.add_11rb$(annotation);
  };
  PluginGeneratedSerialDescriptor.prototype.pushClassAnnotation_yj921w$ = function (a) {
    if (this.classAnnotations_0 == null) {
      this.classAnnotations_0 = ArrayList_init(1);
    }ensureNotNull(this.classAnnotations_0).add_11rb$(a);
  };
  PluginGeneratedSerialDescriptor.prototype.getElementDescriptor_za3lpa$ = function (index) {
    return getChecked(this.childSerializers_0, index).descriptor;
  };
  PluginGeneratedSerialDescriptor.prototype.isElementOptional_za3lpa$ = function (index) {
    return getChecked_0(this.elementsOptionality_0, index);
  };
  PluginGeneratedSerialDescriptor.prototype.getElementAnnotations_za3lpa$ = function (index) {
    var tmp$;
    return (tmp$ = getChecked(this.propertiesAnnotations_0, index)) != null ? tmp$ : emptyList();
  };
  PluginGeneratedSerialDescriptor.prototype.getElementName_za3lpa$ = function (index) {
    return getChecked(this.names_0, index);
  };
  PluginGeneratedSerialDescriptor.prototype.getElementIndex_61zpoe$ = function (name) {
    var tmp$;
    return (tmp$ = this.indices_0.get_11rb$(name)) != null ? tmp$ : -3;
  };
  PluginGeneratedSerialDescriptor.prototype.buildIndices_0 = function () {
    var tmp$;
    var indices = HashMap_init();
    tmp$ = this.names_0;
    for (var i = 0; i !== tmp$.length; ++i) {
      var key = this.names_0[i];
      indices.put_xwzc9p$(key, i);
    }
    return indices;
  };
  PluginGeneratedSerialDescriptor.prototype.equals = function (other) {
    var equalsImpl$result;
    equalsImpl$break: do {
      var tmp$;
      if (this === other) {
        equalsImpl$result = true;
        break equalsImpl$break;
      }if (!Kotlin.isType(other, PluginGeneratedSerialDescriptor)) {
        equalsImpl$result = false;
        break equalsImpl$break;
      }if (!equals(this.serialName, other.serialName)) {
        equalsImpl$result = false;
        break equalsImpl$break;
      }if (!contentEquals(this.typeParameterDescriptors_8be2vx$, other.typeParameterDescriptors_8be2vx$)) {
        equalsImpl$result = false;
        break equalsImpl$break;
      }if (this.elementsCount !== other.elementsCount) {
        equalsImpl$result = false;
        break equalsImpl$break;
      }tmp$ = this.elementsCount;
      for (var index = 0; index < tmp$; index++) {
        if (!equals(this.getElementDescriptor_za3lpa$(index).serialName, other.getElementDescriptor_za3lpa$(index).serialName)) {
          equalsImpl$result = false;
          break equalsImpl$break;
        }if (!equals(this.getElementDescriptor_za3lpa$(index).kind, other.getElementDescriptor_za3lpa$(index).kind)) {
          equalsImpl$result = false;
          break equalsImpl$break;
        }}
      equalsImpl$result = true;
    }
     while (false);
    return equalsImpl$result;
  };
  PluginGeneratedSerialDescriptor.prototype.hashCode = function () {
    return this._hashCode_0;
  };
  function PluginGeneratedSerialDescriptor$toString$lambda(this$PluginGeneratedSerialDescriptor) {
    return function (i) {
      return this$PluginGeneratedSerialDescriptor.getElementName_za3lpa$(i) + ': ' + this$PluginGeneratedSerialDescriptor.getElementDescriptor_za3lpa$(i).serialName;
    };
  }
  PluginGeneratedSerialDescriptor.prototype.toString = function () {
    return joinToString(until(0, this.elementsCount), ', ', this.serialName + '(', ')', void 0, void 0, PluginGeneratedSerialDescriptor$toString$lambda(this));
  };
  function PluginGeneratedSerialDescriptor$childSerializers$lambda(this$PluginGeneratedSerialDescriptor) {
    return function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this$PluginGeneratedSerialDescriptor.generatedSerializer_0) != null ? tmp$.childSerializers() : null) != null ? tmp$_0 : EMPTY_SERIALIZER_ARRAY;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$lambda(this$PluginGeneratedSerialDescriptor) {
    return function () {
      var tmp$, tmp$_0;
      var tmp$_1;
      if ((tmp$_0 = (tmp$ = this$PluginGeneratedSerialDescriptor.generatedSerializer_0) != null ? tmp$.typeParametersSerializers() : null) != null) {
        var destination = ArrayList_init(tmp$_0.length);
        var tmp$_2;
        for (tmp$_2 = 0; tmp$_2 !== tmp$_0.length; ++tmp$_2) {
          var item = tmp$_0[tmp$_2];
          destination.add_11rb$(item.descriptor);
        }
        tmp$_1 = destination;
      } else
        tmp$_1 = null;
      return compactArray(tmp$_1);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$lambda(this$PluginGeneratedSerialDescriptor) {
    return function () {
      return hashCodeImpl(this$PluginGeneratedSerialDescriptor, this$PluginGeneratedSerialDescriptor.typeParameterDescriptors_8be2vx$);
    };
  }
  PluginGeneratedSerialDescriptor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PluginGeneratedSerialDescriptor',
    interfaces: [CachedNames, SerialDescriptor]
  };
  var equalsImpl = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-js-legacy.kotlinx.serialization.internal.equalsImpl_n6kco9$', wrapFunction(function () {
    var equals = Kotlin.equals;
    return function (SD_0, isSD, $receiver, other, typeParamsAreEqual) {
      var tmp$;
      if ($receiver === other)
        return true;
      if (!isSD(other))
        return false;
      if (!equals($receiver.serialName, other.serialName))
        return false;
      if (!typeParamsAreEqual(other))
        return false;
      if ($receiver.elementsCount !== other.elementsCount)
        return false;
      tmp$ = $receiver.elementsCount;
      for (var index = 0; index < tmp$; index++) {
        if (!equals($receiver.getElementDescriptor_za3lpa$(index).serialName, other.getElementDescriptor_za3lpa$(index).serialName))
          return false;
        if (!equals($receiver.getElementDescriptor_za3lpa$(index).kind, other.getElementDescriptor_za3lpa$(index).kind))
          return false;
      }
      return true;
    };
  }));
  function hashCodeImpl($receiver, typeParams) {
    var result = hashCode($receiver.serialName);
    result = (31 * result | 0) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors($receiver);
    var tmp$;
    var accumulator = 1;
    tmp$ = elementDescriptors.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0 = 31 * accumulator | 0;
      var $receiver_0 = element.serialName;
      var tmp$_1;
      accumulator = tmp$_0 + ((tmp$_1 = $receiver_0 != null ? hashCode($receiver_0) : null) != null ? tmp$_1 : 0) | 0;
    }
    var namesHash = accumulator;
    var tmp$_2;
    var accumulator_0 = 1;
    tmp$_2 = elementDescriptors.iterator();
    while (tmp$_2.hasNext()) {
      var element_0 = tmp$_2.next();
      var tmp$_3 = 31 * accumulator_0 | 0;
      var $receiver_1 = element_0.kind;
      var tmp$_4;
      accumulator_0 = tmp$_3 + ((tmp$_4 = $receiver_1 != null ? hashCode($receiver_1) : null) != null ? tmp$_4 : 0) | 0;
    }
    var kindHash = accumulator_0;
    result = (31 * result | 0) + namesHash | 0;
    result = (31 * result | 0) + kindHash | 0;
    return result;
  }
  var EMPTY_SERIALIZER_ARRAY;
  function GeneratedSerializer() {
  }
  GeneratedSerializer.prototype.typeParametersSerializers = function () {
    return EMPTY_SERIALIZER_ARRAY;
  };
  GeneratedSerializer.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'GeneratedSerializer',
    interfaces: [KSerializer]
  };
  function SerializerFactory() {
  }
  SerializerFactory.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SerializerFactory',
    interfaces: []
  };
  var INITIAL_SIZE;
  function ByteArraySerializer_0() {
    ByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_5(kotlin_js_internal_ByteCompanionObject));
  }
  ByteArraySerializer_0.prototype.collectionSize_wikn$ = function ($receiver) {
    return $receiver.length;
  };
  ByteArraySerializer_0.prototype.toBuilder_wikn$ = function ($receiver) {
    return new ByteArrayBuilder($receiver);
  };
  ByteArraySerializer_0.prototype.empty = function () {
    return new Int8Array(0);
  };
  ByteArraySerializer_0.prototype.readElement_8pvye7$$default = function (decoder, index, builder, checkIndex) {
    builder.append_8e99oo$(decoder.decodeByteElement_szpzho$(this.descriptor, index));
  };
  ByteArraySerializer_0.prototype.writeContent_q3xt5$ = function (encoder, content, size) {
    for (var i = 0; i < size; i++)
      encoder.encodeByteElement_j0u8y3$(this.descriptor, i, content[i]);
  };
  ByteArraySerializer_0.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ByteArraySerializer',
    interfaces: [PrimitiveArraySerializer, KSerializer]
  };
  var ByteArraySerializer_instance = null;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance === null) {
      new ByteArraySerializer_0();
    }return ByteArraySerializer_instance;
  }
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_0 = bufferWithData;
    this.position_8vrcnd$_0 = bufferWithData.length;
    this.ensureCapacity_za3lpa$(10);
  }
  Object.defineProperty(ByteArrayBuilder.prototype, 'position', {
    configurable: true,
    get: function () {
      return this.position_8vrcnd$_0;
    },
    set: function (position) {
      this.position_8vrcnd$_0 = position;
    }
  });
  ByteArrayBuilder.prototype.ensureCapacity_za3lpa$$default = function (requiredCapacity) {
    if (this.buffer_0.length < requiredCapacity)
      this.buffer_0 = copyOf(this.buffer_0, coerceAtLeast(requiredCapacity, this.buffer_0.length * 2 | 0));
  };
  ByteArrayBuilder.prototype.append_8e99oo$ = function (c) {
    var tmp$;
    this.ensureCapacity_za3lpa$();
    this.buffer_0[tmp$ = this.position, this.position = tmp$ + 1 | 0, tmp$] = c;
  };
  ByteArrayBuilder.prototype.build = function () {
    return copyOf(this.buffer_0, this.position);
  };
  ByteArrayBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ByteArrayBuilder',
    interfaces: [PrimitiveArrayBuilder]
  };
  function ShortArraySerializer_0() {
    ShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_6(kotlin_js_internal_ShortCompanionObject));
  }
  ShortArraySerializer_0.prototype.collectionSize_wikn$ = function ($receiver) {
    return $receiver.length;
  };
  ShortArraySerializer_0.prototype.toBuilder_wikn$ = function ($receiver) {
    return new ShortArrayBuilder($receiver);
  };
  ShortArraySerializer_0.prototype.empty = function () {
    return new Int16Array(0);
  };
  ShortArraySerializer_0.prototype.readElement_8pvye7$$default = function (decoder, index, builder, checkIndex) {
    builder.append_o3ifnw$(decoder.decodeShortElement_szpzho$(this.descriptor, index));
  };
  ShortArraySerializer_0.prototype.writeContent_q3xt5$ = function (encoder, content, size) {
    for (var i = 0; i < size; i++)
      encoder.encodeShortElement_l83pjl$(this.descriptor, i, content[i]);
  };
  ShortArraySerializer_0.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ShortArraySerializer',
    interfaces: [PrimitiveArraySerializer, KSerializer]
  };
  var ShortArraySerializer_instance = null;
  function ShortArraySerializer_getInstance() {
    if (ShortArraySerializer_instance === null) {
      new ShortArraySerializer_0();
    }return ShortArraySerializer_instance;
  }
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_0 = bufferWithData;
    this.position_aswgsb$_0 = bufferWithData.length;
    this.ensureCapacity_za3lpa$(10);
  }
  Object.defineProperty(ShortArrayBuilder.prototype, 'position', {
    configurable: true,
    get: function () {
      return this.position_aswgsb$_0;
    },
    set: function (position) {
      this.position_aswgsb$_0 = position;
    }
  });
  ShortArrayBuilder.prototype.ensureCapacity_za3lpa$$default = function (requiredCapacity) {
    if (this.buffer_0.length < requiredCapacity)
      this.buffer_0 = copyOf_0(this.buffer_0, coerceAtLeast(requiredCapacity, this.buffer_0.length * 2 | 0));
  };
  ShortArrayBuilder.prototype.append_o3ifnw$ = function (c) {
    var tmp$;
    this.ensureCapacity_za3lpa$();
    this.buffer_0[tmp$ = this.position, this.position = tmp$ + 1 | 0, tmp$] = c;
  };
  ShortArrayBuilder.prototype.build = function () {
    return copyOf_0(this.buffer_0, this.position);
  };
  ShortArrayBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ShortArrayBuilder',
    interfaces: [PrimitiveArrayBuilder]
  };
  function IntArraySerializer_0() {
    IntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_7(kotlin_js_internal_IntCompanionObject));
  }
  IntArraySerializer_0.prototype.collectionSize_wikn$ = function ($receiver) {
    return $receiver.length;
  };
  IntArraySerializer_0.prototype.toBuilder_wikn$ = function ($receiver) {
    return new IntArrayBuilder($receiver);
  };
  IntArraySerializer_0.prototype.empty = function () {
    return new Int32Array(0);
  };
  IntArraySerializer_0.prototype.readElement_8pvye7$$default = function (decoder, index, builder, checkIndex) {
    builder.append_kcn2v3$(decoder.decodeIntElement_szpzho$(this.descriptor, index));
  };
  IntArraySerializer_0.prototype.writeContent_q3xt5$ = function (encoder, content, size) {
    for (var i = 0; i < size; i++)
      encoder.encodeIntElement_ptg7oe$(this.descriptor, i, content[i]);
  };
  IntArraySerializer_0.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'IntArraySerializer',
    interfaces: [PrimitiveArraySerializer, KSerializer]
  };
  var IntArraySerializer_instance = null;
  function IntArraySerializer_getInstance() {
    if (IntArraySerializer_instance === null) {
      new IntArraySerializer_0();
    }return IntArraySerializer_instance;
  }
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_0 = bufferWithData;
    this.position_9owhjc$_0 = bufferWithData.length;
    this.ensureCapacity_za3lpa$(10);
  }
  Object.defineProperty(IntArrayBuilder.prototype, 'position', {
    configurable: true,
    get: function () {
      return this.position_9owhjc$_0;
    },
    set: function (position) {
      this.position_9owhjc$_0 = position;
    }
  });
  IntArrayBuilder.prototype.ensureCapacity_za3lpa$$default = function (requiredCapacity) {
    if (this.buffer_0.length < requiredCapacity)
      this.buffer_0 = copyOf_1(this.buffer_0, coerceAtLeast(requiredCapacity, this.buffer_0.length * 2 | 0));
  };
  IntArrayBuilder.prototype.append_kcn2v3$ = function (c) {
    var tmp$;
    this.ensureCapacity_za3lpa$();
    this.buffer_0[tmp$ = this.position, this.position = tmp$ + 1 | 0, tmp$] = c;
  };
  IntArrayBuilder.prototype.build = function () {
    return copyOf_1(this.buffer_0, this.position);
  };
  IntArrayBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IntArrayBuilder',
    interfaces: [PrimitiveArrayBuilder]
  };
  function LongArraySerializer_0() {
    LongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_8(kotlin_js_internal_LongCompanionObject));
  }
  LongArraySerializer_0.prototype.collectionSize_wikn$ = function ($receiver) {
    return $receiver.length;
  };
  LongArraySerializer_0.prototype.toBuilder_wikn$ = function ($receiver) {
    return new LongArrayBuilder($receiver);
  };
  LongArraySerializer_0.prototype.empty = function () {
    return Kotlin.longArray(0);
  };
  LongArraySerializer_0.prototype.readElement_8pvye7$$default = function (decoder, index, builder, checkIndex) {
    builder.append_8e33dg$(decoder.decodeLongElement_szpzho$(this.descriptor, index));
  };
  LongArraySerializer_0.prototype.writeContent_q3xt5$ = function (encoder, content, size) {
    for (var i = 0; i < size; i++)
      encoder.encodeLongElement_j0o2mv$(this.descriptor, i, content[i]);
  };
  LongArraySerializer_0.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LongArraySerializer',
    interfaces: [PrimitiveArraySerializer, KSerializer]
  };
  var LongArraySerializer_instance = null;
  function LongArraySerializer_getInstance() {
    if (LongArraySerializer_instance === null) {
      new LongArraySerializer_0();
    }return LongArraySerializer_instance;
  }
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_0 = bufferWithData;
    this.position_kthxoj$_0 = bufferWithData.length;
    this.ensureCapacity_za3lpa$(10);
  }
  Object.defineProperty(LongArrayBuilder.prototype, 'position', {
    configurable: true,
    get: function () {
      return this.position_kthxoj$_0;
    },
    set: function (position) {
      this.position_kthxoj$_0 = position;
    }
  });
  LongArrayBuilder.prototype.ensureCapacity_za3lpa$$default = function (requiredCapacity) {
    if (this.buffer_0.length < requiredCapacity)
      this.buffer_0 = copyOf_2(this.buffer_0, coerceAtLeast(requiredCapacity, this.buffer_0.length * 2 | 0));
  };
  LongArrayBuilder.prototype.append_8e33dg$ = function (c) {
    var tmp$;
    this.ensureCapacity_za3lpa$();
    this.buffer_0[tmp$ = this.position, this.position = tmp$ + 1 | 0, tmp$] = c;
  };
  LongArrayBuilder.prototype.build = function () {
    return copyOf_2(this.buffer_0, this.position);
  };
  LongArrayBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LongArrayBuilder',
    interfaces: [PrimitiveArrayBuilder]
  };
  function FloatArraySerializer_0() {
    FloatArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_9(kotlin_js_internal_FloatCompanionObject));
  }
  FloatArraySerializer_0.prototype.collectionSize_wikn$ = function ($receiver) {
    return $receiver.length;
  };
  FloatArraySerializer_0.prototype.toBuilder_wikn$ = function ($receiver) {
    return new FloatArrayBuilder($receiver);
  };
  FloatArraySerializer_0.prototype.empty = function () {
    return new Float32Array(0);
  };
  FloatArraySerializer_0.prototype.readElement_8pvye7$$default = function (decoder, index, builder, checkIndex) {
    builder.append_nwfnho$(decoder.decodeFloatElement_szpzho$(this.descriptor, index));
  };
  FloatArraySerializer_0.prototype.writeContent_q3xt5$ = function (encoder, content, size) {
    for (var i = 0; i < size; i++)
      encoder.encodeFloatElement_lf6hpt$(this.descriptor, i, content[i]);
  };
  FloatArraySerializer_0.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FloatArraySerializer',
    interfaces: [PrimitiveArraySerializer, KSerializer]
  };
  var FloatArraySerializer_instance = null;
  function FloatArraySerializer_getInstance() {
    if (FloatArraySerializer_instance === null) {
      new FloatArraySerializer_0();
    }return FloatArraySerializer_instance;
  }
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_0 = bufferWithData;
    this.position_gfqw9x$_0 = bufferWithData.length;
    this.ensureCapacity_za3lpa$(10);
  }
  Object.defineProperty(FloatArrayBuilder.prototype, 'position', {
    configurable: true,
    get: function () {
      return this.position_gfqw9x$_0;
    },
    set: function (position) {
      this.position_gfqw9x$_0 = position;
    }
  });
  FloatArrayBuilder.prototype.ensureCapacity_za3lpa$$default = function (requiredCapacity) {
    if (this.buffer_0.length < requiredCapacity)
      this.buffer_0 = copyOf_3(this.buffer_0, coerceAtLeast(requiredCapacity, this.buffer_0.length * 2 | 0));
  };
  FloatArrayBuilder.prototype.append_nwfnho$ = function (c) {
    var tmp$;
    this.ensureCapacity_za3lpa$();
    this.buffer_0[tmp$ = this.position, this.position = tmp$ + 1 | 0, tmp$] = c;
  };
  FloatArrayBuilder.prototype.build = function () {
    return copyOf_3(this.buffer_0, this.position);
  };
  FloatArrayBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FloatArrayBuilder',
    interfaces: [PrimitiveArrayBuilder]
  };
  function DoubleArraySerializer_0() {
    DoubleArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_10(kotlin_js_internal_DoubleCompanionObject));
  }
  DoubleArraySerializer_0.prototype.collectionSize_wikn$ = function ($receiver) {
    return $receiver.length;
  };
  DoubleArraySerializer_0.prototype.toBuilder_wikn$ = function ($receiver) {
    return new DoubleArrayBuilder($receiver);
  };
  DoubleArraySerializer_0.prototype.empty = function () {
    return new Float64Array(0);
  };
  DoubleArraySerializer_0.prototype.readElement_8pvye7$$default = function (decoder, index, builder, checkIndex) {
    builder.append_tq0o01$(decoder.decodeDoubleElement_szpzho$(this.descriptor, index));
  };
  DoubleArraySerializer_0.prototype.writeContent_q3xt5$ = function (encoder, content, size) {
    for (var i = 0; i < size; i++)
      encoder.encodeDoubleElement_powrwi$(this.descriptor, i, content[i]);
  };
  DoubleArraySerializer_0.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DoubleArraySerializer',
    interfaces: [PrimitiveArraySerializer, KSerializer]
  };
  var DoubleArraySerializer_instance = null;
  function DoubleArraySerializer_getInstance() {
    if (DoubleArraySerializer_instance === null) {
      new DoubleArraySerializer_0();
    }return DoubleArraySerializer_instance;
  }
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_0 = bufferWithData;
    this.position_qka0uq$_0 = bufferWithData.length;
    this.ensureCapacity_za3lpa$(10);
  }
  Object.defineProperty(DoubleArrayBuilder.prototype, 'position', {
    configurable: true,
    get: function () {
      return this.position_qka0uq$_0;
    },
    set: function (position) {
      this.position_qka0uq$_0 = position;
    }
  });
  DoubleArrayBuilder.prototype.ensureCapacity_za3lpa$$default = function (requiredCapacity) {
    if (this.buffer_0.length < requiredCapacity)
      this.buffer_0 = copyOf_4(this.buffer_0, coerceAtLeast(requiredCapacity, this.buffer_0.length * 2 | 0));
  };
  DoubleArrayBuilder.prototype.append_tq0o01$ = function (c) {
    var tmp$;
    this.ensureCapacity_za3lpa$();
    this.buffer_0[tmp$ = this.position, this.position = tmp$ + 1 | 0, tmp$] = c;
  };
  DoubleArrayBuilder.prototype.build = function () {
    return copyOf_4(this.buffer_0, this.position);
  };
  DoubleArrayBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DoubleArrayBuilder',
    interfaces: [PrimitiveArrayBuilder]
  };
  function CharArraySerializer_0() {
    CharArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_4(kotlin_js_internal_CharCompanionObject));
  }
  CharArraySerializer_0.prototype.collectionSize_wikn$ = function ($receiver) {
    return $receiver.length;
  };
  CharArraySerializer_0.prototype.toBuilder_wikn$ = function ($receiver) {
    return new CharArrayBuilder($receiver);
  };
  CharArraySerializer_0.prototype.empty = function () {
    return Kotlin.charArray(0);
  };
  CharArraySerializer_0.prototype.readElement_8pvye7$$default = function (decoder, index, builder, checkIndex) {
    builder.append_8e8zqy$(unboxChar(decoder.decodeCharElement_szpzho$(this.descriptor, index)));
  };
  CharArraySerializer_0.prototype.writeContent_q3xt5$ = function (encoder, content, size) {
    for (var i = 0; i < size; i++)
      encoder.encodeCharElement_j0tz0d$(this.descriptor, i, content[i]);
  };
  CharArraySerializer_0.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CharArraySerializer',
    interfaces: [PrimitiveArraySerializer, KSerializer]
  };
  var CharArraySerializer_instance = null;
  function CharArraySerializer_getInstance() {
    if (CharArraySerializer_instance === null) {
      new CharArraySerializer_0();
    }return CharArraySerializer_instance;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_0 = bufferWithData;
    this.position_tpcwbb$_0 = bufferWithData.length;
    this.ensureCapacity_za3lpa$(10);
  }
  Object.defineProperty(CharArrayBuilder.prototype, 'position', {
    configurable: true,
    get: function () {
      return this.position_tpcwbb$_0;
    },
    set: function (position) {
      this.position_tpcwbb$_0 = position;
    }
  });
  CharArrayBuilder.prototype.ensureCapacity_za3lpa$$default = function (requiredCapacity) {
    if (this.buffer_0.length < requiredCapacity)
      this.buffer_0 = copyOf_5(this.buffer_0, coerceAtLeast(requiredCapacity, this.buffer_0.length * 2 | 0));
  };
  CharArrayBuilder.prototype.append_8e8zqy$ = function (c) {
    var tmp$;
    this.ensureCapacity_za3lpa$();
    this.buffer_0[tmp$ = this.position, this.position = tmp$ + 1 | 0, tmp$] = c;
  };
  CharArrayBuilder.prototype.build = function () {
    return copyOf_5(this.buffer_0, this.position);
  };
  CharArrayBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CharArrayBuilder',
    interfaces: [PrimitiveArrayBuilder]
  };
  function BooleanArraySerializer_0() {
    BooleanArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_11(kotlin_js_internal_BooleanCompanionObject));
  }
  BooleanArraySerializer_0.prototype.collectionSize_wikn$ = function ($receiver) {
    return $receiver.length;
  };
  BooleanArraySerializer_0.prototype.toBuilder_wikn$ = function ($receiver) {
    return new BooleanArrayBuilder($receiver);
  };
  BooleanArraySerializer_0.prototype.empty = function () {
    return Kotlin.booleanArray(0);
  };
  BooleanArraySerializer_0.prototype.readElement_8pvye7$$default = function (decoder, index, builder, checkIndex) {
    builder.append_vft4zs$(decoder.decodeBooleanElement_szpzho$(this.descriptor, index));
  };
  BooleanArraySerializer_0.prototype.writeContent_q3xt5$ = function (encoder, content, size) {
    for (var i = 0; i < size; i++)
      encoder.encodeBooleanElement_qh7jdn$(this.descriptor, i, content[i]);
  };
  BooleanArraySerializer_0.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BooleanArraySerializer',
    interfaces: [PrimitiveArraySerializer, KSerializer]
  };
  var BooleanArraySerializer_instance = null;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance === null) {
      new BooleanArraySerializer_0();
    }return BooleanArraySerializer_instance;
  }
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_0 = bufferWithData;
    this.position_fkn8lr$_0 = bufferWithData.length;
    this.ensureCapacity_za3lpa$(10);
  }
  Object.defineProperty(BooleanArrayBuilder.prototype, 'position', {
    configurable: true,
    get: function () {
      return this.position_fkn8lr$_0;
    },
    set: function (position) {
      this.position_fkn8lr$_0 = position;
    }
  });
  BooleanArrayBuilder.prototype.ensureCapacity_za3lpa$$default = function (requiredCapacity) {
    if (this.buffer_0.length < requiredCapacity)
      this.buffer_0 = copyOf_6(this.buffer_0, coerceAtLeast(requiredCapacity, this.buffer_0.length * 2 | 0));
  };
  BooleanArrayBuilder.prototype.append_vft4zs$ = function (c) {
    var tmp$;
    this.ensureCapacity_za3lpa$();
    this.buffer_0[tmp$ = this.position, this.position = tmp$ + 1 | 0, tmp$] = c;
  };
  BooleanArrayBuilder.prototype.build = function () {
    return copyOf_6(this.buffer_0, this.position);
  };
  BooleanArrayBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BooleanArrayBuilder',
    interfaces: [PrimitiveArrayBuilder]
  };
  var BUILTIN_SERIALIZERS;
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.serialName_h9gugr$_0 = serialName;
    this.kind_rqp61y$_0 = kind;
  }
  Object.defineProperty(PrimitiveSerialDescriptor_0.prototype, 'serialName', {
    get: function () {
      return this.serialName_h9gugr$_0;
    }
  });
  Object.defineProperty(PrimitiveSerialDescriptor_0.prototype, 'kind', {
    get: function () {
      return this.kind_rqp61y$_0;
    }
  });
  Object.defineProperty(PrimitiveSerialDescriptor_0.prototype, 'elementsCount', {
    configurable: true,
    get: function () {
      return 0;
    }
  });
  PrimitiveSerialDescriptor_0.prototype.getElementName_za3lpa$ = function (index) {
    return this.error_0();
  };
  PrimitiveSerialDescriptor_0.prototype.getElementIndex_61zpoe$ = function (name) {
    return this.error_0();
  };
  PrimitiveSerialDescriptor_0.prototype.isElementOptional_za3lpa$ = function (index) {
    return this.error_0();
  };
  PrimitiveSerialDescriptor_0.prototype.getElementDescriptor_za3lpa$ = function (index) {
    return this.error_0();
  };
  PrimitiveSerialDescriptor_0.prototype.getElementAnnotations_za3lpa$ = function (index) {
    return this.error_0();
  };
  PrimitiveSerialDescriptor_0.prototype.toString = function () {
    return 'PrimitiveDescriptor(' + this.serialName + ')';
  };
  PrimitiveSerialDescriptor_0.prototype.error_0 = function () {
    throw IllegalStateException_init('Primitive descriptor does not have elements');
  };
  PrimitiveSerialDescriptor_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PrimitiveSerialDescriptor',
    interfaces: [SerialDescriptor]
  };
  function PrimitiveDescriptorSafe(serialName, kind) {
    checkName(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function checkName(serialName) {
    var tmp$;
    var keys = BUILTIN_SERIALIZERS.keys;
    tmp$ = keys.iterator();
    while (tmp$.hasNext()) {
      var primitive = tmp$.next();
      var simpleName = capitalize(ensureNotNull(primitive.simpleName));
      var qualifiedName = 'kotlin.' + simpleName;
      if (equals_0(serialName, qualifiedName, true) || equals_0(serialName, simpleName, true)) {
        throw IllegalArgumentException_init(trimIndent('\n' + '                The name of serial descriptor should uniquely identify associated serializer.' + '\n' + '                For serial name ' + serialName + ' there already exist ' + capitalize(simpleName) + 'Serializer.' + '\n' + '                Please refer to SerialDescriptor documentation for additional information.' + '\n' + '            '));
      }}
  }
  function capitalize($receiver) {
    var tmp$;
    if ($receiver.length > 0) {
      var it = toBoxedChar($receiver.charCodeAt(0));
      tmp$ = (isLowerCase(unboxChar(it)) ? titlecase(unboxChar(it)) : String.fromCharCode(unboxChar(it))).toString() + $receiver.substring(1);
    } else
      tmp$ = $receiver;
    return tmp$;
  }
  function builtinSerializerOrNull($receiver) {
    var tmp$;
    return (tmp$ = BUILTIN_SERIALIZERS.get_11rb$($receiver)) == null || Kotlin.isType(tmp$, KSerializer) ? tmp$ : throwCCE();
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.$delegate_t0wm8i$_0 = new ObjectSerializer('kotlin.Unit', Unit);
  }
  Object.defineProperty(UnitSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.$delegate_t0wm8i$_0.descriptor;
    }
  });
  UnitSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return this.$delegate_t0wm8i$_0.deserialize_bq71mq$(decoder);
  };
  UnitSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    return this.$delegate_t0wm8i$_0.serialize_55azsf$(encoder, value);
  };
  UnitSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'UnitSerializer',
    interfaces: [KSerializer]
  };
  var UnitSerializer_instance = null;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance === null) {
      new UnitSerializer();
    }return UnitSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.descriptor_vdtvaz$_0 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', PrimitiveKind$BOOLEAN_getInstance());
  }
  Object.defineProperty(BooleanSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_vdtvaz$_0;
    }
  });
  BooleanSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    encoder.encodeBoolean_6taknv$(value);
  };
  BooleanSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return decoder.decodeBoolean();
  };
  BooleanSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BooleanSerializer',
    interfaces: [KSerializer]
  };
  var BooleanSerializer_instance = null;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance === null) {
      new BooleanSerializer();
    }return BooleanSerializer_instance;
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.descriptor_f6vlf1$_0 = new PrimitiveSerialDescriptor_0('kotlin.Byte', PrimitiveKind$BYTE_getInstance());
  }
  Object.defineProperty(ByteSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_f6vlf1$_0;
    }
  });
  ByteSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    encoder.encodeByte_s8j3t7$(value);
  };
  ByteSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return decoder.decodeByte();
  };
  ByteSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ByteSerializer',
    interfaces: [KSerializer]
  };
  var ByteSerializer_instance = null;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance === null) {
      new ByteSerializer();
    }return ByteSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.descriptor_yvjeup$_0 = new PrimitiveSerialDescriptor_0('kotlin.Short', PrimitiveKind$SHORT_getInstance());
  }
  Object.defineProperty(ShortSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_yvjeup$_0;
    }
  });
  ShortSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    encoder.encodeShort_mq22fl$(value);
  };
  ShortSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return decoder.decodeShort();
  };
  ShortSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ShortSerializer',
    interfaces: [KSerializer]
  };
  var ShortSerializer_instance = null;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance === null) {
      new ShortSerializer();
    }return ShortSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.descriptor_xrjflq$_0 = new PrimitiveSerialDescriptor_0('kotlin.Int', PrimitiveKind$INT_getInstance());
  }
  Object.defineProperty(IntSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_xrjflq$_0;
    }
  });
  IntSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    encoder.encodeInt_za3lpa$(value);
  };
  IntSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return decoder.decodeInt();
  };
  IntSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'IntSerializer',
    interfaces: [KSerializer]
  };
  var IntSerializer_instance = null;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance === null) {
      new IntSerializer();
    }return IntSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.descriptor_q4z687$_0 = new PrimitiveSerialDescriptor_0('kotlin.Long', PrimitiveKind$LONG_getInstance());
  }
  Object.defineProperty(LongSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_q4z687$_0;
    }
  });
  LongSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    encoder.encodeLong_s8cxhz$(value);
  };
  LongSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return decoder.decodeLong();
  };
  LongSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LongSerializer',
    interfaces: [KSerializer]
  };
  var LongSerializer_instance = null;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance === null) {
      new LongSerializer();
    }return LongSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.descriptor_7mw1sh$_0 = new PrimitiveSerialDescriptor_0('kotlin.Float', PrimitiveKind$FLOAT_getInstance());
  }
  Object.defineProperty(FloatSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_7mw1sh$_0;
    }
  });
  FloatSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    encoder.encodeFloat_mx4ult$(value);
  };
  FloatSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return decoder.decodeFloat();
  };
  FloatSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FloatSerializer',
    interfaces: [KSerializer]
  };
  var FloatSerializer_instance = null;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance === null) {
      new FloatSerializer();
    }return FloatSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.descriptor_2hn2sc$_0 = new PrimitiveSerialDescriptor_0('kotlin.Double', PrimitiveKind$DOUBLE_getInstance());
  }
  Object.defineProperty(DoubleSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_2hn2sc$_0;
    }
  });
  DoubleSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    encoder.encodeDouble_14dthe$(value);
  };
  DoubleSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return decoder.decodeDouble();
  };
  DoubleSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DoubleSerializer',
    interfaces: [KSerializer]
  };
  var DoubleSerializer_instance = null;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance === null) {
      new DoubleSerializer();
    }return DoubleSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.descriptor_5mpy8x$_0 = new PrimitiveSerialDescriptor_0('kotlin.Char', PrimitiveKind$CHAR_getInstance());
  }
  Object.defineProperty(CharSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_5mpy8x$_0;
    }
  });
  CharSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    encoder.encodeChar_s8itvh$(value);
  };
  CharSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return decoder.decodeChar();
  };
  CharSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CharSerializer',
    interfaces: [KSerializer]
  };
  var CharSerializer_instance = null;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance === null) {
      new CharSerializer();
    }return CharSerializer_instance;
  }
  function StringSerializer() {
    StringSerializer_instance = this;
    this.descriptor_sum718$_0 = new PrimitiveSerialDescriptor_0('kotlin.String', PrimitiveKind$STRING_getInstance());
  }
  Object.defineProperty(StringSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_sum718$_0;
    }
  });
  StringSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    encoder.encodeString_61zpoe$(value);
  };
  StringSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return decoder.decodeString();
  };
  StringSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'StringSerializer',
    interfaces: [KSerializer]
  };
  var StringSerializer_instance = null;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance === null) {
      new StringSerializer();
    }return StringSerializer_instance;
  }
  function SerializationConstructorMarker() {
  }
  SerializationConstructorMarker.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SerializationConstructorMarker',
    interfaces: []
  };
  function TaggedEncoder() {
    this.tagStack_cfsfm$_0 = ArrayList_init_0();
  }
  Object.defineProperty(TaggedEncoder.prototype, 'serializersModule', {
    configurable: true,
    get: function () {
      return EmptySerializersModule;
    }
  });
  TaggedEncoder.prototype.encodeTaggedValue_dpg7wc$ = function (tag, value) {
    throw SerializationException_init_0('Non-serializable ' + Kotlin.getKClassFromExpression(value) + ' is not supported by ' + Kotlin.getKClassFromExpression(this) + ' encoder');
  };
  TaggedEncoder.prototype.encodeTaggedNull_11rb$ = function (tag) {
    throw SerializationException_init_0('null is not supported');
  };
  TaggedEncoder.prototype.encodeTaggedInt_dpg1yx$ = function (tag, value) {
    this.encodeTaggedValue_dpg7wc$(tag, value);
  };
  TaggedEncoder.prototype.encodeTaggedByte_19qe40$ = function (tag, value) {
    this.encodeTaggedValue_dpg7wc$(tag, value);
  };
  TaggedEncoder.prototype.encodeTaggedShort_veccj0$ = function (tag, value) {
    this.encodeTaggedValue_dpg7wc$(tag, value);
  };
  TaggedEncoder.prototype.encodeTaggedLong_19wkf8$ = function (tag, value) {
    this.encodeTaggedValue_dpg7wc$(tag, value);
  };
  TaggedEncoder.prototype.encodeTaggedFloat_vlf4p8$ = function (tag, value) {
    this.encodeTaggedValue_dpg7wc$(tag, value);
  };
  TaggedEncoder.prototype.encodeTaggedDouble_e37ph5$ = function (tag, value) {
    this.encodeTaggedValue_dpg7wc$(tag, value);
  };
  TaggedEncoder.prototype.encodeTaggedBoolean_iuyhfk$ = function (tag, value) {
    this.encodeTaggedValue_dpg7wc$(tag, value);
  };
  TaggedEncoder.prototype.encodeTaggedChar_19qo1q$ = function (tag, value) {
    this.encodeTaggedValue_dpg7wc$(tag, toBoxedChar(value));
  };
  TaggedEncoder.prototype.encodeTaggedString_l9l8mx$ = function (tag, value) {
    this.encodeTaggedValue_dpg7wc$(tag, value);
  };
  TaggedEncoder.prototype.encodeTaggedEnum_4xdzqf$ = function (tag, enumDescriptor, ordinal) {
    this.encodeTaggedValue_dpg7wc$(tag, ordinal);
  };
  TaggedEncoder.prototype.encodeTaggedInline_gaombr$ = function (tag, inlineDescriptor) {
    this.pushTag_11rb$(tag);
    return this;
  };
  TaggedEncoder.prototype.encodeInline_24f42q$ = function (inlineDescriptor) {
    return this.encodeTaggedInline_gaombr$(this.popTag(), inlineDescriptor);
  };
  TaggedEncoder.prototype.encodeElement_qp90hq$_0 = function (desc, index) {
    var tag = this.getTag_av9bu7$(desc, index);
    this.pushTag_11rb$(tag);
    return true;
  };
  TaggedEncoder.prototype.encodeNotNullMark = function () {
  };
  TaggedEncoder.prototype.encodeNull = function () {
    this.encodeTaggedNull_11rb$(this.popTag());
  };
  TaggedEncoder.prototype.encodeBoolean_6taknv$ = function (value) {
    this.encodeTaggedBoolean_iuyhfk$(this.popTag(), value);
  };
  TaggedEncoder.prototype.encodeByte_s8j3t7$ = function (value) {
    this.encodeTaggedByte_19qe40$(this.popTag(), value);
  };
  TaggedEncoder.prototype.encodeShort_mq22fl$ = function (value) {
    this.encodeTaggedShort_veccj0$(this.popTag(), value);
  };
  TaggedEncoder.prototype.encodeInt_za3lpa$ = function (value) {
    this.encodeTaggedInt_dpg1yx$(this.popTag(), value);
  };
  TaggedEncoder.prototype.encodeLong_s8cxhz$ = function (value) {
    this.encodeTaggedLong_19wkf8$(this.popTag(), value);
  };
  TaggedEncoder.prototype.encodeFloat_mx4ult$ = function (value) {
    this.encodeTaggedFloat_vlf4p8$(this.popTag(), value);
  };
  TaggedEncoder.prototype.encodeDouble_14dthe$ = function (value) {
    this.encodeTaggedDouble_e37ph5$(this.popTag(), value);
  };
  TaggedEncoder.prototype.encodeChar_s8itvh$ = function (value) {
    this.encodeTaggedChar_19qo1q$(this.popTag(), value);
  };
  TaggedEncoder.prototype.encodeString_61zpoe$ = function (value) {
    this.encodeTaggedString_l9l8mx$(this.popTag(), value);
  };
  TaggedEncoder.prototype.encodeEnum_szpzho$ = function (enumDescriptor, index) {
    this.encodeTaggedEnum_4xdzqf$(this.popTag(), enumDescriptor, index);
  };
  TaggedEncoder.prototype.beginStructure_24f42q$ = function (descriptor) {
    return this;
  };
  TaggedEncoder.prototype.endStructure_24f42q$ = function (descriptor) {
    if (!this.tagStack_cfsfm$_0.isEmpty()) {
      this.popTag();
    }this.endEncode_24f42q$(descriptor);
  };
  TaggedEncoder.prototype.endEncode_24f42q$ = function (descriptor) {
  };
  TaggedEncoder.prototype.encodeBooleanElement_qh7jdn$ = function (descriptor, index, value) {
    this.encodeTaggedBoolean_iuyhfk$(this.getTag_av9bu7$(descriptor, index), value);
  };
  TaggedEncoder.prototype.encodeByteElement_j0u8y3$ = function (descriptor, index, value) {
    this.encodeTaggedByte_19qe40$(this.getTag_av9bu7$(descriptor, index), value);
  };
  TaggedEncoder.prototype.encodeShortElement_l83pjl$ = function (descriptor, index, value) {
    this.encodeTaggedShort_veccj0$(this.getTag_av9bu7$(descriptor, index), value);
  };
  TaggedEncoder.prototype.encodeIntElement_ptg7oe$ = function (descriptor, index, value) {
    this.encodeTaggedInt_dpg1yx$(this.getTag_av9bu7$(descriptor, index), value);
  };
  TaggedEncoder.prototype.encodeLongElement_j0o2mv$ = function (descriptor, index, value) {
    this.encodeTaggedLong_19wkf8$(this.getTag_av9bu7$(descriptor, index), value);
  };
  TaggedEncoder.prototype.encodeFloatElement_lf6hpt$ = function (descriptor, index, value) {
    this.encodeTaggedFloat_vlf4p8$(this.getTag_av9bu7$(descriptor, index), value);
  };
  TaggedEncoder.prototype.encodeDoubleElement_powrwi$ = function (descriptor, index, value) {
    this.encodeTaggedDouble_e37ph5$(this.getTag_av9bu7$(descriptor, index), value);
  };
  TaggedEncoder.prototype.encodeCharElement_j0tz0d$ = function (descriptor, index, value) {
    this.encodeTaggedChar_19qo1q$(this.getTag_av9bu7$(descriptor, index), value);
  };
  TaggedEncoder.prototype.encodeStringElement_iij8qq$ = function (descriptor, index, value) {
    this.encodeTaggedString_l9l8mx$(this.getTag_av9bu7$(descriptor, index), value);
  };
  TaggedEncoder.prototype.encodeInlineElement_szpzho$ = function (descriptor, index) {
    return this.encodeTaggedInline_gaombr$(this.getTag_av9bu7$(descriptor, index), descriptor.getElementDescriptor_za3lpa$(index));
  };
  TaggedEncoder.prototype.encodeSerializableElement_r4qlx7$ = function (descriptor, index, serializer, value) {
    if (this.encodeElement_qp90hq$_0(descriptor, index))
      this.encodeSerializableValue_tf03ej$(serializer, value);
  };
  TaggedEncoder.prototype.encodeNullableSerializableElement_qw92s8$ = function (descriptor, index, serializer, value) {
    if (this.encodeElement_qp90hq$_0(descriptor, index))
      this.encodeNullableSerializableValue_f4686g$(serializer, value);
  };
  Object.defineProperty(TaggedEncoder.prototype, 'currentTag', {
    configurable: true,
    get: function () {
      return last(this.tagStack_cfsfm$_0);
    }
  });
  Object.defineProperty(TaggedEncoder.prototype, 'currentTagOrNull', {
    configurable: true,
    get: function () {
      return lastOrNull(this.tagStack_cfsfm$_0);
    }
  });
  TaggedEncoder.prototype.pushTag_11rb$ = function (name) {
    this.tagStack_cfsfm$_0.add_11rb$(name);
  };
  TaggedEncoder.prototype.popTag = function () {
    if (!this.tagStack_cfsfm$_0.isEmpty())
      return this.tagStack_cfsfm$_0.removeAt_za3lpa$(get_lastIndex_0(this.tagStack_cfsfm$_0));
    else
      throw SerializationException_init_0('No tag in stack for requested element');
  };
  TaggedEncoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TaggedEncoder',
    interfaces: [CompositeEncoder, Encoder]
  };
  function NamedValueEncoder() {
    TaggedEncoder.call(this);
  }
  NamedValueEncoder.prototype.getTag_av9bu7$ = function ($receiver, index) {
    return this.nested_61zpoe$(this.elementName_szpzho$($receiver, index));
  };
  NamedValueEncoder.prototype.nested_61zpoe$ = function (nestedName) {
    var tmp$;
    return this.composeName_puj7f4$((tmp$ = this.currentTagOrNull) != null ? tmp$ : '', nestedName);
  };
  NamedValueEncoder.prototype.elementName_szpzho$ = function (descriptor, index) {
    return descriptor.getElementName_za3lpa$(index);
  };
  NamedValueEncoder.prototype.composeName_puj7f4$ = function (parentName, childName) {
    return parentName.length === 0 ? childName : parentName + '.' + childName;
  };
  NamedValueEncoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NamedValueEncoder',
    interfaces: [TaggedEncoder]
  };
  function TaggedDecoder() {
    this.tagStack_h2rpra$_0 = ArrayList_init_0();
    this.flag_kguhq4$_0 = false;
  }
  Object.defineProperty(TaggedDecoder.prototype, 'serializersModule', {
    configurable: true,
    get: function () {
      return EmptySerializersModule;
    }
  });
  TaggedDecoder.prototype.decodeTaggedValue_11rb$ = function (tag) {
    throw SerializationException_init_0(Kotlin.getKClassFromExpression(this).toString() + " can't retrieve untyped values");
  };
  TaggedDecoder.prototype.decodeTaggedNotNullMark_11rb$ = function (tag) {
    return true;
  };
  TaggedDecoder.prototype.decodeTaggedNull_11rb$ = function (tag) {
    return null;
  };
  TaggedDecoder.prototype.decodeTaggedBoolean_11rb$ = function (tag) {
    var tmp$;
    return typeof (tmp$ = this.decodeTaggedValue_11rb$(tag)) === 'boolean' ? tmp$ : throwCCE();
  };
  TaggedDecoder.prototype.decodeTaggedByte_11rb$ = function (tag) {
    var tmp$;
    return typeof (tmp$ = this.decodeTaggedValue_11rb$(tag)) === 'number' ? tmp$ : throwCCE();
  };
  TaggedDecoder.prototype.decodeTaggedShort_11rb$ = function (tag) {
    var tmp$;
    return typeof (tmp$ = this.decodeTaggedValue_11rb$(tag)) === 'number' ? tmp$ : throwCCE();
  };
  TaggedDecoder.prototype.decodeTaggedInt_11rb$ = function (tag) {
    var tmp$;
    return typeof (tmp$ = this.decodeTaggedValue_11rb$(tag)) === 'number' ? tmp$ : throwCCE();
  };
  TaggedDecoder.prototype.decodeTaggedLong_11rb$ = function (tag) {
    var tmp$;
    return Kotlin.isType(tmp$ = this.decodeTaggedValue_11rb$(tag), Kotlin.Long) ? tmp$ : throwCCE();
  };
  TaggedDecoder.prototype.decodeTaggedFloat_11rb$ = function (tag) {
    var tmp$;
    return typeof (tmp$ = this.decodeTaggedValue_11rb$(tag)) === 'number' ? tmp$ : throwCCE();
  };
  TaggedDecoder.prototype.decodeTaggedDouble_11rb$ = function (tag) {
    var tmp$;
    return typeof (tmp$ = this.decodeTaggedValue_11rb$(tag)) === 'number' ? tmp$ : throwCCE();
  };
  TaggedDecoder.prototype.decodeTaggedChar_11rb$ = function (tag) {
    var tmp$;
    return Kotlin.isChar(tmp$ = this.decodeTaggedValue_11rb$(tag)) ? tmp$ : throwCCE();
  };
  TaggedDecoder.prototype.decodeTaggedString_11rb$ = function (tag) {
    var tmp$;
    return typeof (tmp$ = this.decodeTaggedValue_11rb$(tag)) === 'string' ? tmp$ : throwCCE();
  };
  TaggedDecoder.prototype.decodeTaggedEnum_gaombr$ = function (tag, enumDescriptor) {
    var tmp$;
    return typeof (tmp$ = this.decodeTaggedValue_11rb$(tag)) === 'number' ? tmp$ : throwCCE();
  };
  TaggedDecoder.prototype.decodeTaggedInline_gaombr$ = function (tag, inlineDescriptor) {
    this.pushTag_11rb$(tag);
    return this;
  };
  TaggedDecoder.prototype.decodeSerializableValue_19c8k5$ = function (deserializer, previousValue) {
    return this.decodeSerializableValue_w63s0f$(deserializer);
  };
  TaggedDecoder.prototype.decodeInline_24f42q$ = function (inlineDescriptor) {
    return this.decodeTaggedInline_gaombr$(this.popTag(), inlineDescriptor);
  };
  TaggedDecoder.prototype.decodeNotNullMark = function () {
    var tmp$;
    tmp$ = this.currentTagOrNull;
    if (tmp$ == null) {
      return false;
    }var currentTag = tmp$;
    return this.decodeTaggedNotNullMark_11rb$(currentTag);
  };
  TaggedDecoder.prototype.decodeNull = function () {
    return null;
  };
  TaggedDecoder.prototype.decodeBoolean = function () {
    return this.decodeTaggedBoolean_11rb$(this.popTag());
  };
  TaggedDecoder.prototype.decodeByte = function () {
    return this.decodeTaggedByte_11rb$(this.popTag());
  };
  TaggedDecoder.prototype.decodeShort = function () {
    return this.decodeTaggedShort_11rb$(this.popTag());
  };
  TaggedDecoder.prototype.decodeInt = function () {
    return this.decodeTaggedInt_11rb$(this.popTag());
  };
  TaggedDecoder.prototype.decodeLong = function () {
    return this.decodeTaggedLong_11rb$(this.popTag());
  };
  TaggedDecoder.prototype.decodeFloat = function () {
    return this.decodeTaggedFloat_11rb$(this.popTag());
  };
  TaggedDecoder.prototype.decodeDouble = function () {
    return this.decodeTaggedDouble_11rb$(this.popTag());
  };
  TaggedDecoder.prototype.decodeChar = function () {
    return this.decodeTaggedChar_11rb$(this.popTag());
  };
  TaggedDecoder.prototype.decodeString = function () {
    return this.decodeTaggedString_11rb$(this.popTag());
  };
  TaggedDecoder.prototype.decodeEnum_24f42q$ = function (enumDescriptor) {
    return this.decodeTaggedEnum_gaombr$(this.popTag(), enumDescriptor);
  };
  TaggedDecoder.prototype.beginStructure_24f42q$ = function (descriptor) {
    return this;
  };
  TaggedDecoder.prototype.endStructure_24f42q$ = function (descriptor) {
  };
  TaggedDecoder.prototype.decodeBooleanElement_szpzho$ = function (descriptor, index) {
    return this.decodeTaggedBoolean_11rb$(this.getTag_av9bu7$(descriptor, index));
  };
  TaggedDecoder.prototype.decodeByteElement_szpzho$ = function (descriptor, index) {
    return this.decodeTaggedByte_11rb$(this.getTag_av9bu7$(descriptor, index));
  };
  TaggedDecoder.prototype.decodeShortElement_szpzho$ = function (descriptor, index) {
    return this.decodeTaggedShort_11rb$(this.getTag_av9bu7$(descriptor, index));
  };
  TaggedDecoder.prototype.decodeIntElement_szpzho$ = function (descriptor, index) {
    return this.decodeTaggedInt_11rb$(this.getTag_av9bu7$(descriptor, index));
  };
  TaggedDecoder.prototype.decodeLongElement_szpzho$ = function (descriptor, index) {
    return this.decodeTaggedLong_11rb$(this.getTag_av9bu7$(descriptor, index));
  };
  TaggedDecoder.prototype.decodeFloatElement_szpzho$ = function (descriptor, index) {
    return this.decodeTaggedFloat_11rb$(this.getTag_av9bu7$(descriptor, index));
  };
  TaggedDecoder.prototype.decodeDoubleElement_szpzho$ = function (descriptor, index) {
    return this.decodeTaggedDouble_11rb$(this.getTag_av9bu7$(descriptor, index));
  };
  TaggedDecoder.prototype.decodeCharElement_szpzho$ = function (descriptor, index) {
    return this.decodeTaggedChar_11rb$(this.getTag_av9bu7$(descriptor, index));
  };
  TaggedDecoder.prototype.decodeStringElement_szpzho$ = function (descriptor, index) {
    return this.decodeTaggedString_11rb$(this.getTag_av9bu7$(descriptor, index));
  };
  TaggedDecoder.prototype.decodeInlineElement_szpzho$ = function (descriptor, index) {
    return this.decodeTaggedInline_gaombr$(this.getTag_av9bu7$(descriptor, index), descriptor.getElementDescriptor_za3lpa$(index));
  };
  function TaggedDecoder$decodeSerializableElement$lambda(closure$deserializer, closure$previousValue, this$TaggedDecoder) {
    return function () {
      return this$TaggedDecoder.decodeSerializableValue_19c8k5$(closure$deserializer, closure$previousValue);
    };
  }
  TaggedDecoder.prototype.decodeSerializableElement_12e8id$$default = function (descriptor, index, deserializer, previousValue) {
    return this.tagBlock_lngyui$_0(this.getTag_av9bu7$(descriptor, index), TaggedDecoder$decodeSerializableElement$lambda(deserializer, previousValue, this));
  };
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$TaggedDecoder, closure$deserializer, closure$previousValue) {
    return function () {
      return this$TaggedDecoder.decodeNotNullMark() ? this$TaggedDecoder.decodeSerializableValue_19c8k5$(closure$deserializer, closure$previousValue) : this$TaggedDecoder.decodeNull();
    };
  }
  TaggedDecoder.prototype.decodeNullableSerializableElement_8viuyw$$default = function (descriptor, index, deserializer, previousValue) {
    return this.tagBlock_lngyui$_0(this.getTag_av9bu7$(descriptor, index), TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  TaggedDecoder.prototype.tagBlock_lngyui$_0 = function (tag, block) {
    this.pushTag_11rb$(tag);
    var r = block();
    if (!this.flag_kguhq4$_0) {
      this.popTag();
    }this.flag_kguhq4$_0 = false;
    return r;
  };
  Object.defineProperty(TaggedDecoder.prototype, 'currentTag', {
    configurable: true,
    get: function () {
      return last(this.tagStack_h2rpra$_0);
    }
  });
  Object.defineProperty(TaggedDecoder.prototype, 'currentTagOrNull', {
    configurable: true,
    get: function () {
      return lastOrNull(this.tagStack_h2rpra$_0);
    }
  });
  TaggedDecoder.prototype.pushTag_11rb$ = function (name) {
    this.tagStack_h2rpra$_0.add_11rb$(name);
  };
  TaggedDecoder.prototype.copyTagsTo_lgvuxj$ = function (other) {
    other.tagStack_h2rpra$_0.addAll_brywnq$(this.tagStack_h2rpra$_0);
  };
  TaggedDecoder.prototype.popTag = function () {
    var r = this.tagStack_h2rpra$_0.removeAt_za3lpa$(get_lastIndex_0(this.tagStack_h2rpra$_0));
    this.flag_kguhq4$_0 = true;
    return r;
  };
  TaggedDecoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TaggedDecoder',
    interfaces: [CompositeDecoder, Decoder]
  };
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  NamedValueDecoder.prototype.getTag_av9bu7$ = function ($receiver, index) {
    return this.nested_61zpoe$(this.elementName_szpzho$($receiver, index));
  };
  NamedValueDecoder.prototype.nested_61zpoe$ = function (nestedName) {
    var tmp$;
    return this.composeName_puj7f4$((tmp$ = this.currentTagOrNull) != null ? tmp$ : '', nestedName);
  };
  NamedValueDecoder.prototype.elementName_szpzho$ = function (desc, index) {
    return desc.getElementName_za3lpa$(index);
  };
  NamedValueDecoder.prototype.composeName_puj7f4$ = function (parentName, childName) {
    return parentName.length === 0 ? childName : parentName + '.' + childName;
  };
  NamedValueDecoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NamedValueDecoder',
    interfaces: [TaggedDecoder]
  };
  var NULL;
  var deprecationMessage;
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.keySerializer_0 = keySerializer;
    this.valueSerializer_0 = valueSerializer;
  }
  KeyValueSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var structuredEncoder = encoder.beginStructure_24f42q$(this.descriptor);
    structuredEncoder.encodeSerializableElement_r4qlx7$(this.descriptor, 0, this.keySerializer_0, this.get_key_wili$(value));
    structuredEncoder.encodeSerializableElement_r4qlx7$(this.descriptor, 1, this.valueSerializer_0, this.get_value_wili$(value));
    structuredEncoder.endStructure_24f42q$(this.descriptor);
  };
  KeyValueSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var tmp$, tmp$_0;
    var composite = decoder.beginStructure_24f42q$(this.descriptor);
    if (composite.decodeSequentially()) {
      var key = composite.decodeSerializableElement_12e8id$(this.descriptor, 0, this.keySerializer_0);
      var value = composite.decodeSerializableElement_12e8id$(this.descriptor, 1, this.valueSerializer_0);
      return this.toResult_xwzc9p$(key, value);
    }var key_0 = NULL;
    var value_0 = NULL;
    mainLoop: while (true) {
      var idx = composite.decodeElementIndex_24f42q$(this.descriptor);
      switch (idx) {
        case -1:
          break mainLoop;
        case 0:
          key_0 = composite.decodeSerializableElement_12e8id$(this.descriptor, 0, this.keySerializer_0);
          break;
        case 1:
          value_0 = composite.decodeSerializableElement_12e8id$(this.descriptor, 1, this.valueSerializer_0);
          break;
        default:throw SerializationException_init_0('Invalid index: ' + idx);
      }
    }
    composite.endStructure_24f42q$(this.descriptor);
    if (key_0 === NULL)
      throw SerializationException_init_0("Element 'key' is missing");
    if (value_0 === NULL)
      throw SerializationException_init_0("Element 'value' is missing");
    return this.toResult_xwzc9p$((tmp$ = key_0) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE(), (tmp$_0 = value_0) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE());
  };
  KeyValueSerializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KeyValueSerializer',
    interfaces: [KSerializer]
  };
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    this.descriptor_cnmk75$_0 = buildSerialDescriptor('kotlin.collections.Map.Entry', StructureKind$MAP_getInstance(), [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  function MapEntrySerializer$MapEntry(key, value) {
    this.key_7uv6mv$_0 = key;
    this.value_gjenjd$_0 = value;
  }
  Object.defineProperty(MapEntrySerializer$MapEntry.prototype, 'key', {
    get: function () {
      return this.key_7uv6mv$_0;
    }
  });
  Object.defineProperty(MapEntrySerializer$MapEntry.prototype, 'value', {
    get: function () {
      return this.value_gjenjd$_0;
    }
  });
  MapEntrySerializer$MapEntry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MapEntry',
    interfaces: [Map$Entry]
  };
  MapEntrySerializer$MapEntry.prototype.component1 = function () {
    return this.key;
  };
  MapEntrySerializer$MapEntry.prototype.component2 = function () {
    return this.value;
  };
  MapEntrySerializer$MapEntry.prototype.copy_xwzc9p$ = function (key, value) {
    return new MapEntrySerializer$MapEntry(key === void 0 ? this.key : key, value === void 0 ? this.value : value);
  };
  MapEntrySerializer$MapEntry.prototype.toString = function () {
    return 'MapEntry(key=' + Kotlin.toString(this.key) + (', value=' + Kotlin.toString(this.value)) + ')';
  };
  MapEntrySerializer$MapEntry.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.key) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  MapEntrySerializer$MapEntry.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.key, other.key) && Kotlin.equals(this.value, other.value)))));
  };
  Object.defineProperty(MapEntrySerializer_0.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_cnmk75$_0;
    }
  });
  MapEntrySerializer_0.prototype.get_key_wili$ = function ($receiver) {
    return $receiver.key;
  };
  MapEntrySerializer_0.prototype.get_value_wili$ = function ($receiver) {
    return $receiver.value;
  };
  MapEntrySerializer_0.prototype.toResult_xwzc9p$ = function (key, value) {
    return new MapEntrySerializer$MapEntry(key, value);
  };
  function MapEntrySerializer$descriptor$lambda(closure$keySerializer, closure$valueSerializer) {
    return function ($receiver) {
      $receiver.element_vxrguq$('key', closure$keySerializer.descriptor);
      $receiver.element_vxrguq$('value', closure$valueSerializer.descriptor);
      return Unit;
    };
  }
  MapEntrySerializer_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MapEntrySerializer',
    interfaces: [KeyValueSerializer]
  };
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    this.descriptor_utc4rp$_0 = buildClassSerialDescriptor('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  Object.defineProperty(PairSerializer_0.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_utc4rp$_0;
    }
  });
  PairSerializer_0.prototype.get_key_wili$ = function ($receiver) {
    return $receiver.first;
  };
  PairSerializer_0.prototype.get_value_wili$ = function ($receiver) {
    return $receiver.second;
  };
  PairSerializer_0.prototype.toResult_xwzc9p$ = function (key, value) {
    return to(key, value);
  };
  function PairSerializer$descriptor$lambda(closure$keySerializer, closure$valueSerializer) {
    return function ($receiver) {
      $receiver.element_vxrguq$('first', closure$keySerializer.descriptor);
      $receiver.element_vxrguq$('second', closure$valueSerializer.descriptor);
      return Unit;
    };
  }
  PairSerializer_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PairSerializer',
    interfaces: [KeyValueSerializer]
  };
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.aSerializer_0 = aSerializer;
    this.bSerializer_0 = bSerializer;
    this.cSerializer_0 = cSerializer;
    this.descriptor_73a6vr$_0 = buildClassSerialDescriptor('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this));
  }
  Object.defineProperty(TripleSerializer_0.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_73a6vr$_0;
    }
  });
  TripleSerializer_0.prototype.serialize_55azsf$ = function (encoder, value) {
    var structuredEncoder = encoder.beginStructure_24f42q$(this.descriptor);
    structuredEncoder.encodeSerializableElement_r4qlx7$(this.descriptor, 0, this.aSerializer_0, value.first);
    structuredEncoder.encodeSerializableElement_r4qlx7$(this.descriptor, 1, this.bSerializer_0, value.second);
    structuredEncoder.encodeSerializableElement_r4qlx7$(this.descriptor, 2, this.cSerializer_0, value.third);
    structuredEncoder.endStructure_24f42q$(this.descriptor);
  };
  TripleSerializer_0.prototype.deserialize_bq71mq$ = function (decoder) {
    var composite = decoder.beginStructure_24f42q$(this.descriptor);
    if (composite.decodeSequentially()) {
      return this.decodeSequentially_0(composite);
    }return this.decodeStructure_0(composite);
  };
  TripleSerializer_0.prototype.decodeSequentially_0 = function (composite) {
    var a = composite.decodeSerializableElement_12e8id$(this.descriptor, 0, this.aSerializer_0);
    var b = composite.decodeSerializableElement_12e8id$(this.descriptor, 1, this.bSerializer_0);
    var c = composite.decodeSerializableElement_12e8id$(this.descriptor, 2, this.cSerializer_0);
    composite.endStructure_24f42q$(this.descriptor);
    return new Triple(a, b, c);
  };
  TripleSerializer_0.prototype.decodeStructure_0 = function (composite) {
    var tmp$, tmp$_0, tmp$_1;
    var a = NULL;
    var b = NULL;
    var c = NULL;
    mainLoop: while (true) {
      var index = composite.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case -1:
          break mainLoop;
        case 0:
          a = composite.decodeSerializableElement_12e8id$(this.descriptor, 0, this.aSerializer_0);
          break;
        case 1:
          b = composite.decodeSerializableElement_12e8id$(this.descriptor, 1, this.bSerializer_0);
          break;
        case 2:
          c = composite.decodeSerializableElement_12e8id$(this.descriptor, 2, this.cSerializer_0);
          break;
        default:throw SerializationException_init_0('Unexpected index ' + index);
      }
    }
    composite.endStructure_24f42q$(this.descriptor);
    if (a === NULL)
      throw SerializationException_init_0("Element 'first' is missing");
    if (b === NULL)
      throw SerializationException_init_0("Element 'second' is missing");
    if (c === NULL)
      throw SerializationException_init_0("Element 'third' is missing");
    return new Triple((tmp$ = a) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE(), (tmp$_0 = b) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE(), (tmp$_1 = c) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE());
  };
  function TripleSerializer$descriptor$lambda(this$TripleSerializer) {
    return function ($receiver) {
      $receiver.element_vxrguq$('first', this$TripleSerializer.aSerializer_0.descriptor);
      $receiver.element_vxrguq$('second', this$TripleSerializer.bSerializer_0.descriptor);
      $receiver.element_vxrguq$('third', this$TripleSerializer.cSerializer_0.descriptor);
      return Unit;
    };
  }
  TripleSerializer_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TripleSerializer',
    interfaces: [KSerializer]
  };
  function PolymorphicModuleBuilder(baseClass, baseSerializer) {
    if (baseSerializer === void 0)
      baseSerializer = null;
    this.baseClass_0 = baseClass;
    this.baseSerializer_0 = baseSerializer;
    this.subclasses_0 = ArrayList_init_0();
    this.defaultSerializerProvider_0 = null;
    this.defaultDeserializerProvider_0 = null;
  }
  PolymorphicModuleBuilder.prototype.subclass_g8f9ns$ = function (subclass, serializer) {
    this.subclasses_0.add_11rb$(to(subclass, serializer));
  };
  PolymorphicModuleBuilder.prototype.defaultDeserializer_98asm5$ = function (defaultDeserializerProvider) {
    if (!(this.defaultDeserializerProvider_0 == null)) {
      var message = 'Default deserializer provider is already registered for class ' + this.baseClass_0 + ': ' + toString(this.defaultDeserializerProvider_0);
      throw IllegalArgumentException_init(message.toString());
    }this.defaultDeserializerProvider_0 = defaultDeserializerProvider;
  };
  PolymorphicModuleBuilder.prototype.default_98asm5$ = function (defaultSerializerProvider) {
    this.defaultDeserializer_98asm5$(defaultSerializerProvider);
  };
  PolymorphicModuleBuilder.prototype.buildTo_gz4556$ = function (builder) {
    if (this.baseSerializer_0 != null)
      builder.registerPolymorphicSerializer_yca12w$(this.baseClass_0, this.baseClass_0, this.baseSerializer_0);
    var tmp$;
    tmp$ = this.subclasses_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var kclass = element.component1()
      , serializer = element.component2();
      var tmp$_0;
      var tmp$_1;
      builder.registerPolymorphicSerializer_yca12w$(this.baseClass_0, Kotlin.isType(tmp$_0 = kclass, KClass) ? tmp$_0 : throwCCE(), Kotlin.isType(tmp$_1 = serializer, KSerializer) ? tmp$_1 : throwCCE());
    }
    var defaultSerializer = this.defaultSerializerProvider_0;
    if (defaultSerializer != null) {
      builder.registerDefaultPolymorphicSerializer_mv4x8a$(this.baseClass_0, defaultSerializer, false);
    }var defaultDeserializer = this.defaultDeserializerProvider_0;
    if (defaultDeserializer != null) {
      builder.registerDefaultPolymorphicDeserializer_b3da2m$(this.baseClass_0, defaultDeserializer, false);
    }};
  PolymorphicModuleBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PolymorphicModuleBuilder',
    interfaces: []
  };
  var subclass = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-js-legacy.kotlinx.serialization.modules.subclass_nygl7a$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, $receiver, serializer) {
      $receiver.subclass_g8f9ns$(getKClass(T_0), serializer);
    };
  }));
  var subclass_0 = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-js-legacy.kotlinx.serialization.modules.subclass_iaiprn$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var serializer = _.kotlinx.serialization.serializer_saj79j$;
    var KSerializer = _.kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT, $receiver, clazz) {
      var tmp$;
      $receiver.subclass_g8f9ns$(clazz, Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$ : throwCCE());
    };
  }));
  function SerializersModule() {
  }
  SerializersModule.prototype.getContextual_lmshww$ = function (kclass) {
    return this.getContextual_2n2k9f$(kclass, emptyList());
  };
  SerializersModule.prototype.getContextual_2n2k9f$ = function (kClass, typeArgumentsSerializers, callback$default) {
    if (typeArgumentsSerializers === void 0)
      typeArgumentsSerializers = emptyList();
    return callback$default ? callback$default(kClass, typeArgumentsSerializers) : this.getContextual_2n2k9f$$default(kClass, typeArgumentsSerializers);
  };
  SerializersModule.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SerializersModule',
    interfaces: []
  };
  var EmptySerializersModule;
  function plus($receiver, other) {
    var builder = new SerializersModuleBuilder();
    builder.include_4jix7z$($receiver);
    builder.include_4jix7z$(other);
    return builder.build();
  }
  function overwriteWith$lambda$ObjectLiteral(this$) {
    this.this$ = this$;
  }
  overwriteWith$lambda$ObjectLiteral.prototype.contextual_cfhkba$ = function (kClass, serializer) {
    this.this$.registerSerializer_1oo3qi$(kClass, new ContextualProvider$Argless(serializer), true);
  };
  overwriteWith$lambda$ObjectLiteral.prototype.contextual_vhoqnv$ = function (kClass, provider) {
    this.this$.registerSerializer_1oo3qi$(kClass, new ContextualProvider$WithTypeArguments(provider), true);
  };
  overwriteWith$lambda$ObjectLiteral.prototype.polymorphic_kfyidi$ = function (baseClass, actualClass, actualSerializer) {
    this.this$.registerPolymorphicSerializer_yca12w$(baseClass, actualClass, actualSerializer, true);
  };
  overwriteWith$lambda$ObjectLiteral.prototype.polymorphicDefaultSerializer_y32pk8$ = function (baseClass, defaultSerializerProvider) {
    this.this$.registerDefaultPolymorphicSerializer_mv4x8a$(baseClass, defaultSerializerProvider, true);
  };
  overwriteWith$lambda$ObjectLiteral.prototype.polymorphicDefaultDeserializer_yd5wsm$ = function (baseClass, defaultDeserializerProvider) {
    this.this$.registerDefaultPolymorphicDeserializer_b3da2m$(baseClass, defaultDeserializerProvider, true);
  };
  overwriteWith$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [SerializersModuleCollector]
  };
  function overwriteWith($receiver, other) {
    var builder = new SerializersModuleBuilder();
    builder.include_4jix7z$($receiver);
    other.dumpTo_ukvgvw$(new overwriteWith$lambda$ObjectLiteral(builder));
    return builder.build();
  }
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider) {
    SerializersModule.call(this);
    this.class2ContextualFactory_0 = class2ContextualFactory;
    this.polyBase2Serializers = polyBase2Serializers;
    this.polyBase2DefaultSerializerProvider_0 = polyBase2DefaultSerializerProvider;
    this.polyBase2NamedSerializers_0 = polyBase2NamedSerializers;
    this.polyBase2DefaultDeserializerProvider_0 = polyBase2DefaultDeserializerProvider;
  }
  SerialModuleImpl.prototype.getPolymorphic_joiicr$ = function (baseClass, value) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (!isInstanceOf(value, baseClass))
      return null;
    var registered = Kotlin.isType(tmp$_0 = (tmp$ = this.polyBase2Serializers.get_11rb$(baseClass)) != null ? tmp$.get_11rb$(Kotlin.getKClassFromExpression(value)) : null, SerializationStrategy) ? tmp$_0 : null;
    if (registered != null)
      return registered;
    return (tmp$_2 = typeof (tmp$_1 = this.polyBase2DefaultSerializerProvider_0.get_11rb$(baseClass)) === 'function' ? tmp$_1 : null) != null ? tmp$_2(value) : null;
  };
  SerialModuleImpl.prototype.getPolymorphic_l2fy3k$ = function (baseClass, serializedClassName) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var tmp$_3;
    if ((tmp$ = this.polyBase2NamedSerializers_0.get_11rb$(baseClass)) != null) {
      var tmp$_4;
      tmp$_3 = (Kotlin.isType(tmp$_4 = tmp$, Map) ? tmp$_4 : throwCCE()).get_11rb$(serializedClassName);
    } else
      tmp$_3 = null;
    var registered = Kotlin.isType(tmp$_0 = tmp$_3, KSerializer) ? tmp$_0 : null;
    if (registered != null)
      return registered;
    return (tmp$_2 = typeof (tmp$_1 = this.polyBase2DefaultDeserializerProvider_0.get_11rb$(baseClass)) === 'function' ? tmp$_1 : null) != null ? tmp$_2(serializedClassName) : null;
  };
  SerialModuleImpl.prototype.getContextual_2n2k9f$$default = function (kClass, typeArgumentsSerializers) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.class2ContextualFactory_0.get_11rb$(kClass)) != null ? tmp$.invoke_2c8qv7$(typeArgumentsSerializers) : null) == null || Kotlin.isType(tmp$_0, KSerializer) ? tmp$_0 : null;
  };
  SerialModuleImpl.prototype.dumpTo_ukvgvw$ = function (collector) {
    var tmp$;
    tmp$ = this.class2ContextualFactory_0.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var kclass = element.key;
      var serial = element.value;
      var tmp$_0, tmp$_1;
      if (Kotlin.isType(serial, ContextualProvider$Argless)) {
        collector.contextual_cfhkba$(Kotlin.isType(tmp$_0 = kclass, KClass) ? tmp$_0 : throwCCE(), Kotlin.isType(tmp$_1 = serial.serializer, KSerializer) ? tmp$_1 : throwCCE());
      } else if (Kotlin.isType(serial, ContextualProvider$WithTypeArguments))
        collector.contextual_vhoqnv$(kclass, serial.provider);
    }
    var tmp$_2;
    tmp$_2 = this.polyBase2Serializers.entries.iterator();
    while (tmp$_2.hasNext()) {
      var element_0 = tmp$_2.next();
      var baseClass = element_0.key;
      var classMap = element_0.value;
      var tmp$_3;
      tmp$_3 = classMap.entries.iterator();
      while (tmp$_3.hasNext()) {
        var element_1 = tmp$_3.next();
        var actualClass = element_1.key;
        var serializer = element_1.value;
        var tmp$_4, tmp$_5;
        var tmp$_6;
        collector.polymorphic_kfyidi$(Kotlin.isType(tmp$_4 = baseClass, KClass) ? tmp$_4 : throwCCE(), Kotlin.isType(tmp$_5 = actualClass, KClass) ? tmp$_5 : throwCCE(), Kotlin.isType(tmp$_6 = serializer, KSerializer) ? tmp$_6 : throwCCE());
      }
    }
    var tmp$_7;
    tmp$_7 = this.polyBase2DefaultSerializerProvider_0.entries.iterator();
    while (tmp$_7.hasNext()) {
      var element_2 = tmp$_7.next();
      var baseClass_0 = element_2.key;
      var provider = element_2.value;
      var tmp$_8, tmp$_9;
      collector.polymorphicDefaultSerializer_y32pk8$(Kotlin.isType(tmp$_8 = baseClass_0, KClass) ? tmp$_8 : throwCCE(), typeof (tmp$_9 = provider) === 'function' ? tmp$_9 : throwCCE());
    }
    var tmp$_10;
    tmp$_10 = this.polyBase2DefaultDeserializerProvider_0.entries.iterator();
    while (tmp$_10.hasNext()) {
      var element_3 = tmp$_10.next();
      var baseClass_1 = element_3.key;
      var provider_0 = element_3.value;
      var tmp$_11, tmp$_12;
      collector.polymorphicDefaultDeserializer_yd5wsm$(Kotlin.isType(tmp$_11 = baseClass_1, KClass) ? tmp$_11 : throwCCE(), typeof (tmp$_12 = provider_0) === 'function' ? tmp$_12 : throwCCE());
    }
  };
  SerialModuleImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SerialModuleImpl',
    interfaces: [SerializersModule]
  };
  function ContextualProvider() {
  }
  function ContextualProvider$Argless(serializer) {
    ContextualProvider.call(this);
    this.serializer = serializer;
  }
  ContextualProvider$Argless.prototype.invoke_2c8qv7$ = function (typeArgumentsSerializers) {
    return this.serializer;
  };
  ContextualProvider$Argless.prototype.equals = function (other) {
    return Kotlin.isType(other, ContextualProvider$Argless) && equals(other.serializer, this.serializer);
  };
  ContextualProvider$Argless.prototype.hashCode = function () {
    return hashCode(this.serializer);
  };
  ContextualProvider$Argless.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Argless',
    interfaces: [ContextualProvider]
  };
  function ContextualProvider$WithTypeArguments(provider) {
    ContextualProvider.call(this);
    this.provider = provider;
  }
  ContextualProvider$WithTypeArguments.prototype.invoke_2c8qv7$ = function (typeArgumentsSerializers) {
    return this.provider(typeArgumentsSerializers);
  };
  ContextualProvider$WithTypeArguments.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WithTypeArguments',
    interfaces: [ContextualProvider]
  };
  ContextualProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ContextualProvider',
    interfaces: []
  };
  function serializersModuleOf(kClass, serializer) {
    var builder = new SerializersModuleBuilder();
    builder.contextual_cfhkba$(kClass, serializer);
    return builder.build();
  }
  var serializersModuleOf_0 = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-js-legacy.kotlinx.serialization.modules.serializersModuleOf_ewacr1$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var serializersModuleOf = _.kotlinx.serialization.modules.serializersModuleOf_cfhkba$;
    return function (T_0, isT, serializer) {
      return serializersModuleOf(getKClass(T_0), serializer);
    };
  }));
  var SerializersModule_0 = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-js-legacy.kotlinx.serialization.modules.SerializersModule_q4tcel$', wrapFunction(function () {
    var SerializersModuleBuilder_init = _.kotlinx.serialization.modules.SerializersModuleBuilder;
    return function (builderAction) {
      var builder = new SerializersModuleBuilder_init();
      builderAction(builder);
      return builder.build();
    };
  }));
  function SerializersModuleBuilder() {
    this.class2ContextualProvider_0 = HashMap_init();
    this.polyBase2Serializers_0 = HashMap_init();
    this.polyBase2DefaultSerializerProvider_0 = HashMap_init();
    this.polyBase2NamedSerializers_0 = HashMap_init();
    this.polyBase2DefaultDeserializerProvider_0 = HashMap_init();
  }
  SerializersModuleBuilder.prototype.contextual_cfhkba$ = function (kClass, serializer) {
    this.registerSerializer_1oo3qi$(kClass, new ContextualProvider$Argless(serializer));
  };
  SerializersModuleBuilder.prototype.contextual_vhoqnv$ = function (kClass, provider) {
    this.registerSerializer_1oo3qi$(kClass, new ContextualProvider$WithTypeArguments(provider));
  };
  SerializersModuleBuilder.prototype.polymorphic_kfyidi$ = function (baseClass, actualClass, actualSerializer) {
    this.registerPolymorphicSerializer_yca12w$(baseClass, actualClass, actualSerializer);
  };
  SerializersModuleBuilder.prototype.polymorphicDefaultSerializer_y32pk8$ = function (baseClass, defaultSerializerProvider) {
    this.registerDefaultPolymorphicSerializer_mv4x8a$(baseClass, defaultSerializerProvider, false);
  };
  SerializersModuleBuilder.prototype.polymorphicDefaultDeserializer_yd5wsm$ = function (baseClass, defaultDeserializerProvider) {
    this.registerDefaultPolymorphicDeserializer_b3da2m$(baseClass, defaultDeserializerProvider, false);
  };
  SerializersModuleBuilder.prototype.include_4jix7z$ = function (module_0) {
    module_0.dumpTo_ukvgvw$(this);
  };
  SerializersModuleBuilder.prototype.registerSerializer_1oo3qi$ = function (forClass, provider, allowOverwrite) {
    if (allowOverwrite === void 0)
      allowOverwrite = false;
    if (!allowOverwrite) {
      var previous = this.class2ContextualProvider_0.get_11rb$(forClass);
      if (previous != null && !equals(previous, provider)) {
        throw new SerializerAlreadyRegisteredException('Contextual serializer or serializer provider for ' + forClass + ' already registered in this module');
      }}this.class2ContextualProvider_0.put_xwzc9p$(forClass, provider);
  };
  SerializersModuleBuilder.prototype.registerDefaultPolymorphicSerializer_mv4x8a$ = function (baseClass, defaultSerializerProvider, allowOverwrite) {
    var previous = this.polyBase2DefaultDeserializerProvider_0.get_11rb$(baseClass);
    if (previous != null && !equals(previous, defaultSerializerProvider) && !allowOverwrite) {
      throw IllegalArgumentException_init('Default serializers provider for class ' + baseClass + ' is already registered: ' + toString(previous));
    }this.polyBase2DefaultSerializerProvider_0.put_xwzc9p$(baseClass, defaultSerializerProvider);
  };
  SerializersModuleBuilder.prototype.registerDefaultPolymorphicDeserializer_b3da2m$ = function (baseClass, defaultDeserializerProvider, allowOverwrite) {
    var previous = this.polyBase2DefaultDeserializerProvider_0.get_11rb$(baseClass);
    if (previous != null && !equals(previous, defaultDeserializerProvider) && !allowOverwrite) {
      throw IllegalArgumentException_init('Default deserializers provider for class ' + baseClass + ' is already registered: ' + toString(previous));
    }this.polyBase2DefaultDeserializerProvider_0.put_xwzc9p$(baseClass, defaultDeserializerProvider);
  };
  SerializersModuleBuilder.prototype.registerPolymorphicSerializer_yca12w$ = function (baseClass, concreteClass, concreteSerializer, allowOverwrite) {
    if (allowOverwrite === void 0)
      allowOverwrite = false;
    var name = concreteSerializer.descriptor.serialName;
    var $receiver = this.polyBase2Serializers_0;
    var tmp$;
    var value = $receiver.get_11rb$(baseClass);
    if (value == null) {
      var answer = HashMap_init();
      $receiver.put_xwzc9p$(baseClass, answer);
      tmp$ = answer;
    } else {
      tmp$ = value;
    }
    var baseClassSerializers = tmp$;
    var previousSerializer = baseClassSerializers.get_11rb$(concreteClass);
    var $receiver_0 = this.polyBase2NamedSerializers_0;
    var tmp$_0;
    var value_0 = $receiver_0.get_11rb$(baseClass);
    if (value_0 == null) {
      var answer_0 = HashMap_init();
      $receiver_0.put_xwzc9p$(baseClass, answer_0);
      tmp$_0 = answer_0;
    } else {
      tmp$_0 = value_0;
    }
    var names = tmp$_0;
    if (allowOverwrite) {
      if (previousSerializer != null) {
        names.remove_11rb$(previousSerializer.descriptor.serialName);
      }baseClassSerializers.put_xwzc9p$(concreteClass, concreteSerializer);
      names.put_xwzc9p$(name, concreteSerializer);
      return;
    }if (previousSerializer != null) {
      if (!equals(previousSerializer, concreteSerializer)) {
        throw SerializerAlreadyRegisteredException_init(baseClass, concreteClass);
      } else {
        names.remove_11rb$(previousSerializer.descriptor.serialName);
      }
    }var previousByName = names.get_11rb$(name);
    if (previousByName != null) {
      var $receiver_1 = asSequence(ensureNotNull(this.polyBase2Serializers_0.get_11rb$(baseClass)));
      var firstOrNull$result;
      firstOrNull$break: do {
        var tmp$_1;
        tmp$_1 = $receiver_1.iterator();
        while (tmp$_1.hasNext()) {
          var element = tmp$_1.next();
          if (element.value === previousByName) {
            firstOrNull$result = element;
            break firstOrNull$break;
          }}
        firstOrNull$result = null;
      }
       while (false);
      var conflictingClass = firstOrNull$result;
      throw IllegalArgumentException_init("Multiple polymorphic serializers for base class '" + baseClass + "' " + ("have the same serial name '" + name + "': '" + concreteClass + "' and '" + toString(conflictingClass) + "'"));
    }baseClassSerializers.put_xwzc9p$(concreteClass, concreteSerializer);
    names.put_xwzc9p$(name, concreteSerializer);
  };
  SerializersModuleBuilder.prototype.build = function () {
    return new SerialModuleImpl(this.class2ContextualProvider_0, this.polyBase2Serializers_0, this.polyBase2DefaultSerializerProvider_0, this.polyBase2NamedSerializers_0, this.polyBase2DefaultDeserializerProvider_0);
  };
  SerializersModuleBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SerializersModuleBuilder',
    interfaces: [SerializersModuleCollector]
  };
  var contextual = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-js-legacy.kotlinx.serialization.modules.contextual_692uso$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, $receiver, serializer) {
      $receiver.contextual_cfhkba$(getKClass(T_0), serializer);
    };
  }));
  var polymorphic = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-js-legacy.kotlinx.serialization.modules.polymorphic_fy38n9$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var PolymorphicModuleBuilder_init = _.kotlinx.serialization.modules.PolymorphicModuleBuilder;
    function polymorphic$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, baseClass, baseSerializer, builderAction) {
      if (baseSerializer === void 0)
        baseSerializer = null;
      if (builderAction === void 0)
        builderAction = polymorphic$lambda;
      var builder = new PolymorphicModuleBuilder_init(baseClass, baseSerializer);
      builderAction(builder);
      builder.buildTo_gz4556$($receiver);
    };
  }));
  function SerializerAlreadyRegisteredException(msg) {
    IllegalArgumentException_init(msg, this);
    this.name = 'SerializerAlreadyRegisteredException';
  }
  SerializerAlreadyRegisteredException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SerializerAlreadyRegisteredException',
    interfaces: [IllegalArgumentException]
  };
  function SerializerAlreadyRegisteredException_init(baseClass, concreteClass, $this) {
    $this = $this || Object.create(SerializerAlreadyRegisteredException.prototype);
    SerializerAlreadyRegisteredException.call($this, 'Serializer for ' + concreteClass + ' already registered in the scope of ' + baseClass);
    return $this;
  }
  function SerializersModuleCollector() {
  }
  function SerializersModuleCollector$contextual$lambda(closure$serializer) {
    return function (it) {
      return closure$serializer;
    };
  }
  SerializersModuleCollector.prototype.contextual_cfhkba$ = function (kClass, serializer) {
    this.contextual_vhoqnv$(kClass, SerializersModuleCollector$contextual$lambda(serializer));
  };
  SerializersModuleCollector.prototype.polymorphicDefault_yd5wsm$ = function (baseClass, defaultDeserializerProvider) {
    this.polymorphicDefaultDeserializer_yd5wsm$(baseClass, defaultDeserializerProvider);
  };
  SerializersModuleCollector.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SerializersModuleCollector',
    interfaces: []
  };
  function SerializableWith(serializer) {
    this.serializer = serializer;
  }
  SerializableWith.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SerializableWith',
    interfaces: [Annotation]
  };
  function getChecked($receiver, index) {
    if (!get_indices($receiver).contains_mef7kx$(index))
      throw new IndexOutOfBoundsException('Index ' + index + ' out of bounds ' + get_indices($receiver));
    return $receiver[index];
  }
  function getChecked_0($receiver, index) {
    if (!get_indices_0($receiver).contains_mef7kx$(index))
      throw new IndexOutOfBoundsException('Index ' + index + ' out of bounds ' + get_indices_0($receiver));
    return $receiver[index];
  }
  function compiledSerializerImpl($receiver) {
    var tmp$, tmp$_0, tmp$_1;
    return (tmp$_1 = constructSerializerForGivenTypeArgs($receiver, [])) != null ? tmp$_1 : Kotlin.isType(tmp$_0 = (tmp$ = get_js($receiver).Companion) != null ? tmp$.serializer() : null, KSerializer) ? tmp$_0 : null;
  }
  function toNativeArrayImpl($receiver, eClass) {
    return copyToArray($receiver);
  }
  function isInstanceOf($receiver, kclass) {
    return kclass.isInstance_s8jyv4$($receiver);
  }
  function platformSpecificSerializerNotRegistered($receiver) {
    throw SerializationException_init_0("Serializer for class '" + toString($receiver.simpleName) + "' is not found." + '\n' + 'Mark the class as @Serializable or provide the serializer explicitly.\n' + 'On Kotlin/JS explicitly declared serializer should be used for interfaces and enums without @Serializable annotation');
  }
  function constructSerializerForGivenTypeArgs($receiver, args) {
    var tmp$, tmp$_0;
    try {
      var assocObject = findAssociatedObject($receiver, getKClass(SerializableWith));
      if (Kotlin.isType(assocObject, KSerializer))
        return Kotlin.isType(tmp$ = assocObject, KSerializer) ? tmp$ : throwCCE();
      else if (Kotlin.isType(assocObject, SerializerFactory))
        return Kotlin.isType(tmp$_0 = assocObject.serializer_lu48y9$(args.slice()), KSerializer) ? tmp$_0 : throwCCE();
      else if (get_isInterface($receiver))
        return new PolymorphicSerializer($receiver);
      else
        return null;
    } catch (e) {
      return null;
    }
  }
  function isReferenceArray(rootClass) {
    return rootClass != null ? rootClass.equals(PrimitiveClasses$arrayClass) : null;
  }
  function get_isInterface($receiver) {
    var tmp$;
    return ((tmp$ = get_js($receiver).$metadata$) != null ? tmp$.kind : null) == 'interface';
  }
  var package$kotlinx = _.kotlinx || (_.kotlinx = {});
  var package$serialization = package$kotlinx.serialization || (package$kotlinx.serialization = {});
  package$serialization.Serializable = Serializable;
  package$serialization.Serializer = Serializer;
  package$serialization.SerialName = SerialName;
  package$serialization.Required = Required;
  package$serialization.Transient = Transient;
  Object.defineProperty(EncodeDefault$Mode, 'ALWAYS', {
    get: EncodeDefault$Mode$ALWAYS_getInstance
  });
  Object.defineProperty(EncodeDefault$Mode, 'NEVER', {
    get: EncodeDefault$Mode$NEVER_getInstance
  });
  EncodeDefault.Mode = EncodeDefault$Mode;
  package$serialization.EncodeDefault = EncodeDefault;
  package$serialization.SerialInfo = SerialInfo;
  package$serialization.InheritableSerialInfo = InheritableSerialInfo;
  package$serialization.Contextual = Contextual;
  package$serialization.UseContextualSerialization = UseContextualSerialization;
  package$serialization.UseSerializers = UseSerializers;
  package$serialization.Polymorphic = Polymorphic;
  package$serialization.ExperimentalSerializationApi = ExperimentalSerializationApi;
  package$serialization.InternalSerializationApi = InternalSerializationApi;
  package$serialization.ContextualSerializer_init_lmshww$ = ContextualSerializer_init;
  package$serialization.ContextualSerializer = ContextualSerializer;
  package$serialization.KSerializer = KSerializer;
  package$serialization.SerializationStrategy = SerializationStrategy;
  package$serialization.DeserializationStrategy = DeserializationStrategy;
  package$serialization.PolymorphicSerializer_init_vdiokq$ = PolymorphicSerializer_init;
  package$serialization.PolymorphicSerializer = PolymorphicSerializer;
  package$serialization.findPolymorphicSerializer_uce5au$ = findPolymorphicSerializer;
  package$serialization.findPolymorphicSerializer_dz33bw$ = findPolymorphicSerializer_0;
  $$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-js-legacy'] = _;
  package$serialization.SealedClassSerializer_init_ezb5y1$ = SealedClassSerializer_init;
  package$serialization.SealedClassSerializer = SealedClassSerializer;
  package$serialization.SerialFormat = SerialFormat;
  package$serialization.BinaryFormat = BinaryFormat;
  package$serialization.StringFormat = StringFormat;
  package$serialization.encodeToHexString_4yxkwp$ = encodeToHexString;
  package$serialization.decodeFromHexString_f786sb$ = decodeFromHexString;
  package$serialization.SerializationException_init = SerializationException_init;
  package$serialization.SerializationException_init_pdl1vj$ = SerializationException_init_0;
  package$serialization.SerializationException_init_wspj0f$ = SerializationException_init_1;
  package$serialization.SerializationException_init_dbl4no$ = SerializationException_init_2;
  package$serialization.SerializationException = SerializationException;
  package$serialization.MissingFieldException_init_61zpoe$ = MissingFieldException_init;
  package$serialization.MissingFieldException_init_c9ot88$ = MissingFieldException_init_0;
  package$serialization.MissingFieldException = MissingFieldException;
  package$serialization.UnknownFieldException_init_za3lpa$ = UnknownFieldException_init;
  package$serialization.UnknownFieldException = UnknownFieldException;
  package$serialization.serializer_saj79j$ = serializer_1;
  var package$internal = package$serialization.internal || (package$serialization.internal = {});
  package$internal.cast_irzu8f$ = cast;
  package$serialization.serializer_ca95z9$ = serializer_2;
  package$serialization.serializerOrNull_saj79j$ = serializerOrNull;
  package$serialization.serializerOrNull_ca95z9$ = serializerOrNull_0;
  package$serialization.reflectiveOrContextual_plakug$ = reflectiveOrContextual;
  package$serialization.serializer_1yb8b7$ = serializer_3;
  package$serialization.serializerOrNull_1yb8b7$ = serializerOrNull_1;
  var package$builtins = package$serialization.builtins || (package$serialization.builtins = {});
  package$builtins.get_nullable_2418p6$ = get_nullable;
  package$builtins.PairSerializer_2yqygg$ = PairSerializer;
  package$builtins.MapEntrySerializer_2yqygg$ = MapEntrySerializer;
  package$builtins.TripleSerializer_jww85o$ = TripleSerializer;
  package$builtins.serializer_n24eoe$ = serializer_4;
  package$builtins.CharArraySerializer = CharArraySerializer;
  package$builtins.serializer_k5zfx8$ = serializer_5;
  package$builtins.ByteArraySerializer = ByteArraySerializer;
  package$builtins.serializer_qetqea$ = serializer_6;
  package$builtins.ShortArraySerializer = ShortArraySerializer;
  package$builtins.serializer_qn7glr$ = serializer_7;
  package$builtins.IntArraySerializer = IntArraySerializer;
  package$builtins.serializer_vbrujs$ = serializer_8;
  package$builtins.LongArraySerializer = LongArraySerializer;
  package$builtins.serializer_y9phqa$ = serializer_9;
  package$builtins.FloatArraySerializer = FloatArraySerializer;
  package$builtins.serializer_6a53gt$ = serializer_10;
  package$builtins.DoubleArraySerializer = DoubleArraySerializer;
  package$builtins.serializer_jtjczu$ = serializer_11;
  package$builtins.BooleanArraySerializer = BooleanArraySerializer;
  package$builtins.serializer_mours2$ = serializer_12;
  package$builtins.serializer_6eet4j$ = serializer_13;
  package$builtins.ArraySerializer_8tn5u0$ = ArraySerializer_0;
  package$builtins.ListSerializer_swdriu$ = ListSerializer;
  package$builtins.SetSerializer_swdriu$ = SetSerializer;
  package$builtins.MapSerializer_2yqygg$ = MapSerializer;
  package$builtins.serializer_wxu9yi$ = serializer_14;
  package$builtins.serializer_de2ylp$ = serializer_15;
  package$builtins.serializer_28ajz5$ = serializer_16;
  package$builtins.serializer_wdte4j$ = serializer_17;
  Object.defineProperty(package$builtins, 'LongAsStringSerializer', {
    get: LongAsStringSerializer_getInstance
  });
  var package$descriptors = package$serialization.descriptors || (package$serialization.descriptors = {});
  package$descriptors.get_capturedKClass_583jlf$ = get_capturedKClass;
  package$descriptors.getContextualDescriptor_6wk734$ = getContextualDescriptor;
  package$descriptors.getPolymorphicDescriptors_6wk734$ = getPolymorphicDescriptors;
  package$descriptors.withContext_k9hcuj$ = withContext;
  package$descriptors.SerialDescriptor = SerialDescriptor;
  package$descriptors.get_elementDescriptors_583jlf$ = get_elementDescriptors;
  package$descriptors.get_elementNames_583jlf$ = get_elementNames;
  package$descriptors.buildClassSerialDescriptor_dowfwv$ = buildClassSerialDescriptor;
  package$descriptors.PrimitiveSerialDescriptor_xytc2a$ = PrimitiveSerialDescriptor;
  package$descriptors.SerialDescriptor_aq5n8w$ = SerialDescriptor_0;
  package$descriptors.WrappedSerialDescriptor = WrappedSerialDescriptor;
  package$descriptors.buildSerialDescriptor_2yu4m$ = buildSerialDescriptor;
  package$descriptors.serialDescriptor_saj79j$ = serialDescriptor_0;
  package$descriptors.listSerialDescriptor_24f42q$ = listSerialDescriptor;
  package$descriptors.mapSerialDescriptor_2ezn58$ = mapSerialDescriptor;
  package$descriptors.setSerialDescriptor_24f42q$ = setSerialDescriptor;
  package$descriptors.get_nullable_583jlf$ = get_nullable_0;
  package$descriptors.ClassSerialDescriptorBuilder = ClassSerialDescriptorBuilder;
  package$descriptors.SerialDescriptorImpl = SerialDescriptorImpl;
  Object.defineProperty(SerialKind, 'ENUM', {
    get: SerialKind$ENUM_getInstance
  });
  Object.defineProperty(SerialKind, 'CONTEXTUAL', {
    get: SerialKind$CONTEXTUAL_getInstance
  });
  package$descriptors.SerialKind = SerialKind;
  Object.defineProperty(PrimitiveKind, 'BOOLEAN', {
    get: PrimitiveKind$BOOLEAN_getInstance
  });
  Object.defineProperty(PrimitiveKind, 'BYTE', {
    get: PrimitiveKind$BYTE_getInstance
  });
  Object.defineProperty(PrimitiveKind, 'CHAR', {
    get: PrimitiveKind$CHAR_getInstance
  });
  Object.defineProperty(PrimitiveKind, 'SHORT', {
    get: PrimitiveKind$SHORT_getInstance
  });
  Object.defineProperty(PrimitiveKind, 'INT', {
    get: PrimitiveKind$INT_getInstance
  });
  Object.defineProperty(PrimitiveKind, 'LONG', {
    get: PrimitiveKind$LONG_getInstance
  });
  Object.defineProperty(PrimitiveKind, 'FLOAT', {
    get: PrimitiveKind$FLOAT_getInstance
  });
  Object.defineProperty(PrimitiveKind, 'DOUBLE', {
    get: PrimitiveKind$DOUBLE_getInstance
  });
  Object.defineProperty(PrimitiveKind, 'STRING', {
    get: PrimitiveKind$STRING_getInstance
  });
  package$descriptors.PrimitiveKind = PrimitiveKind;
  Object.defineProperty(StructureKind, 'CLASS', {
    get: StructureKind$CLASS_getInstance
  });
  Object.defineProperty(StructureKind, 'LIST', {
    get: StructureKind$LIST_getInstance
  });
  Object.defineProperty(StructureKind, 'MAP', {
    get: StructureKind$MAP_getInstance
  });
  Object.defineProperty(StructureKind, 'OBJECT', {
    get: StructureKind$OBJECT_getInstance
  });
  package$descriptors.StructureKind = StructureKind;
  Object.defineProperty(PolymorphicKind, 'SEALED', {
    get: PolymorphicKind$SEALED_getInstance
  });
  Object.defineProperty(PolymorphicKind, 'OPEN', {
    get: PolymorphicKind$OPEN_getInstance
  });
  package$descriptors.PolymorphicKind = PolymorphicKind;
  var package$encoding = package$serialization.encoding || (package$serialization.encoding = {});
  package$encoding.AbstractDecoder = AbstractDecoder;
  package$encoding.AbstractEncoder = AbstractEncoder;
  package$encoding.Decoder = Decoder;
  Object.defineProperty(CompositeDecoder, 'Companion', {
    get: CompositeDecoder$Companion_getInstance
  });
  package$encoding.CompositeDecoder = CompositeDecoder;
  package$encoding.decodeStructure_tzrhxq$ = decodeStructure;
  package$encoding.Encoder = Encoder;
  package$encoding.CompositeEncoder = CompositeEncoder;
  package$encoding.encodeStructure_iqdhfr$ = encodeStructure;
  package$encoding.encodeCollection_mcp0x$ = encodeCollection;
  package$encoding.encodeCollection_z7tnzi$ = encodeCollection_0;
  package$internal.AbstractPolymorphicSerializer = AbstractPolymorphicSerializer;
  package$internal.throwSubtypeNotRegistered_it6qj1$ = throwSubtypeNotRegistered;
  package$internal.throwSubtypeNotRegistered_zgnrn5$ = throwSubtypeNotRegistered_0;
  package$internal.CachedNames = CachedNames;
  package$internal.ListLikeDescriptor = ListLikeDescriptor;
  package$internal.MapLikeDescriptor = MapLikeDescriptor;
  Object.defineProperty(package$internal, 'ARRAY_NAME_8be2vx$', {
    get: function () {
      return ARRAY_NAME;
    }
  });
  Object.defineProperty(package$internal, 'ARRAY_LIST_NAME_8be2vx$', {
    get: function () {
      return ARRAY_LIST_NAME;
    }
  });
  Object.defineProperty(package$internal, 'LINKED_HASH_SET_NAME_8be2vx$', {
    get: function () {
      return LINKED_HASH_SET_NAME;
    }
  });
  Object.defineProperty(package$internal, 'HASH_SET_NAME_8be2vx$', {
    get: function () {
      return HASH_SET_NAME;
    }
  });
  Object.defineProperty(package$internal, 'LINKED_HASH_MAP_NAME_8be2vx$', {
    get: function () {
      return LINKED_HASH_MAP_NAME;
    }
  });
  Object.defineProperty(package$internal, 'HASH_MAP_NAME_8be2vx$', {
    get: function () {
      return HASH_MAP_NAME;
    }
  });
  package$internal.PrimitiveArrayDescriptor = PrimitiveArrayDescriptor;
  package$internal.ArrayClassDesc = ArrayClassDesc;
  package$internal.ArrayListClassDesc = ArrayListClassDesc;
  package$internal.LinkedHashSetClassDesc = LinkedHashSetClassDesc;
  package$internal.HashSetClassDesc = HashSetClassDesc;
  package$internal.LinkedHashMapClassDesc = LinkedHashMapClassDesc;
  package$internal.HashMapClassDesc = HashMapClassDesc;
  package$internal.AbstractCollectionSerializer = AbstractCollectionSerializer;
  package$internal.ListLikeSerializer = ListLikeSerializer;
  package$internal.MapLikeSerializer = MapLikeSerializer;
  package$internal.PrimitiveArrayBuilder = PrimitiveArrayBuilder;
  package$internal.PrimitiveArraySerializer = PrimitiveArraySerializer;
  package$internal.ReferenceArraySerializer = ReferenceArraySerializer;
  package$internal.ArrayListSerializer = ArrayListSerializer;
  package$internal.LinkedHashSetSerializer = LinkedHashSetSerializer;
  package$internal.HashSetSerializer = HashSetSerializer;
  package$internal.LinkedHashMapSerializer = LinkedHashMapSerializer;
  package$internal.HashMapSerializer = HashMapSerializer;
  package$internal.ElementMarker = ElementMarker;
  package$internal.EnumDescriptor = EnumDescriptor;
  package$internal.EnumSerializer = EnumSerializer;
  package$internal.InlineClassDescriptor = InlineClassDescriptor;
  package$internal.InlinePrimitiveDescriptor_adhoip$ = InlinePrimitiveDescriptor;
  Object.defineProperty(package$internal, 'UIntSerializer', {
    get: UIntSerializer_getInstance
  });
  Object.defineProperty(package$internal, 'ULongSerializer', {
    get: ULongSerializer_getInstance
  });
  Object.defineProperty(package$internal, 'UByteSerializer', {
    get: UByteSerializer_getInstance
  });
  Object.defineProperty(package$internal, 'UShortSerializer', {
    get: UShortSerializer_getInstance
  });
  package$internal.jsonCachedSerialNames_583jlf$ = jsonCachedSerialNames;
  Object.defineProperty(package$internal, 'NoOpEncoder', {
    get: NoOpEncoder_getInstance
  });
  package$internal.NullableSerializer = NullableSerializer;
  package$internal.SerialDescriptorForNullable = SerialDescriptorForNullable;
  package$internal.ObjectSerializer_init_kzl605$ = ObjectSerializer_init;
  package$internal.ObjectSerializer = ObjectSerializer;
  Object.defineProperty(package$internal, 'InternalHexConverter', {
    get: InternalHexConverter_getInstance
  });
  package$internal.cachedSerialNames_tie8r4$ = cachedSerialNames;
  package$internal.compactArray_b0lhx2$ = compactArray;
  package$internal.cast_sjryxj$ = cast_0;
  package$internal.cast_pbw0sq$ = cast_1;
  package$internal.serializerNotRegistered_lu5d9p$ = serializerNotRegistered;
  package$internal.kclass_7v1px$ = kclass;
  package$internal.elementsHashCodeBy_9ua6wn$ = elementsHashCodeBy;
  package$internal.throwMissingFieldException_r5cym$ = throwMissingFieldException;
  package$internal.throwArrayMissingFieldException_wai4ac$ = throwArrayMissingFieldException;
  package$internal.PluginGeneratedSerialDescriptor = PluginGeneratedSerialDescriptor;
  package$internal.hashCodeImpl_y01f7g$ = hashCodeImpl;
  Object.defineProperty(package$internal, 'EMPTY_SERIALIZER_ARRAY_8be2vx$', {
    get: function () {
      return EMPTY_SERIALIZER_ARRAY;
    }
  });
  package$internal.GeneratedSerializer = GeneratedSerializer;
  package$internal.SerializerFactory = SerializerFactory;
  Object.defineProperty(package$internal, 'ByteArraySerializer', {
    get: ByteArraySerializer_getInstance
  });
  package$internal.ByteArrayBuilder = ByteArrayBuilder;
  Object.defineProperty(package$internal, 'ShortArraySerializer', {
    get: ShortArraySerializer_getInstance
  });
  package$internal.ShortArrayBuilder = ShortArrayBuilder;
  Object.defineProperty(package$internal, 'IntArraySerializer', {
    get: IntArraySerializer_getInstance
  });
  package$internal.IntArrayBuilder = IntArrayBuilder;
  Object.defineProperty(package$internal, 'LongArraySerializer', {
    get: LongArraySerializer_getInstance
  });
  package$internal.LongArrayBuilder = LongArrayBuilder;
  Object.defineProperty(package$internal, 'FloatArraySerializer', {
    get: FloatArraySerializer_getInstance
  });
  package$internal.FloatArrayBuilder = FloatArrayBuilder;
  Object.defineProperty(package$internal, 'DoubleArraySerializer', {
    get: DoubleArraySerializer_getInstance
  });
  package$internal.DoubleArrayBuilder = DoubleArrayBuilder;
  Object.defineProperty(package$internal, 'CharArraySerializer', {
    get: CharArraySerializer_getInstance
  });
  package$internal.CharArrayBuilder = CharArrayBuilder;
  Object.defineProperty(package$internal, 'BooleanArraySerializer', {
    get: BooleanArraySerializer_getInstance
  });
  package$internal.BooleanArrayBuilder = BooleanArrayBuilder;
  package$internal.PrimitiveSerialDescriptor = PrimitiveSerialDescriptor_0;
  package$internal.PrimitiveDescriptorSafe_2z23zl$ = PrimitiveDescriptorSafe;
  package$internal.builtinSerializerOrNull_beh9s$ = builtinSerializerOrNull;
  Object.defineProperty(package$internal, 'UnitSerializer', {
    get: UnitSerializer_getInstance
  });
  Object.defineProperty(package$internal, 'BooleanSerializer', {
    get: BooleanSerializer_getInstance
  });
  Object.defineProperty(package$internal, 'ByteSerializer', {
    get: ByteSerializer_getInstance
  });
  Object.defineProperty(package$internal, 'ShortSerializer', {
    get: ShortSerializer_getInstance
  });
  Object.defineProperty(package$internal, 'IntSerializer', {
    get: IntSerializer_getInstance
  });
  Object.defineProperty(package$internal, 'LongSerializer', {
    get: LongSerializer_getInstance
  });
  Object.defineProperty(package$internal, 'FloatSerializer', {
    get: FloatSerializer_getInstance
  });
  Object.defineProperty(package$internal, 'DoubleSerializer', {
    get: DoubleSerializer_getInstance
  });
  Object.defineProperty(package$internal, 'CharSerializer', {
    get: CharSerializer_getInstance
  });
  Object.defineProperty(package$internal, 'StringSerializer', {
    get: StringSerializer_getInstance
  });
  package$internal.SerializationConstructorMarker = SerializationConstructorMarker;
  package$internal.TaggedEncoder = TaggedEncoder;
  package$internal.NamedValueEncoder = NamedValueEncoder;
  package$internal.TaggedDecoder = TaggedDecoder;
  package$internal.NamedValueDecoder = NamedValueDecoder;
  package$internal.KeyValueSerializer = KeyValueSerializer;
  package$internal.MapEntrySerializer = MapEntrySerializer_0;
  package$internal.PairSerializer = PairSerializer_0;
  package$internal.TripleSerializer = TripleSerializer_0;
  var package$modules = package$serialization.modules || (package$serialization.modules = {});
  package$modules.PolymorphicModuleBuilder = PolymorphicModuleBuilder;
  package$modules.SerializersModule = SerializersModule;
  Object.defineProperty(package$modules, 'EmptySerializersModule', {
    get: function () {
      return EmptySerializersModule;
    }
  });
  package$modules.plus_nz2fmb$ = plus;
  package$modules.overwriteWith_nz2fmb$ = overwriteWith;
  package$modules.SerialModuleImpl = SerialModuleImpl;
  ContextualProvider.Argless = ContextualProvider$Argless;
  ContextualProvider.WithTypeArguments = ContextualProvider$WithTypeArguments;
  package$modules.ContextualProvider = ContextualProvider;
  package$modules.serializersModuleOf_cfhkba$ = serializersModuleOf;
  package$modules.SerializersModule_q4tcel$ = SerializersModule_0;
  package$modules.SerializersModuleBuilder = SerializersModuleBuilder;
  package$modules.polymorphic_fy38n9$ = polymorphic;
  package$modules.SerializersModuleCollector = SerializersModuleCollector;
  package$serialization.SerializableWith = SerializableWith;
  package$internal.getChecked_4bqw6o$ = getChecked;
  package$internal.getChecked_3zu3yo$ = getChecked_0;
  package$internal.compiledSerializerImpl_beh9s$ = compiledSerializerImpl;
  package$internal.toNativeArrayImpl_wfz7v1$ = toNativeArrayImpl;
  package$internal.isInstanceOf_ofcvxk$ = isInstanceOf;
  package$internal.platformSpecificSerializerNotRegistered_lu5d9p$ = platformSpecificSerializerNotRegistered;
  package$internal.constructSerializerForGivenTypeArgs_f7nown$ = constructSerializerForGivenTypeArgs;
  package$internal.isReferenceArray_79m3vz$ = isReferenceArray;
  Object.defineProperty(SerialDescriptorImpl.prototype, 'isNullable', Object.getOwnPropertyDescriptor(SerialDescriptor.prototype, 'isNullable'));
  Object.defineProperty(SerialDescriptorImpl.prototype, 'isInline', Object.getOwnPropertyDescriptor(SerialDescriptor.prototype, 'isInline'));
  AbstractDecoder.prototype.decodeSerializableValue_w63s0f$ = Decoder.prototype.decodeSerializableValue_w63s0f$;
  AbstractDecoder.prototype.decodeNullableSerializableValue_aae3ea$ = Decoder.prototype.decodeNullableSerializableValue_aae3ea$;
  AbstractDecoder.prototype.decodeSequentially = CompositeDecoder.prototype.decodeSequentially;
  AbstractDecoder.prototype.decodeCollectionSize_24f42q$ = CompositeDecoder.prototype.decodeCollectionSize_24f42q$;
  AbstractDecoder.prototype.decodeSerializableElement_12e8id$ = CompositeDecoder.prototype.decodeSerializableElement_12e8id$;
  AbstractDecoder.prototype.decodeNullableSerializableElement_8viuyw$ = CompositeDecoder.prototype.decodeNullableSerializableElement_8viuyw$;
  AbstractEncoder.prototype.encodeNotNullMark = Encoder.prototype.encodeNotNullMark;
  AbstractEncoder.prototype.beginCollection_szpzho$ = Encoder.prototype.beginCollection_szpzho$;
  AbstractEncoder.prototype.encodeSerializableValue_tf03ej$ = Encoder.prototype.encodeSerializableValue_tf03ej$;
  AbstractEncoder.prototype.encodeNullableSerializableValue_f4686g$ = Encoder.prototype.encodeNullableSerializableValue_f4686g$;
  AbstractEncoder.prototype.shouldEncodeElementDefault_szpzho$ = CompositeEncoder.prototype.shouldEncodeElementDefault_szpzho$;
  Object.defineProperty(ListLikeDescriptor.prototype, 'isNullable', Object.getOwnPropertyDescriptor(SerialDescriptor.prototype, 'isNullable'));
  Object.defineProperty(ListLikeDescriptor.prototype, 'isInline', Object.getOwnPropertyDescriptor(SerialDescriptor.prototype, 'isInline'));
  Object.defineProperty(ListLikeDescriptor.prototype, 'annotations', Object.getOwnPropertyDescriptor(SerialDescriptor.prototype, 'annotations'));
  Object.defineProperty(MapLikeDescriptor.prototype, 'isNullable', Object.getOwnPropertyDescriptor(SerialDescriptor.prototype, 'isNullable'));
  Object.defineProperty(MapLikeDescriptor.prototype, 'isInline', Object.getOwnPropertyDescriptor(SerialDescriptor.prototype, 'isInline'));
  Object.defineProperty(MapLikeDescriptor.prototype, 'annotations', Object.getOwnPropertyDescriptor(SerialDescriptor.prototype, 'annotations'));
  Object.defineProperty(PluginGeneratedSerialDescriptor.prototype, 'isNullable', Object.getOwnPropertyDescriptor(SerialDescriptor.prototype, 'isNullable'));
  Object.defineProperty(PluginGeneratedSerialDescriptor.prototype, 'isInline', Object.getOwnPropertyDescriptor(SerialDescriptor.prototype, 'isInline'));
  InlinePrimitiveDescriptor$ObjectLiteral.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  Object.defineProperty(PrimitiveSerialDescriptor_0.prototype, 'isNullable', Object.getOwnPropertyDescriptor(SerialDescriptor.prototype, 'isNullable'));
  Object.defineProperty(PrimitiveSerialDescriptor_0.prototype, 'isInline', Object.getOwnPropertyDescriptor(SerialDescriptor.prototype, 'isInline'));
  Object.defineProperty(PrimitiveSerialDescriptor_0.prototype, 'annotations', Object.getOwnPropertyDescriptor(SerialDescriptor.prototype, 'annotations'));
  TaggedEncoder.prototype.beginCollection_szpzho$ = Encoder.prototype.beginCollection_szpzho$;
  TaggedEncoder.prototype.encodeSerializableValue_tf03ej$ = Encoder.prototype.encodeSerializableValue_tf03ej$;
  TaggedEncoder.prototype.encodeNullableSerializableValue_f4686g$ = Encoder.prototype.encodeNullableSerializableValue_f4686g$;
  TaggedEncoder.prototype.shouldEncodeElementDefault_szpzho$ = CompositeEncoder.prototype.shouldEncodeElementDefault_szpzho$;
  TaggedDecoder.prototype.decodeSerializableValue_w63s0f$ = Decoder.prototype.decodeSerializableValue_w63s0f$;
  TaggedDecoder.prototype.decodeNullableSerializableValue_aae3ea$ = Decoder.prototype.decodeNullableSerializableValue_aae3ea$;
  TaggedDecoder.prototype.decodeSequentially = CompositeDecoder.prototype.decodeSequentially;
  TaggedDecoder.prototype.decodeCollectionSize_24f42q$ = CompositeDecoder.prototype.decodeCollectionSize_24f42q$;
  TaggedDecoder.prototype.decodeSerializableElement_12e8id$ = CompositeDecoder.prototype.decodeSerializableElement_12e8id$;
  TaggedDecoder.prototype.decodeNullableSerializableElement_8viuyw$ = CompositeDecoder.prototype.decodeNullableSerializableElement_8viuyw$;
  overwriteWith$lambda$ObjectLiteral.prototype.polymorphicDefault_yd5wsm$ = SerializersModuleCollector.prototype.polymorphicDefault_yd5wsm$;
  SerializersModuleBuilder.prototype.polymorphicDefault_yd5wsm$ = SerializersModuleCollector.prototype.polymorphicDefault_yd5wsm$;
  decodeMethodDeprecated = 'Please migrate to decodeElement method which accepts old value.' + 'Feel free to ignore it if your format does not support updates.';
  ARRAY_NAME = 'kotlin.Array';
  ARRAY_LIST_NAME = 'kotlin.collections.ArrayList';
  LINKED_HASH_SET_NAME = 'kotlin.collections.LinkedHashSet';
  HASH_SET_NAME = 'kotlin.collections.HashSet';
  LINKED_HASH_MAP_NAME = 'kotlin.collections.LinkedHashMap';
  HASH_MAP_NAME = 'kotlin.collections.HashMap';
  EMPTY_DESCRIPTOR_ARRAY = [];
  EMPTY_SERIALIZER_ARRAY = [];
  INITIAL_SIZE = 10;
  BUILTIN_SERIALIZERS = mapOf([to(PrimitiveClasses$stringClass, serializer_13(kotlin_js_internal_StringCompanionObject)), to(getKClass(Char), serializer_4(kotlin_js_internal_CharCompanionObject)), to(PrimitiveClasses$charArrayClass, CharArraySerializer()), to(PrimitiveClasses$doubleClass, serializer_10(kotlin_js_internal_DoubleCompanionObject)), to(PrimitiveClasses$doubleArrayClass, DoubleArraySerializer()), to(PrimitiveClasses$floatClass, serializer_9(kotlin_js_internal_FloatCompanionObject)), to(PrimitiveClasses$floatArrayClass, FloatArraySerializer()), to(getKClass(Long), serializer_8(kotlin_js_internal_LongCompanionObject)), to(PrimitiveClasses$longArrayClass, LongArraySerializer()), to(PrimitiveClasses$intClass, serializer_7(kotlin_js_internal_IntCompanionObject)), to(PrimitiveClasses$intArrayClass, IntArraySerializer()), to(PrimitiveClasses$shortClass, serializer_6(kotlin_js_internal_ShortCompanionObject)), to(PrimitiveClasses$shortArrayClass, ShortArraySerializer()), to(PrimitiveClasses$byteClass, serializer_5(kotlin_js_internal_ByteCompanionObject)), to(PrimitiveClasses$byteArrayClass, ByteArraySerializer()), to(PrimitiveClasses$booleanClass, serializer_11(kotlin_js_internal_BooleanCompanionObject)), to(PrimitiveClasses$booleanArrayClass, BooleanArraySerializer()), to(getKClass(Object.getPrototypeOf(kotlin.Unit).constructor), serializer_12(Unit))]);
  NULL = new Any();
  deprecationMessage = 'This class is used only by the plugin in generated code and should not be used directly. Use corresponding factory functions instead';
  EmptySerializersModule = new SerialModuleImpl(emptyMap(), emptyMap(), emptyMap(), emptyMap(), emptyMap());
  Kotlin.defineModule('kotlinx-serialization-kotlinx-serialization-core-js-legacy', _);
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core-js-legacy.js.map
