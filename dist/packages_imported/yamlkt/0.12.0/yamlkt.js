(function (_, Kotlin, $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Unit = Kotlin.kotlin.Unit;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var Map = Kotlin.kotlin.collections.Map;
  var toString = Kotlin.toString;
  var throwCCE = Kotlin.throwCCE;
  var List = Kotlin.kotlin.collections.List;
  var PrimitiveClasses$anyClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.anyClass;
  var overwriteWith = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.modules.overwriteWith_nz2fmb$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var StringFormat = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.StringFormat;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  var SerializersModuleBuilder_init = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.modules.SerializersModuleBuilder;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Result = Kotlin.kotlin.Result;
  var Throwable = Error;
  var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
  var Any = Object;
  var Annotation = Kotlin.kotlin.Annotation;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var SerializationException_init = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.SerializationException_init_wspj0f$;
  var SerializationException = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.SerializationException;
  var ensureNotNull = Kotlin.ensureNotNull;
  var SerialKind = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.descriptors.SerialKind;
  var buildSerialDescriptor = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.descriptors.buildSerialDescriptor_2yu4m$;
  var KSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.KSerializer;
  var wrapFunction = Kotlin.wrapFunction;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var equals = Kotlin.equals;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var toByte = Kotlin.kotlin.text.toByte_pdl1vz$;
  var toShort = Kotlin.kotlin.text.toShort_pdl1vz$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var toLong = Kotlin.kotlin.text.toLong_pdl1vz$;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var toByteOrNull = Kotlin.kotlin.text.toByteOrNull_pdl1vz$;
  var toShortOrNull = Kotlin.kotlin.text.toShortOrNull_pdl1vz$;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var toLongOrNull = Kotlin.kotlin.text.toLongOrNull_pdl1vz$;
  var toDoubleOrNull = Kotlin.kotlin.text.toDoubleOrNull_pdl1vz$;
  var SerializerFactory = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal.SerializerFactory;
  var NoSuchElementException = Kotlin.kotlin.NoSuchElementException;
  var map = Kotlin.kotlin.sequences.map_z5avom$;
  var toList = Kotlin.kotlin.sequences.toList_veqyi0$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var unboxChar = Kotlin.unboxChar;
  var PrimitiveClasses$byteClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.byteClass;
  var PrimitiveClasses$shortClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.shortClass;
  var PrimitiveClasses$intClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.intClass;
  var getKClass = Kotlin.getKClass;
  var Long = Kotlin.Long;
  var PrimitiveClasses$floatClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.floatClass;
  var PrimitiveClasses$doubleClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.doubleClass;
  var singleOrNull = Kotlin.kotlin.text.singleOrNull_gw00vp$;
  var Char = Kotlin.BoxedChar;
  var toBoolean = Kotlin.kotlin.text.toBoolean_5cw0du$;
  var PrimitiveClasses$booleanClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.booleanClass;
  var PrimitiveClasses$stringClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.stringClass;
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var toBoxedChar = Kotlin.toBoxedChar;
  var kotlin_js_internal_StringCompanionObject = Kotlin.kotlin.js.internal.StringCompanionObject;
  var serializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.builtins.serializer_6eet4j$;
  var ListSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.builtins.ListSerializer_swdriu$;
  var MapSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.builtins.MapSerializer_2yqygg$;
  var get_indices = Kotlin.kotlin.text.get_indices_gw00vp$;
  var coerceIn = Kotlin.kotlin.ranges.coerceIn_nayhkp$;
  var Pair = Kotlin.kotlin.Pair;
  var coerceAtMost = Kotlin.kotlin.ranges.coerceAtMost_dqglrj$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var takeLast = Kotlin.kotlin.text.takeLast_6ic1pp$;
  var take = Kotlin.kotlin.text.take_6ic1pp$;
  var L0 = Kotlin.Long.ZERO;
  var CharRange = Kotlin.kotlin.ranges.CharRange;
  var L_128 = Kotlin.Long.fromInt(-128);
  var L127 = Kotlin.Long.fromInt(127);
  var toByte_0 = Kotlin.toByte;
  var L_32768 = Kotlin.Long.fromInt(-32768);
  var L32767 = Kotlin.Long.fromInt(32767);
  var toShort_0 = Kotlin.toShort;
  var L_2147483648 = Kotlin.Long.fromInt(-2147483648);
  var L2147483647 = Kotlin.Long.fromInt(2147483647);
  var Array_0 = Array;
  var JsMath = Math;
  var doubleToULong = Kotlin.kotlin.doubleToULong_14dthe$;
  var print = Kotlin.kotlin.io.print_s8jyv4$;
  var repeat = Kotlin.kotlin.text.repeat_94bcnn$;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var Long$Companion$MIN_VALUE = Kotlin.Long.MIN_VALUE;
  var Long$Companion$MAX_VALUE = Kotlin.Long.MAX_VALUE;
  var rangeTo = Kotlin.kotlin.ranges.rangeTo_38ydlf$;
  var contains = Kotlin.kotlin.text.contains_sgbm27$;
  var numberToInt = Kotlin.numberToInt;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var PairSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.builtins.PairSerializer_2yqygg$;
  var TripleSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.builtins.TripleSerializer_jww85o$;
  var MapEntrySerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.builtins.MapEntrySerializer_2yqygg$;
  var kotlin_js_internal_IntCompanionObject = Kotlin.kotlin.js.internal.IntCompanionObject;
  var serializer_0 = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.builtins.serializer_qn7glr$;
  var kotlin_js_internal_DoubleCompanionObject = Kotlin.kotlin.js.internal.DoubleCompanionObject;
  var serializer_1 = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.builtins.serializer_6a53gt$;
  var kotlin_js_internal_FloatCompanionObject = Kotlin.kotlin.js.internal.FloatCompanionObject;
  var serializer_2 = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.builtins.serializer_y9phqa$;
  var kotlin_js_internal_ByteCompanionObject = Kotlin.kotlin.js.internal.ByteCompanionObject;
  var serializer_3 = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.builtins.serializer_k5zfx8$;
  var kotlin_js_internal_ShortCompanionObject = Kotlin.kotlin.js.internal.ShortCompanionObject;
  var serializer_4 = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.builtins.serializer_qetqea$;
  var kotlin_js_internal_CharCompanionObject = Kotlin.kotlin.js.internal.CharCompanionObject;
  var serializer_5 = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.builtins.serializer_n24eoe$;
  var kotlin_js_internal_LongCompanionObject = Kotlin.kotlin.js.internal.LongCompanionObject;
  var serializer_6 = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.builtins.serializer_vbrujs$;
  var ArraySerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.builtins.ArraySerializer_8tn5u0$;
  var toChar = Kotlin.toChar;
  var getCallableRef = Kotlin.getCallableRef;
  var isWhitespace = Kotlin.kotlin.text.isWhitespace_myv2d0$;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_8ujjk8$;
  var first = Kotlin.kotlin.text.first_gw00vp$;
  var last = Kotlin.kotlin.text.last_gw00vp$;
  var trimIndent = Kotlin.kotlin.text.trimIndent_pdl1vz$;
  var trimEnd = Kotlin.kotlin.text.trimEnd_gw00vp$;
  var Encoder = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.encoding.Encoder;
  var Decoder = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.encoding.Decoder;
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init_pdl1vj$;
  var CompositeDecoder = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.encoding.CompositeDecoder;
  var UInt_init = Kotlin.kotlin.UInt;
  var ULong_init = Kotlin.kotlin.ULong;
  var UByte_init = Kotlin.kotlin.UByte;
  var UShort_init = Kotlin.kotlin.UShort;
  var copyOf = Kotlin.kotlin.collections.copyOf_gtcw5h$;
  var concatToString = Kotlin.kotlin.text.concatToString_wlitf7$;
  var copyOf_0 = Kotlin.kotlin.collections.copyOf_8ujjk8$;
  var NoSuchElementException_init = Kotlin.kotlin.NoSuchElementException_init;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_m7z4lg$;
  var Nothing = Kotlin.kotlin.Nothing;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var StructureKind = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.descriptors.StructureKind;
  var PolymorphicKind = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.descriptors.PolymorphicKind;
  var equals_0 = Kotlin.kotlin.text.equals_igcy3c$;
  var SerializationException_init_0 = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.SerializationException_init_pdl1vj$;
  var lineSequence = Kotlin.kotlin.text.lineSequence_gw00vp$;
  var kotlin_js_internal_BooleanCompanionObject = Kotlin.kotlin.js.internal.BooleanCompanionObject;
  var serializer_7 = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.builtins.serializer_jtjczu$;
  var AbstractEncoder = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.encoding.AbstractEncoder;
  var CompositeEncoder = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.encoding.CompositeEncoder;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  var IntArraySerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.builtins.IntArraySerializer;
  var PrimitiveClasses$intArrayClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.intArrayClass;
  var ShortArraySerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.builtins.ShortArraySerializer;
  var PrimitiveClasses$shortArrayClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.shortArrayClass;
  var ByteArraySerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.builtins.ByteArraySerializer;
  var PrimitiveClasses$byteArrayClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.byteArrayClass;
  var LongArraySerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.builtins.LongArraySerializer;
  var PrimitiveClasses$longArrayClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.longArrayClass;
  var CharArraySerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.builtins.CharArraySerializer;
  var PrimitiveClasses$charArrayClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.charArrayClass;
  var FloatArraySerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.builtins.FloatArraySerializer;
  var PrimitiveClasses$floatArrayClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.floatArrayClass;
  var DoubleArraySerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.builtins.DoubleArraySerializer;
  var PrimitiveClasses$doubleArrayClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.doubleArrayClass;
  var BooleanArraySerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.builtins.BooleanArraySerializer;
  var PrimitiveClasses$booleanArrayClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.booleanArrayClass;
  var Triple = Kotlin.kotlin.Triple;
  var PrimitiveClasses$arrayClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.arrayClass;
  var Map$Entry = Kotlin.kotlin.collections.Map.Entry;
  var serializerOrNull = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.serializerOrNull_1yb8b7$;
  Yaml$Default.prototype = Object.create(Yaml.prototype);
  Yaml$Default.prototype.constructor = Yaml$Default;
  YamlImpl.prototype = Object.create(Yaml.prototype);
  YamlImpl.prototype.constructor = YamlImpl;
  YamlBuilder$StringSerialization.prototype = Object.create(Enum.prototype);
  YamlBuilder$StringSerialization.prototype.constructor = YamlBuilder$StringSerialization;
  YamlBuilder$NullSerialization.prototype = Object.create(Enum.prototype);
  YamlBuilder$NullSerialization.prototype.constructor = YamlBuilder$NullSerialization;
  YamlBuilder$MapSerialization.prototype = Object.create(Enum.prototype);
  YamlBuilder$MapSerialization.prototype.constructor = YamlBuilder$MapSerialization;
  YamlBuilder$ListSerialization.prototype = Object.create(Enum.prototype);
  YamlBuilder$ListSerialization.prototype.constructor = YamlBuilder$ListSerialization;
  YamlDecodingException.prototype = Object.create(SerializationException.prototype);
  YamlDecodingException.prototype.constructor = YamlDecodingException;
  YamlPrimitive.prototype = Object.create(YamlElement.prototype);
  YamlPrimitive.prototype.constructor = YamlPrimitive;
  YamlLiteral.prototype = Object.create(YamlPrimitive.prototype);
  YamlLiteral.prototype.constructor = YamlLiteral;
  YamlNull.prototype = Object.create(YamlPrimitive.prototype);
  YamlNull.prototype.constructor = YamlNull;
  YamlMap.prototype = Object.create(YamlElement.prototype);
  YamlMap.prototype.constructor = YamlMap;
  YamlList.prototype = Object.create(YamlElement.prototype);
  YamlList.prototype.constructor = YamlList;
  Token.prototype = Object.create(Enum.prototype);
  Token.prototype.constructor = Token;
  TokenStream.prototype = Object.create(StringBufHolder.prototype);
  TokenStream.prototype.constructor = TokenStream;
  YamlDecoder$Kind.prototype = Object.create(Enum.prototype);
  YamlDecoder$Kind.prototype.constructor = YamlDecoder$Kind;
  YamlDecoder$IndentedDecoder.prototype = Object.create(YamlDecoder$AbstractDecoder.prototype);
  YamlDecoder$IndentedDecoder.prototype.constructor = YamlDecoder$IndentedDecoder;
  YamlDecoder$EmptyClassDecoder.prototype = Object.create(YamlDecoder$AbstractDecoder.prototype);
  YamlDecoder$EmptyClassDecoder.prototype.constructor = YamlDecoder$EmptyClassDecoder;
  YamlDecoder$BlockClassDecoder.prototype = Object.create(YamlDecoder$IndentedDecoder.prototype);
  YamlDecoder$BlockClassDecoder.prototype.constructor = YamlDecoder$BlockClassDecoder;
  YamlDecoder$BlockMapDecoder.prototype = Object.create(YamlDecoder$IndentedDecoder.prototype);
  YamlDecoder$BlockMapDecoder.prototype.constructor = YamlDecoder$BlockMapDecoder;
  YamlDecoder$FlowMapDecoder.prototype = Object.create(YamlDecoder$AbstractDecoder.prototype);
  YamlDecoder$FlowMapDecoder.prototype.constructor = YamlDecoder$FlowMapDecoder;
  YamlDecoder$FlowClassDecoder.prototype = Object.create(YamlDecoder$AbstractDecoder.prototype);
  YamlDecoder$FlowClassDecoder.prototype.constructor = YamlDecoder$FlowClassDecoder;
  YamlDecoder$FlowSequenceDecoder.prototype = Object.create(YamlDecoder$AbstractDecoder.prototype);
  YamlDecoder$FlowSequenceDecoder.prototype.constructor = YamlDecoder$FlowSequenceDecoder;
  YamlDecoder$BlockSequenceDecoder.prototype = Object.create(YamlDecoder$IndentedDecoder.prototype);
  YamlDecoder$BlockSequenceDecoder.prototype.constructor = YamlDecoder$BlockSequenceDecoder;
  YamlDecoder$YamlStringDecoder.prototype = Object.create(YamlDecoder$AbstractDecoder.prototype);
  YamlDecoder$YamlStringDecoder.prototype.constructor = YamlDecoder$YamlStringDecoder;
  YamlDecoder$YamlNullStringDecoder.prototype = Object.create(YamlDecoder$AbstractDecoder.prototype);
  YamlDecoder$YamlNullStringDecoder.prototype.constructor = YamlDecoder$YamlNullStringDecoder;
  YamlEncoder$FlowEncoder.prototype = Object.create(YamlEncoder$AbstractEncoder.prototype);
  YamlEncoder$FlowEncoder.prototype.constructor = YamlEncoder$FlowEncoder;
  YamlEncoder$FlowMapOrClassEncoder.prototype = Object.create(YamlEncoder$FlowEncoder.prototype);
  YamlEncoder$FlowMapOrClassEncoder.prototype.constructor = YamlEncoder$FlowMapOrClassEncoder;
  YamlEncoder$FlowSequenceEncoder.prototype = Object.create(YamlEncoder$FlowEncoder.prototype);
  YamlEncoder$FlowSequenceEncoder.prototype.constructor = YamlEncoder$FlowSequenceEncoder;
  YamlEncoder$EmptySequenceEncoder.prototype = Object.create(YamlEncoder$FlowEncoder.prototype);
  YamlEncoder$EmptySequenceEncoder.prototype.constructor = YamlEncoder$EmptySequenceEncoder;
  YamlEncoder$BlockEncoder.prototype = Object.create(YamlEncoder$AbstractEncoder.prototype);
  YamlEncoder$BlockEncoder.prototype.constructor = YamlEncoder$BlockEncoder;
  YamlEncoder$BlockSequenceEncoder.prototype = Object.create(YamlEncoder$BlockEncoder.prototype);
  YamlEncoder$BlockSequenceEncoder.prototype.constructor = YamlEncoder$BlockSequenceEncoder;
  YamlEncoder$BlockMapOrClassEncoder.prototype = Object.create(YamlEncoder$BlockEncoder.prototype);
  YamlEncoder$BlockMapOrClassEncoder.prototype.constructor = YamlEncoder$BlockMapOrClassEncoder;
  YamlEncoder$AbstractEncoder$encodeInlineElement$ObjectLiteral.prototype = Object.create(AbstractEncoder.prototype);
  YamlEncoder$AbstractEncoder$encodeInlineElement$ObjectLiteral.prototype.constructor = YamlEncoder$AbstractEncoder$encodeInlineElement$ObjectLiteral;
  function Yaml(configuration, serializersModule) {
    Yaml$Default_getInstance();
    if (serializersModule === void 0) {
      var builder = new SerializersModuleBuilder_init();
      builder.contextual_cfhkba$(PrimitiveClasses$anyClass, YamlDynamicSerializer_getInstance());
      serializersModule = overwriteWith(builder.build(), configuration.serializersModule);
    }
    this.configuration_8be2vx$ = configuration;
    this.serializersModule_ayqkre$_0 = serializersModule;
  }
  Object.defineProperty(Yaml.prototype, 'serializersModule', {
    get: function () {
      return this.serializersModule_ayqkre$_0;
    }
  });
  function Yaml$Default() {
    Yaml$Default_instance = this;
    Yaml.call(this, new YamlConfigurationInternal());
    this.nonStrict = Yaml_0(void 0, Yaml$Default$nonStrict$lambda);
  }
  Object.defineProperty(Yaml$Default.prototype, 'default', {
    configurable: true,
    get: function () {
      return Yaml$Default_getInstance();
    }
  });
  function Yaml$Default$nonStrict$lambda($receiver) {
    $receiver.nonStrictNumber = true;
    $receiver.nonStrictNullability = true;
    return Unit;
  }
  Yaml$Default.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Default',
    interfaces: [Yaml]
  };
  var Yaml$Default_instance = null;
  function Yaml$Default_getInstance() {
    if (Yaml$Default_instance === null) {
      new Yaml$Default();
    }
    return Yaml$Default_instance;
  }
  Yaml.prototype.encodeToString_tf03ej$ = function (serializer, value) {
    var sb = StringBuilder_init();
    var tmp$;
    try {
      serializer.serialize_55azsf$(new YamlEncoder(this.configuration_8be2vx$, this.serializersModule, new YamlWriter(sb)), value);
      tmp$ = new Result(Unit);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        tmp$ = new Result(createFailure(e));
      } else
        throw e;
    }
    var $receiver = tmp$;
    var tmp$_0, tmp$_0_0;
    var exception = $receiver.exceptionOrNull();
    if (exception == null) {
      (tmp$_0 = $receiver.value) == null || Kotlin.isType(tmp$_0, Any) || throwCCE();
      return sb.toString();
    } else {
      var $this = Debugging_getInstance();
      logCustom_h4ejuu$break: do {
        if (!$this.enabled_8be2vx$)
          break logCustom_h4ejuu$break;
        println($this.space_0($this.logIndent) + ('[Debugging] Printed:' + '\n' + '\n' + '```' + '\n' + sb + '\n' + '```'));
      }
       while (false);
      throw exception;
    }
  };
  Yaml.prototype.encodeToString_s8jyv4$ = function (value) {
    return this.encodeToString_tf03ej$(YamlNullableDynamicSerializer_getInstance(), value);
  };
  Yaml.prototype.decodeFromString_awif5v$ = function (deserializer, string) {
    return deserializer.deserialize_bq71mq$(new YamlDecoder(this.configuration_8be2vx$, new TokenStream(string), this.serializersModule));
  };
  Yaml.prototype.decodeYamlFromString_61zpoe$ = function (yamlContent) {
    return this.decodeFromString_awif5v$(YamlElement$Companion_getInstance().serializer(), yamlContent);
  };
  Yaml.prototype.decodeYamlMapFromString_61zpoe$ = function (yamlContent) {
    return this.decodeFromString_awif5v$(YamlMap$Companion_getInstance().serializer(), yamlContent);
  };
  Yaml.prototype.decodeYamlListFromString_61zpoe$ = function (yamlContent) {
    return this.decodeFromString_awif5v$(YamlList$Companion_getInstance().serializer(), yamlContent);
  };
  Yaml.prototype.decodeMapFromString_61zpoe$ = function (yamlContent) {
    var tmp$, tmp$_0;
    var v = parseMapOrNullImpl(this, yamlContent);
    if (v == null)
      throw IllegalArgumentException_init('Cannot cast `null` to Map<String, Any?>');
    else if (Kotlin.isType(v, Map))
      tmp$ = v;
    else {
      throw IllegalArgumentException_init('Cannot cast ' + toString(Kotlin.getKClassFromExpression(v).simpleName) + ' to Map<String, Any?>');
    }
    return Kotlin.isType(tmp$_0 = tmp$, Map) ? tmp$_0 : throwCCE();
  };
  Yaml.prototype.decodeListFromString_61zpoe$ = function (yamlContent) {
    var v = this.decodeFromString_awif5v$(YamlNullableDynamicSerializer_getInstance(), yamlContent);
    if (Kotlin.isType(v, List))
      return v;
    else {
      throw IllegalArgumentException_init('Cannot cast ' + toString(v != null ? Kotlin.getKClassFromExpression(v).simpleName : null) + ' to List<Any?>');
    }
  };
  Yaml.prototype.decodeAnyFromString_61zpoe$ = function (yamlContent) {
    return this.decodeFromString_awif5v$(YamlNullableDynamicSerializer_getInstance(), yamlContent);
  };
  Yaml.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Yaml',
    interfaces: [StringFormat]
  };
  function YamlImpl(configuration) {
    Yaml.call(this, configuration);
  }
  YamlImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'YamlImpl',
    interfaces: [Yaml]
  };
  function Yaml$lambda($receiver) {
    return Unit;
  }
  function Yaml_0(from, configuration) {
    if (from === void 0)
      from = Yaml$Default_getInstance();
    if (configuration === void 0)
      configuration = Yaml$lambda;
    var $receiver = new YamlBuilder(from.configuration_8be2vx$);
    configuration($receiver);
    return new YamlImpl($receiver.build());
  }
  function parseMapOrNullImpl($receiver, yamlContent) {
    var tmp$;
    var v = $receiver.decodeFromString_awif5v$(YamlNullableDynamicSerializer_getInstance(), yamlContent);
    if (Kotlin.isType(v, Map)) {
      var result = LinkedHashMap_init(v.size);
      var tmp$_0;
      tmp$_0 = v.entries.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        var key = element.key;
        var value = element.value;
        var key_0 = key != null ? key.toString() : null;
        result.put_xwzc9p$(key_0, value);
      }
      tmp$ = result;
    } else
      tmp$ = v;
    return tmp$;
  }
  function Comment(lines) {
    this.lines = lines;
  }
  Comment.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Comment',
    interfaces: [Annotation]
  };
  function YamlBuilder(conf) {
    this.serializersModule = conf.serializersModule;
    this.nonStrictNullability = conf.nonStrictNullability;
    this.nonStrictNumber = conf.nonStrictNumber;
    this.encodeDefaultValues = conf.encodeDefaultValues;
    this.stringSerialization = conf.stringSerialization;
    this.nullSerialization = conf.nullSerialization;
    this.mapSerialization = conf.mapSerialization;
    this.classSerialization = conf.classSerialization;
    this.listSerialization = conf.listSerialization;
  }
  function YamlBuilder$StringSerialization(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function YamlBuilder$StringSerialization_initFields() {
    YamlBuilder$StringSerialization_initFields = function () {
    };
    YamlBuilder$StringSerialization$SINGLE_QUOTATION_instance = new YamlBuilder$StringSerialization('SINGLE_QUOTATION', 0);
    YamlBuilder$StringSerialization$DOUBLE_QUOTATION_instance = new YamlBuilder$StringSerialization('DOUBLE_QUOTATION', 1);
    YamlBuilder$StringSerialization$NONE_instance = new YamlBuilder$StringSerialization('NONE', 2);
    YamlBuilder$StringSerialization$BEST_PERFORMANCE_instance = new YamlBuilder$StringSerialization('BEST_PERFORMANCE', 3);
  }
  var YamlBuilder$StringSerialization$SINGLE_QUOTATION_instance;
  function YamlBuilder$StringSerialization$SINGLE_QUOTATION_getInstance() {
    YamlBuilder$StringSerialization_initFields();
    return YamlBuilder$StringSerialization$SINGLE_QUOTATION_instance;
  }
  var YamlBuilder$StringSerialization$DOUBLE_QUOTATION_instance;
  function YamlBuilder$StringSerialization$DOUBLE_QUOTATION_getInstance() {
    YamlBuilder$StringSerialization_initFields();
    return YamlBuilder$StringSerialization$DOUBLE_QUOTATION_instance;
  }
  var YamlBuilder$StringSerialization$NONE_instance;
  function YamlBuilder$StringSerialization$NONE_getInstance() {
    YamlBuilder$StringSerialization_initFields();
    return YamlBuilder$StringSerialization$NONE_instance;
  }
  var YamlBuilder$StringSerialization$BEST_PERFORMANCE_instance;
  function YamlBuilder$StringSerialization$BEST_PERFORMANCE_getInstance() {
    YamlBuilder$StringSerialization_initFields();
    return YamlBuilder$StringSerialization$BEST_PERFORMANCE_instance;
  }
  YamlBuilder$StringSerialization.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StringSerialization',
    interfaces: [Enum]
  };
  function YamlBuilder$StringSerialization$values() {
    return [YamlBuilder$StringSerialization$SINGLE_QUOTATION_getInstance(), YamlBuilder$StringSerialization$DOUBLE_QUOTATION_getInstance(), YamlBuilder$StringSerialization$NONE_getInstance(), YamlBuilder$StringSerialization$BEST_PERFORMANCE_getInstance()];
  }
  YamlBuilder$StringSerialization.values = YamlBuilder$StringSerialization$values;
  function YamlBuilder$StringSerialization$valueOf(name) {
    switch (name) {
      case 'SINGLE_QUOTATION':
        return YamlBuilder$StringSerialization$SINGLE_QUOTATION_getInstance();
      case 'DOUBLE_QUOTATION':
        return YamlBuilder$StringSerialization$DOUBLE_QUOTATION_getInstance();
      case 'NONE':
        return YamlBuilder$StringSerialization$NONE_getInstance();
      case 'BEST_PERFORMANCE':
        return YamlBuilder$StringSerialization$BEST_PERFORMANCE_getInstance();
      default:
        throwISE('No enum constant net.mamoe.yamlkt.YamlBuilder.StringSerialization.' + name);
    }
  }
  YamlBuilder$StringSerialization.valueOf_61zpoe$ = YamlBuilder$StringSerialization$valueOf;
  function YamlBuilder$NullSerialization(name, ordinal, value) {
    Enum.call(this);
    this.value = value;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function YamlBuilder$NullSerialization_initFields() {
    YamlBuilder$NullSerialization_initFields = function () {
    };
    YamlBuilder$NullSerialization$TILDE_instance = new YamlBuilder$NullSerialization('TILDE', 0, '~');
    YamlBuilder$NullSerialization$NULL_instance = new YamlBuilder$NullSerialization('NULL', 1, 'null');
  }
  var YamlBuilder$NullSerialization$TILDE_instance;
  function YamlBuilder$NullSerialization$TILDE_getInstance() {
    YamlBuilder$NullSerialization_initFields();
    return YamlBuilder$NullSerialization$TILDE_instance;
  }
  var YamlBuilder$NullSerialization$NULL_instance;
  function YamlBuilder$NullSerialization$NULL_getInstance() {
    YamlBuilder$NullSerialization_initFields();
    return YamlBuilder$NullSerialization$NULL_instance;
  }
  YamlBuilder$NullSerialization.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NullSerialization',
    interfaces: [Enum]
  };
  function YamlBuilder$NullSerialization$values() {
    return [YamlBuilder$NullSerialization$TILDE_getInstance(), YamlBuilder$NullSerialization$NULL_getInstance()];
  }
  YamlBuilder$NullSerialization.values = YamlBuilder$NullSerialization$values;
  function YamlBuilder$NullSerialization$valueOf(name) {
    switch (name) {
      case 'TILDE':
        return YamlBuilder$NullSerialization$TILDE_getInstance();
      case 'NULL':
        return YamlBuilder$NullSerialization$NULL_getInstance();
      default:
        throwISE('No enum constant net.mamoe.yamlkt.YamlBuilder.NullSerialization.' + name);
    }
  }
  YamlBuilder$NullSerialization.valueOf_61zpoe$ = YamlBuilder$NullSerialization$valueOf;
  function YamlBuilder$MapSerialization(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function YamlBuilder$MapSerialization_initFields() {
    YamlBuilder$MapSerialization_initFields = function () {
    };
    YamlBuilder$MapSerialization$BLOCK_MAP_instance = new YamlBuilder$MapSerialization('BLOCK_MAP', 0);
    YamlBuilder$MapSerialization$FLOW_MAP_instance = new YamlBuilder$MapSerialization('FLOW_MAP', 1);
  }
  var YamlBuilder$MapSerialization$BLOCK_MAP_instance;
  function YamlBuilder$MapSerialization$BLOCK_MAP_getInstance() {
    YamlBuilder$MapSerialization_initFields();
    return YamlBuilder$MapSerialization$BLOCK_MAP_instance;
  }
  var YamlBuilder$MapSerialization$FLOW_MAP_instance;
  function YamlBuilder$MapSerialization$FLOW_MAP_getInstance() {
    YamlBuilder$MapSerialization_initFields();
    return YamlBuilder$MapSerialization$FLOW_MAP_instance;
  }
  YamlBuilder$MapSerialization.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MapSerialization',
    interfaces: [Enum]
  };
  function YamlBuilder$MapSerialization$values() {
    return [YamlBuilder$MapSerialization$BLOCK_MAP_getInstance(), YamlBuilder$MapSerialization$FLOW_MAP_getInstance()];
  }
  YamlBuilder$MapSerialization.values = YamlBuilder$MapSerialization$values;
  function YamlBuilder$MapSerialization$valueOf(name) {
    switch (name) {
      case 'BLOCK_MAP':
        return YamlBuilder$MapSerialization$BLOCK_MAP_getInstance();
      case 'FLOW_MAP':
        return YamlBuilder$MapSerialization$FLOW_MAP_getInstance();
      default:
        throwISE('No enum constant net.mamoe.yamlkt.YamlBuilder.MapSerialization.' + name);
    }
  }
  YamlBuilder$MapSerialization.valueOf_61zpoe$ = YamlBuilder$MapSerialization$valueOf;
  function YamlBuilder$ListSerialization(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function YamlBuilder$ListSerialization_initFields() {
    YamlBuilder$ListSerialization_initFields = function () {
    };
    YamlBuilder$ListSerialization$BLOCK_SEQUENCE_instance = new YamlBuilder$ListSerialization('BLOCK_SEQUENCE', 0);
    YamlBuilder$ListSerialization$FLOW_SEQUENCE_instance = new YamlBuilder$ListSerialization('FLOW_SEQUENCE', 1);
    YamlBuilder$ListSerialization$AUTO_instance = new YamlBuilder$ListSerialization('AUTO', 2);
  }
  var YamlBuilder$ListSerialization$BLOCK_SEQUENCE_instance;
  function YamlBuilder$ListSerialization$BLOCK_SEQUENCE_getInstance() {
    YamlBuilder$ListSerialization_initFields();
    return YamlBuilder$ListSerialization$BLOCK_SEQUENCE_instance;
  }
  var YamlBuilder$ListSerialization$FLOW_SEQUENCE_instance;
  function YamlBuilder$ListSerialization$FLOW_SEQUENCE_getInstance() {
    YamlBuilder$ListSerialization_initFields();
    return YamlBuilder$ListSerialization$FLOW_SEQUENCE_instance;
  }
  var YamlBuilder$ListSerialization$AUTO_instance;
  function YamlBuilder$ListSerialization$AUTO_getInstance() {
    YamlBuilder$ListSerialization_initFields();
    return YamlBuilder$ListSerialization$AUTO_instance;
  }
  YamlBuilder$ListSerialization.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ListSerialization',
    interfaces: [Enum]
  };
  function YamlBuilder$ListSerialization$values() {
    return [YamlBuilder$ListSerialization$BLOCK_SEQUENCE_getInstance(), YamlBuilder$ListSerialization$FLOW_SEQUENCE_getInstance(), YamlBuilder$ListSerialization$AUTO_getInstance()];
  }
  YamlBuilder$ListSerialization.values = YamlBuilder$ListSerialization$values;
  function YamlBuilder$ListSerialization$valueOf(name) {
    switch (name) {
      case 'BLOCK_SEQUENCE':
        return YamlBuilder$ListSerialization$BLOCK_SEQUENCE_getInstance();
      case 'FLOW_SEQUENCE':
        return YamlBuilder$ListSerialization$FLOW_SEQUENCE_getInstance();
      case 'AUTO':
        return YamlBuilder$ListSerialization$AUTO_getInstance();
      default:
        throwISE('No enum constant net.mamoe.yamlkt.YamlBuilder.ListSerialization.' + name);
    }
  }
  YamlBuilder$ListSerialization.valueOf_61zpoe$ = YamlBuilder$ListSerialization$valueOf;
  YamlBuilder.prototype.build = function () {
    return new YamlConfigurationInternal(this.serializersModule, this.nonStrictNullability, this.nonStrictNumber, this.encodeDefaultValues, this.stringSerialization, this.nullSerialization, this.mapSerialization, this.classSerialization, this.listSerialization);
  };
  YamlBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'YamlBuilder',
    interfaces: []
  };
  function YamlConfigurationInternal(serializersModule, nonStrictNullability, nonStrictNumber, encodeDefaultValues, stringSerialization, nullSerialization, mapSerialization, classSerialization, listSerialization) {
    if (serializersModule === void 0) {
      var builder = new SerializersModuleBuilder_init();
      serializersModule = builder.build();
    }
    if (nonStrictNullability === void 0)
      nonStrictNullability = false;
    if (nonStrictNumber === void 0)
      nonStrictNumber = false;
    if (encodeDefaultValues === void 0)
      encodeDefaultValues = true;
    if (stringSerialization === void 0)
      stringSerialization = YamlBuilder$StringSerialization$NONE_getInstance();
    if (nullSerialization === void 0)
      nullSerialization = YamlBuilder$NullSerialization$NULL_getInstance();
    if (mapSerialization === void 0)
      mapSerialization = YamlBuilder$MapSerialization$BLOCK_MAP_getInstance();
    if (classSerialization === void 0)
      classSerialization = YamlBuilder$MapSerialization$BLOCK_MAP_getInstance();
    if (listSerialization === void 0)
      listSerialization = YamlBuilder$ListSerialization$AUTO_getInstance();
    this.serializersModule = serializersModule;
    this.nonStrictNullability = nonStrictNullability;
    this.nonStrictNumber = nonStrictNumber;
    this.encodeDefaultValues = encodeDefaultValues;
    this.stringSerialization = stringSerialization;
    this.nullSerialization = nullSerialization;
    this.mapSerialization = mapSerialization;
    this.classSerialization = classSerialization;
    this.listSerialization = listSerialization;
  }
  YamlConfigurationInternal.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'YamlConfigurationInternal',
    interfaces: []
  };
  function YamlDecodingException(message, cause) {
    if (cause === void 0)
      cause = null;
    SerializationException_init(message, cause, this);
    this.name = 'YamlDecodingException';
  }
  YamlDecodingException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'YamlDecodingException',
    interfaces: [SerializationException]
  };
  var YamlNullableDynamicSerializer$decode$lambda = wrapFunction(function () {
    var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
    return function (this$YamlNullableDynamicSerializer, closure$whenNull) {
      return function ($receiver) {
        var tmp$, tmp$_0;
        switch ((Kotlin.isInstanceOf(YamlDecoder$AbstractDecoder)(tmp$ = $receiver) ? tmp$ : throwCCE()).kind.name) {
          case 'FLOW_MAP':
          case 'BLOCK_MAP':
            $receiver.dontWrapNextStructure_8be2vx$ = true;
            tmp$_0 = this$YamlNullableDynamicSerializer.mapSerializer_8be2vx$.deserialize_bq71mq$($receiver);
            break;
          case 'FLOW_SEQUENCE':
            $receiver.dontWrapNextStructure_8be2vx$ = true;
            tmp$_0 = this$YamlNullableDynamicSerializer.listSerializer_8be2vx$.deserialize_bq71mq$($receiver);
            break;
          case 'BLOCK_SEQUENCE':
            $receiver.dontWrapNextStructure_8be2vx$ = true;
            tmp$_0 = this$YamlNullableDynamicSerializer.listSerializer_8be2vx$.deserialize_bq71mq$($receiver);
            break;
          case 'STRING':
            return adjustDynamicString(ensureNotNull($receiver.parentYamlDecoder_8be2vx$.tokenStream_8be2vx$.strBuff), $receiver.parentYamlDecoder_8be2vx$.tokenStream_8be2vx$.quoted);
          case 'NULL_STRING':
            closure$whenNull($receiver);
            return null;
          default:
            throw IllegalStateException_init(('bad decoder returned: ' + $receiver).toString());
        }
        return tmp$_0;
      };
    };
  });
  function YamlDynamicSerializer() {
    YamlDynamicSerializer_instance = this;
    this.descriptor_tddpk7$_0 = buildSerialDescriptor('YamlDynamic', SerialKind.CONTEXTUAL, []);
  }
  Object.defineProperty(YamlDynamicSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_tddpk7$_0;
    }
  });
  function YamlDynamicSerializer$deserialize$lambda($receiver) {
    var hint = 'Unexpected null';
    throw contextualDecodingException_4($receiver.parentYamlDecoder_8be2vx$.tokenStream_8be2vx$, 'Top-level decoder: ' + ($receiver.name + ': ' + hint), null, -1, null);
  }
  YamlDynamicSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var $this = YamlNullableDynamicSerializer_getInstance();
    var descriptor = $this.descriptor;
    var decodeStructure$result;
    var composite = decoder.beginStructure_24f42q$(descriptor);
    var ex = null;
    try {
      var block$result;
      block$break: do {
        var tmp$, tmp$_0;
        switch ((Kotlin.isType(tmp$ = composite, YamlDecoder$AbstractDecoder) ? tmp$ : throwCCE()).kind.name) {
          case 'FLOW_MAP':
          case 'BLOCK_MAP':
            composite.dontWrapNextStructure_8be2vx$ = true;
            tmp$_0 = $this.mapSerializer_8be2vx$.deserialize_bq71mq$(composite);
            break;
          case 'FLOW_SEQUENCE':
            composite.dontWrapNextStructure_8be2vx$ = true;
            tmp$_0 = $this.listSerializer_8be2vx$.deserialize_bq71mq$(composite);
            break;
          case 'BLOCK_SEQUENCE':
            composite.dontWrapNextStructure_8be2vx$ = true;
            tmp$_0 = $this.listSerializer_8be2vx$.deserialize_bq71mq$(composite);
            break;
          case 'STRING':
            block$result = adjustDynamicString(ensureNotNull(composite.parentYamlDecoder_8be2vx$.tokenStream_8be2vx$.strBuff), composite.parentYamlDecoder_8be2vx$.tokenStream_8be2vx$.quoted);
            break block$break;
          case 'NULL_STRING':
            YamlDynamicSerializer$deserialize$lambda(composite);
            block$result = null;
            break block$break;
          default:
            throw IllegalStateException_init(('bad decoder returned: ' + composite).toString());
        }
        block$result = tmp$_0;
      }
       while (false);
      decodeStructure$result = block$result;
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
    return ensureNotNull(decodeStructure$result);
  };
  YamlDynamicSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    serializeImpl(this, encoder, value);
  };
  YamlDynamicSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'YamlDynamicSerializer',
    interfaces: [IYamlDynamicSerializer, KSerializer]
  };
  var YamlDynamicSerializer_instance = null;
  function YamlDynamicSerializer_getInstance() {
    if (YamlDynamicSerializer_instance === null) {
      new YamlDynamicSerializer();
    }
    return YamlDynamicSerializer_instance;
  }
  function asLiteral$lambda(this$asLiteral) {
    return function (it) {
      return this$asLiteral.toString() + ' is not a YamlLiteral';
    };
  }
  function YamlElement() {
    YamlElement$Companion_getInstance();
  }
  function YamlElement$Companion() {
    YamlElement$Companion_instance = this;
  }
  YamlElement$Companion.prototype.serializer = function () {
    return YamlElementSerializer_getInstance();
  };
  YamlElement$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var YamlElement$Companion_instance = null;
  function YamlElement$Companion_getInstance() {
    if (YamlElement$Companion_instance === null) {
      new YamlElement$Companion();
    }
    return YamlElement$Companion_instance;
  }
  YamlElement.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'YamlElement',
    interfaces: []
  };
  function toYamlElement($receiver) {
    var tmp$;
    tmp$ = toYamlElementOrNull($receiver);
    if (tmp$ == null) {
      throw IllegalArgumentException_init('unsupported class: ' + toString(Kotlin.getKClassFromExpression(ensureNotNull($receiver)).simpleName));
    }
    return tmp$;
  }
  function toYamlElementOrNull($receiver) {
    return asYamlElementOrNullImpl($receiver);
  }
  function isNotNull($receiver) {
    return equals($receiver, YamlNull_getInstance());
  }
  function asLiteralOrNull($receiver) {
    var tmp$;
    return Kotlin.isType(tmp$ = $receiver, YamlLiteral) ? tmp$ : null;
  }
  var asLiteral = defineInlineFunction('yamlkt.net.mamoe.yamlkt.asLiteral_5iuyvf$', wrapFunction(function () {
    var YamlLiteral = _.net.mamoe.yamlkt.YamlLiteral;
    var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
    function asLiteral$lambda(this$asLiteral) {
      return function (it) {
        return this$asLiteral.toString() + ' is not a YamlLiteral';
      };
    }
    return function ($receiver, lazyMessage) {
      if (lazyMessage === void 0)
        lazyMessage = asLiteral$lambda($receiver);
      var tmp$, tmp$_0;
      var tmp$_1;
      if ((tmp$_0 = Kotlin.isType(tmp$ = $receiver, YamlLiteral) ? tmp$ : null) != null)
        tmp$_1 = tmp$_0;
      else {
        throw IllegalStateException_init(lazyMessage($receiver).toString());
      }
      return tmp$_1;
    };
  }));
  function asPrimitiveOrNull($receiver) {
    var tmp$;
    return Kotlin.isType(tmp$ = $receiver, YamlPrimitive) ? tmp$ : null;
  }
  var asPrimitive = defineInlineFunction('yamlkt.net.mamoe.yamlkt.asPrimitive_5iuyvf$', wrapFunction(function () {
    var YamlPrimitive = _.net.mamoe.yamlkt.YamlPrimitive;
    var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
    function asPrimitive$lambda(this$asPrimitive) {
      return function (it) {
        return this$asPrimitive.toString() + ' is not a YamlPrimitive';
      };
    }
    return function ($receiver, lazyMessage) {
      if (lazyMessage === void 0)
        lazyMessage = asPrimitive$lambda($receiver);
      var tmp$, tmp$_0;
      var tmp$_1;
      if ((tmp$_0 = Kotlin.isType(tmp$ = $receiver, YamlPrimitive) ? tmp$ : null) != null)
        tmp$_1 = tmp$_0;
      else {
        throw IllegalStateException_init(lazyMessage($receiver).toString());
      }
      return tmp$_1;
    };
  }));
  function get_literalContentOrNull($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = $receiver, YamlLiteral) ? tmp$ : null) != null ? tmp$_0.content : null;
  }
  function YamlPrimitive() {
    YamlPrimitive$Companion_getInstance();
    YamlElement.call(this);
  }
  YamlPrimitive.prototype.toString = function () {
    var tmp$;
    return (tmp$ = this.content) != null ? tmp$ : 'null';
  };
  function YamlPrimitive$Companion() {
    YamlPrimitive$Companion_instance = this;
  }
  YamlPrimitive$Companion.prototype.invoke_pdl1vj$ = function (value) {
    return value == null ? YamlNull_getInstance() : new YamlLiteral(value);
  };
  YamlPrimitive$Companion.prototype.serializer = function () {
    return YamlPrimitiveSerializer_getInstance();
  };
  YamlPrimitive$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var YamlPrimitive$Companion_instance = null;
  function YamlPrimitive$Companion_getInstance() {
    if (YamlPrimitive$Companion_instance === null) {
      new YamlPrimitive$Companion();
    }
    return YamlPrimitive$Companion_instance;
  }
  YamlPrimitive.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'YamlPrimitive',
    interfaces: [YamlElement]
  };
  function isNull($receiver) {
    return equals($receiver, YamlNull_getInstance());
  }
  function isNotNull_0($receiver) {
    return equals($receiver, YamlNull_getInstance());
  }
  function asLiteralOrNull_0($receiver) {
    var tmp$;
    return Kotlin.isType(tmp$ = $receiver, YamlLiteral) ? tmp$ : null;
  }
  function YamlLiteral(content) {
    YamlLiteral$Companion_getInstance();
    YamlPrimitive.call(this);
    this.content_n2zbed$_0 = content;
  }
  Object.defineProperty(YamlLiteral.prototype, 'content', {
    get: function () {
      return this.content_n2zbed$_0;
    }
  });
  YamlLiteral.prototype.toByte = function () {
    return toByte(this.content);
  };
  YamlLiteral.prototype.toShort = function () {
    return toShort(this.content);
  };
  YamlLiteral.prototype.toInt = function () {
    return toInt(this.content);
  };
  YamlLiteral.prototype.toLong = function () {
    return toLong(this.content);
  };
  YamlLiteral.prototype.toFloat = function () {
    return toDouble(this.content);
  };
  YamlLiteral.prototype.toDouble = function () {
    return toDouble(this.content);
  };
  YamlLiteral.prototype.toBoolean = function () {
    switch (this.content) {
      case 'true':
      case 'TRUE':
        return true;
      default:
        return false;
    }
  };
  YamlLiteral.prototype.toByteOrNull = function () {
    return toByteOrNull(this.content);
  };
  YamlLiteral.prototype.toShortOrNull = function () {
    return toShortOrNull(this.content);
  };
  YamlLiteral.prototype.toIntOrNull = function () {
    return toIntOrNull(this.content);
  };
  YamlLiteral.prototype.toLongOrNull = function () {
    return toLongOrNull(this.content);
  };
  YamlLiteral.prototype.toFloatOrNull = function () {
    return toDoubleOrNull(this.content);
  };
  YamlLiteral.prototype.toDoubleOrNull = function () {
    return toDoubleOrNull(this.content);
  };
  function YamlLiteral$Companion() {
    YamlLiteral$Companion_instance = this;
  }
  YamlLiteral$Companion.prototype.serializer = function () {
    return YamlLiteralSerializer_getInstance();
  };
  YamlLiteral$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var YamlLiteral$Companion_instance = null;
  function YamlLiteral$Companion_getInstance() {
    if (YamlLiteral$Companion_instance === null) {
      new YamlLiteral$Companion();
    }
    return YamlLiteral$Companion_instance;
  }
  YamlLiteral.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'YamlLiteral',
    interfaces: [YamlPrimitive]
  };
  YamlLiteral.prototype.component1 = function () {
    return this.content;
  };
  YamlLiteral.prototype.copy_61zpoe$ = function (content) {
    return new YamlLiteral(content === void 0 ? this.content : content);
  };
  YamlLiteral.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.content) | 0;
    return result;
  };
  YamlLiteral.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.content, other.content))));
  };
  function YamlNull() {
    YamlNull_instance = this;
    YamlPrimitive.call(this);
  }
  Object.defineProperty(YamlNull.prototype, 'content', {
    configurable: true,
    get: function () {
      return null;
    }
  });
  YamlNull.prototype.equals = function (other) {
    return other === this;
  };
  YamlNull.prototype.hashCode = function () {
    return 1;
  };
  YamlNull.prototype.serializer = function () {
    return YamlNullSerializer_getInstance();
  };
  YamlNull.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'YamlNull',
    interfaces: [SerializerFactory, YamlPrimitive]
  };
  var YamlNull_instance = null;
  function YamlNull_getInstance() {
    if (YamlNull_instance === null) {
      new YamlNull();
    }
    return YamlNull_instance;
  }
  function YamlMap(content) {
    YamlMap$Companion_getInstance();
    YamlElement.call(this);
    this.content_6w515k$_0 = content;
  }
  Object.defineProperty(YamlMap.prototype, 'content', {
    get: function () {
      return this.content_6w515k$_0;
    }
  });
  YamlMap.prototype.toString = function () {
    return joinToYamlString_0(this.content);
  };
  YamlMap.prototype.get_s8jyv4$ = function (key) {
    var tmp$;
    tmp$ = this.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var k = tmp$_0.key;
      var value = tmp$_0.value;
      if (equals(k.content, key))
        return value;
    }
    return null;
  };
  YamlMap.prototype.getOrFail_s8jyv4$ = function (key) {
    var tmp$;
    tmp$ = this.get_s8jyv4$(key);
    if (tmp$ == null) {
      throw new NoSuchElementException(toString(key));
    }
    return tmp$;
  };
  YamlMap.prototype.getInt_s8jyv4$ = function (key) {
    var $receiver = this.getOrFail_s8jyv4$(key);
    var tmp$, tmp$_0;
    var tmp$_1;
    if ((tmp$_0 = Kotlin.isType(tmp$ = $receiver, YamlLiteral) ? tmp$ : null) != null)
      tmp$_1 = tmp$_0;
    else {
      throw IllegalStateException_init(asLiteral$lambda($receiver)($receiver).toString());
    }
    return toInt(tmp$_1.content);
  };
  YamlMap.prototype.getIntOrNull_s8jyv4$ = function (key) {
    var tmp$, tmp$_0, tmp$_1;
    return (tmp$_1 = (tmp$_0 = (tmp$ = this.get_s8jyv4$(key)) != null ? asPrimitiveOrNull(tmp$) : null) != null ? tmp$_0.content : null) != null ? toIntOrNull(tmp$_1) : null;
  };
  YamlMap.prototype.getDouble_s8jyv4$ = function (key) {
    var $receiver = this.getOrFail_s8jyv4$(key);
    var tmp$, tmp$_0;
    var tmp$_1;
    if ((tmp$_0 = Kotlin.isType(tmp$ = $receiver, YamlLiteral) ? tmp$ : null) != null)
      tmp$_1 = tmp$_0;
    else {
      throw IllegalStateException_init(asLiteral$lambda($receiver)($receiver).toString());
    }
    return toDouble(tmp$_1.content);
  };
  YamlMap.prototype.getDoubleOrNull_s8jyv4$ = function (key) {
    var tmp$, tmp$_0, tmp$_1;
    return (tmp$_1 = (tmp$_0 = (tmp$ = this.get_s8jyv4$(key)) != null ? asPrimitiveOrNull(tmp$) : null) != null ? tmp$_0.content : null) != null ? toDoubleOrNull(tmp$_1) : null;
  };
  YamlMap.prototype.getFloat_s8jyv4$ = function (key) {
    var $receiver = this.getOrFail_s8jyv4$(key);
    var tmp$, tmp$_0;
    var tmp$_1;
    if ((tmp$_0 = Kotlin.isType(tmp$ = $receiver, YamlLiteral) ? tmp$ : null) != null)
      tmp$_1 = tmp$_0;
    else {
      throw IllegalStateException_init(asLiteral$lambda($receiver)($receiver).toString());
    }
    return toDouble(tmp$_1.content);
  };
  YamlMap.prototype.getFloatOrNull_s8jyv4$ = function (key) {
    var tmp$, tmp$_0, tmp$_1;
    return (tmp$_1 = (tmp$_0 = (tmp$ = this.get_s8jyv4$(key)) != null ? asPrimitiveOrNull(tmp$) : null) != null ? tmp$_0.content : null) != null ? toDoubleOrNull(tmp$_1) : null;
  };
  YamlMap.prototype.getByte_s8jyv4$ = function (key) {
    var $receiver = this.getOrFail_s8jyv4$(key);
    var tmp$, tmp$_0;
    var tmp$_1;
    if ((tmp$_0 = Kotlin.isType(tmp$ = $receiver, YamlLiteral) ? tmp$ : null) != null)
      tmp$_1 = tmp$_0;
    else {
      throw IllegalStateException_init(asLiteral$lambda($receiver)($receiver).toString());
    }
    return toByte(tmp$_1.content);
  };
  YamlMap.prototype.getByteOrNull_s8jyv4$ = function (key) {
    var tmp$, tmp$_0, tmp$_1;
    return (tmp$_1 = (tmp$_0 = (tmp$ = this.get_s8jyv4$(key)) != null ? asPrimitiveOrNull(tmp$) : null) != null ? tmp$_0.content : null) != null ? toByteOrNull(tmp$_1) : null;
  };
  YamlMap.prototype.getShort_s8jyv4$ = function (key) {
    var $receiver = this.getOrFail_s8jyv4$(key);
    var tmp$, tmp$_0;
    var tmp$_1;
    if ((tmp$_0 = Kotlin.isType(tmp$ = $receiver, YamlLiteral) ? tmp$ : null) != null)
      tmp$_1 = tmp$_0;
    else {
      throw IllegalStateException_init(asLiteral$lambda($receiver)($receiver).toString());
    }
    return toShort(tmp$_1.content);
  };
  YamlMap.prototype.getShortOrNull_s8jyv4$ = function (key) {
    var tmp$, tmp$_0, tmp$_1;
    return (tmp$_1 = (tmp$_0 = (tmp$ = this.get_s8jyv4$(key)) != null ? asPrimitiveOrNull(tmp$) : null) != null ? tmp$_0.content : null) != null ? toShortOrNull(tmp$_1) : null;
  };
  YamlMap.prototype.getString_s8jyv4$ = function (key) {
    var $receiver = this.getOrFail_s8jyv4$(key);
    var tmp$, tmp$_0;
    var tmp$_1;
    if ((tmp$_0 = Kotlin.isType(tmp$ = $receiver, YamlLiteral) ? tmp$ : null) != null)
      tmp$_1 = tmp$_0;
    else {
      throw IllegalStateException_init(asLiteral$lambda($receiver)($receiver).toString());
    }
    return tmp$_1.content;
  };
  YamlMap.prototype.getStringOrNull_s8jyv4$ = function (key) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.get_s8jyv4$(key)) != null ? asPrimitiveOrNull(tmp$) : null) != null ? tmp$_0.content : null;
  };
  YamlMap.prototype.getLong_s8jyv4$ = function (key) {
    var $receiver = this.getOrFail_s8jyv4$(key);
    var tmp$, tmp$_0;
    var tmp$_1;
    if ((tmp$_0 = Kotlin.isType(tmp$ = $receiver, YamlLiteral) ? tmp$ : null) != null)
      tmp$_1 = tmp$_0;
    else {
      throw IllegalStateException_init(asLiteral$lambda($receiver)($receiver).toString());
    }
    return toLong(tmp$_1.content);
  };
  YamlMap.prototype.getLongOrNull_s8jyv4$ = function (key) {
    var tmp$, tmp$_0, tmp$_1;
    return (tmp$_1 = (tmp$_0 = (tmp$ = this.get_s8jyv4$(key)) != null ? asPrimitiveOrNull(tmp$) : null) != null ? tmp$_0.content : null) != null ? toLongOrNull(tmp$_1) : null;
  };
  YamlMap.prototype.getList_s8jyv4$ = function (key) {
    var tmp$;
    return Kotlin.isType(tmp$ = this.getOrFail_s8jyv4$(key), List) ? tmp$ : throwCCE();
  };
  YamlMap.prototype.getMap_s8jyv4$ = function (key) {
    var tmp$;
    return Kotlin.isType(tmp$ = this.getOrFail_s8jyv4$(key), Map) ? tmp$ : throwCCE();
  };
  function YamlMap$Companion() {
    YamlMap$Companion_instance = this;
  }
  YamlMap$Companion.prototype.invoke_yjgzwu$ = function (map) {
    var destination = LinkedHashMap_init(mapCapacity(map.size));
    var tmp$;
    tmp$ = map.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      destination.put_xwzc9p$(toYamlElement(element), element.value);
    }
    return new YamlMap(destination);
  };
  YamlMap$Companion.prototype.invoke_do0ufx$ = function (map) {
    var $receiver = LinkedHashMap_init(map.size);
    var tmp$;
    tmp$ = map.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var key = element.key;
      var value = element.value;
      $receiver.put_xwzc9p$(YamlPrimitive$Companion_getInstance().invoke_pdl1vj$(key), toYamlElement(value));
    }
    return new YamlMap($receiver);
  };
  YamlMap$Companion.prototype.invoke_mfo5mf$ = function (map) {
    var destination = LinkedHashMap_init(mapCapacity(map.size));
    var tmp$;
    tmp$ = map.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      destination.put_xwzc9p$(element.key, toYamlElement(element));
    }
    return new YamlMap(destination);
  };
  YamlMap$Companion.prototype.serializer = function () {
    return YamlMapSerializer_getInstance();
  };
  YamlMap$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var YamlMap$Companion_instance = null;
  function YamlMap$Companion_getInstance() {
    if (YamlMap$Companion_instance === null) {
      new YamlMap$Companion();
    }
    return YamlMap$Companion_instance;
  }
  Object.defineProperty(YamlMap.prototype, 'entries', {
    configurable: true,
    get: function () {
      return this.content.entries;
    }
  });
  Object.defineProperty(YamlMap.prototype, 'keys', {
    configurable: true,
    get: function () {
      return this.content.keys;
    }
  });
  Object.defineProperty(YamlMap.prototype, 'size', {
    configurable: true,
    get: function () {
      return this.content.size;
    }
  });
  Object.defineProperty(YamlMap.prototype, 'values', {
    configurable: true,
    get: function () {
      return this.content.values;
    }
  });
  YamlMap.prototype.containsKey_11rb$ = function (key) {
    return this.content.containsKey_11rb$(key);
  };
  YamlMap.prototype.containsValue_11rc$ = function (value) {
    return this.content.containsValue_11rc$(value);
  };
  YamlMap.prototype.get_11rb$ = function (key) {
    return this.content.get_11rb$(key);
  };
  YamlMap.prototype.isEmpty = function () {
    return this.content.isEmpty();
  };
  YamlMap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'YamlMap',
    interfaces: [Map, YamlElement]
  };
  YamlMap.prototype.component1 = function () {
    return this.content;
  };
  YamlMap.prototype.copy_tdtmr9$ = function (content) {
    return new YamlMap(content === void 0 ? this.content : content);
  };
  YamlMap.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.content) | 0;
    return result;
  };
  YamlMap.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.content, other.content))));
  };
  var getPrimitive = defineInlineFunction('yamlkt.net.mamoe.yamlkt.getPrimitive_gymagz$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var smartCastPrimitive = _.net.mamoe.yamlkt.smartCastPrimitive_lajt7c$;
    var NoSuchElementException_init = Kotlin.kotlin.NoSuchElementException;
    return function (R_0, isR, $receiver, key) {
      var tmp$, tmp$_0;
      tmp$_0 = (tmp$ = $receiver.get_s8jyv4$(key)) != null ? smartCastPrimitive(tmp$, getKClass(R_0)) : null;
      if (tmp$_0 == null) {
        throw new NoSuchElementException_init(key);
      }
      return tmp$_0;
    };
  }));
  var getPrimitiveOrNull = defineInlineFunction('yamlkt.net.mamoe.yamlkt.getPrimitiveOrNull_gymagz$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var smartCastPrimitive = _.net.mamoe.yamlkt.smartCastPrimitive_lajt7c$;
    return function (R_0, isR, $receiver, key) {
      var tmp$;
      return (tmp$ = $receiver.get_s8jyv4$(key)) != null ? smartCastPrimitive(tmp$, getKClass(R_0)) : null;
    };
  }));
  function allKeysLiteral($receiver) {
    var all$result;
    all$break: do {
      var tmp$;
      if ($receiver.isEmpty()) {
        all$result = true;
        break all$break;
      }
      tmp$ = $receiver.entries.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (!Kotlin.isType(element.key, YamlLiteral)) {
          all$result = false;
          break all$break;
        }
      }
      all$result = true;
    }
     while (false);
    return all$result;
  }
  function allKeysPrimitive($receiver) {
    var all$result;
    all$break: do {
      var tmp$;
      if ($receiver.isEmpty()) {
        all$result = true;
        break all$break;
      }
      tmp$ = $receiver.entries.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (!Kotlin.isType(element.key, YamlPrimitive)) {
          all$result = false;
          break all$break;
        }
      }
      all$result = true;
    }
     while (false);
    return all$result;
  }
  function toContentMap($receiver) {
    var $receiver_0 = LinkedHashMap_init($receiver.size);
    var tmp$;
    tmp$ = $receiver.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var key = element.key;
      var value = element.value;
      var tmp$_0;
      $receiver_0.put_xwzc9p$((tmp$_0 = key.content) != null ? tmp$_0.toString() : null, toContent(value));
    }
    return $receiver_0;
  }
  function YamlList(content) {
    YamlList$Companion_getInstance();
    YamlElement.call(this);
    this.content_vr6djw$_0 = content;
  }
  Object.defineProperty(YamlList.prototype, 'content', {
    get: function () {
      return this.content_vr6djw$_0;
    }
  });
  YamlList.prototype.toString = function () {
    return joinToYamlString(this);
  };
  function YamlList$Companion() {
    YamlList$Companion_instance = this;
  }
  YamlList$Companion.prototype.invoke_7f6uoc$ = function (values) {
    var destination = ArrayList_init(collectionSizeOrDefault(values, 10));
    var tmp$;
    tmp$ = values.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(toYamlElement(item));
    }
    return new YamlList(destination);
  };
  YamlList$Companion.prototype.invoke_elr3lw$ = function (values) {
    var destination = ArrayList_init(values.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== values.length; ++tmp$) {
      var item = values[tmp$];
      destination.add_11rb$(toYamlElement(item));
    }
    return new YamlList(destination);
  };
  function YamlList$Companion$invoke$lambda(it) {
    return toYamlElement(it);
  }
  YamlList$Companion.prototype.invoke_xk9jy2$ = function (values) {
    return new YamlList(toList(map(values, YamlList$Companion$invoke$lambda)));
  };
  YamlList$Companion.prototype.serializer = function () {
    return YamlListSerializer_getInstance();
  };
  YamlList$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var YamlList$Companion_instance = null;
  function YamlList$Companion_getInstance() {
    if (YamlList$Companion_instance === null) {
      new YamlList$Companion();
    }
    return YamlList$Companion_instance;
  }
  Object.defineProperty(YamlList.prototype, 'size', {
    configurable: true,
    get: function () {
      return this.content.size;
    }
  });
  YamlList.prototype.contains_11rb$ = function (element) {
    return this.content.contains_11rb$(element);
  };
  YamlList.prototype.containsAll_brywnq$ = function (elements) {
    return this.content.containsAll_brywnq$(elements);
  };
  YamlList.prototype.get_za3lpa$ = function (index) {
    return this.content.get_za3lpa$(index);
  };
  YamlList.prototype.indexOf_11rb$ = function (element) {
    return this.content.indexOf_11rb$(element);
  };
  YamlList.prototype.isEmpty = function () {
    return this.content.isEmpty();
  };
  YamlList.prototype.iterator = function () {
    return this.content.iterator();
  };
  YamlList.prototype.lastIndexOf_11rb$ = function (element) {
    return this.content.lastIndexOf_11rb$(element);
  };
  YamlList.prototype.listIterator = function () {
    return this.content.listIterator();
  };
  YamlList.prototype.listIterator_za3lpa$ = function (index) {
    return this.content.listIterator_za3lpa$(index);
  };
  YamlList.prototype.subList_vux9f0$ = function (fromIndex, toIndex) {
    return this.content.subList_vux9f0$(fromIndex, toIndex);
  };
  YamlList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'YamlList',
    interfaces: [List, YamlElement]
  };
  YamlList.prototype.component1 = function () {
    return this.content;
  };
  YamlList.prototype.copy_mk9pr8$ = function (content) {
    return new YamlList(content === void 0 ? this.content : content);
  };
  YamlList.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.content) | 0;
    return result;
  };
  YamlList.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.content, other.content))));
  };
  function yamlListOf(values) {
    return YamlList$Companion_getInstance().invoke_elr3lw$(values);
  }
  function yamlListOf_0(values) {
    return YamlList$Companion_getInstance().invoke_elr3lw$(values);
  }
  function toContentList($receiver) {
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(toContent(item));
    }
    return destination;
  }
  var getPrimitive_0 = defineInlineFunction('yamlkt.net.mamoe.yamlkt.getPrimitive_jb6vdx$', wrapFunction(function () {
    var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
    var getKClass = Kotlin.getKClass;
    var smartCastPrimitive = _.net.mamoe.yamlkt.smartCastPrimitive_lajt7c$;
    var IndexOutOfBoundsException_init = Kotlin.kotlin.IndexOutOfBoundsException;
    return function (R_0, isR, $receiver, index) {
      var tmp$, tmp$_0;
      tmp$_0 = (tmp$ = getOrNull($receiver, index)) != null ? smartCastPrimitive(tmp$, getKClass(R_0)) : null;
      if (tmp$_0 == null) {
        throw new IndexOutOfBoundsException_init(index.toString());
      }
      return tmp$_0;
    };
  }));
  var getPrimitiveOrNull_0 = defineInlineFunction('yamlkt.net.mamoe.yamlkt.getPrimitiveOrNull_jb6vdx$', wrapFunction(function () {
    var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
    var getKClass = Kotlin.getKClass;
    var smartCastPrimitive = _.net.mamoe.yamlkt.smartCastPrimitive_lajt7c$;
    return function (R_0, isR, $receiver, index) {
      var tmp$;
      return (tmp$ = getOrNull($receiver, index)) != null ? smartCastPrimitive(tmp$, getKClass(R_0)) : null;
    };
  }));
  function joinToYamlString($receiver) {
    return joinToString($receiver, ',', '[', ']');
  }
  function joinToYamlString$lambda(f) {
    var key = f.key;
    var value = f.value;
    return toString(key) + ':' + toString(value);
  }
  function joinToYamlString_0($receiver) {
    return joinToString($receiver.entries, ',', '{', '}', void 0, void 0, joinToYamlString$lambda);
  }
  function asYamlElementOrNullImpl($receiver) {
    var tmp$;
    if ($receiver == null)
      return YamlNull_getInstance();
    else if (Kotlin.isType($receiver, YamlElement))
      return $receiver;
    else if (typeof $receiver === 'string')
      return new YamlLiteral($receiver);
    else if (typeof $receiver === 'number')
      return new YamlLiteral($receiver.toString());
    else if (typeof $receiver === 'number')
      return new YamlLiteral($receiver.toString());
    else if (typeof $receiver === 'number')
      return new YamlLiteral($receiver.toString());
    else if (Kotlin.isType($receiver, Kotlin.Long))
      return new YamlLiteral($receiver.toString());
    else if (typeof $receiver === 'number')
      return new YamlLiteral($receiver.toString());
    else if (typeof $receiver === 'number')
      return new YamlLiteral($receiver.toString());
    else if (Kotlin.isChar($receiver))
      return new YamlLiteral(unboxChar($receiver).toString());
    else if (typeof $receiver === 'boolean')
      return new YamlLiteral($receiver.toString());
    else if (Kotlin.isArray($receiver)) {
      var destination = ArrayList_init($receiver.length);
      var tmp$_0;
      for (tmp$_0 = 0; tmp$_0 !== $receiver.length; ++tmp$_0) {
        var item = $receiver[tmp$_0];
        destination.add_11rb$(toYamlElement(item));
      }
      return new YamlList(destination);
    } else if (Kotlin.isByteArray($receiver)) {
      var destination_0 = ArrayList_init($receiver.length);
      var tmp$_1;
      for (tmp$_1 = 0; tmp$_1 !== $receiver.length; ++tmp$_1) {
        var item_0 = $receiver[tmp$_1];
        destination_0.add_11rb$(toYamlElement(item_0));
      }
      return new YamlList(destination_0);
    } else if (Kotlin.isIntArray($receiver)) {
      var destination_1 = ArrayList_init($receiver.length);
      var tmp$_2;
      for (tmp$_2 = 0; tmp$_2 !== $receiver.length; ++tmp$_2) {
        var item_1 = $receiver[tmp$_2];
        destination_1.add_11rb$(toYamlElement(item_1));
      }
      return new YamlList(destination_1);
    } else if (Kotlin.isShortArray($receiver)) {
      var destination_2 = ArrayList_init($receiver.length);
      var tmp$_3;
      for (tmp$_3 = 0; tmp$_3 !== $receiver.length; ++tmp$_3) {
        var item_2 = $receiver[tmp$_3];
        destination_2.add_11rb$(toYamlElement(item_2));
      }
      return new YamlList(destination_2);
    } else if (Kotlin.isLongArray($receiver)) {
      var destination_3 = ArrayList_init($receiver.length);
      var tmp$_4;
      for (tmp$_4 = 0; tmp$_4 !== $receiver.length; ++tmp$_4) {
        var item_3 = $receiver[tmp$_4];
        destination_3.add_11rb$(toYamlElement(item_3));
      }
      return new YamlList(destination_3);
    } else if (Kotlin.isFloatArray($receiver)) {
      var destination_4 = ArrayList_init($receiver.length);
      var tmp$_5;
      for (tmp$_5 = 0; tmp$_5 !== $receiver.length; ++tmp$_5) {
        var item_4 = $receiver[tmp$_5];
        destination_4.add_11rb$(toYamlElement(item_4));
      }
      return new YamlList(destination_4);
    } else if (Kotlin.isDoubleArray($receiver)) {
      var destination_5 = ArrayList_init($receiver.length);
      var tmp$_6;
      for (tmp$_6 = 0; tmp$_6 !== $receiver.length; ++tmp$_6) {
        var item_5 = $receiver[tmp$_6];
        destination_5.add_11rb$(toYamlElement(item_5));
      }
      return new YamlList(destination_5);
    } else if (Kotlin.isCharArray($receiver)) {
      var destination_6 = ArrayList_init($receiver.length);
      var tmp$_7;
      for (tmp$_7 = 0; tmp$_7 !== $receiver.length; ++tmp$_7) {
        var item_6 = unboxChar($receiver[tmp$_7]);
        destination_6.add_11rb$(toYamlElement(toBoxedChar(item_6)));
      }
      return new YamlList(destination_6);
    } else if (Kotlin.isBooleanArray($receiver)) {
      var destination_7 = ArrayList_init($receiver.length);
      var tmp$_8;
      for (tmp$_8 = 0; tmp$_8 !== $receiver.length; ++tmp$_8) {
        var item_7 = $receiver[tmp$_8];
        destination_7.add_11rb$(toYamlElement(item_7));
      }
      return new YamlList(destination_7);
    } else if (Kotlin.isType($receiver, Map)) {
      var map = LinkedHashMap_init($receiver.size);
      tmp$ = $receiver.entries.iterator();
      while (tmp$.hasNext()) {
        var tmp$_9 = tmp$.next();
        var key = tmp$_9.key;
        var value = tmp$_9.value;
        var key_0 = toYamlElement(key);
        var value_0 = toYamlElement(value);
        map.put_xwzc9p$(key_0, value_0);
      }
      return new YamlMap(map);
    } else if (Kotlin.isType($receiver, List)) {
      var destination_8 = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$_10;
      tmp$_10 = $receiver.iterator();
      while (tmp$_10.hasNext()) {
        var item_8 = tmp$_10.next();
        destination_8.add_11rb$(toYamlElement(item_8));
      }
      return new YamlList(destination_8);
    } else
      return null;
  }
  function smartCastPrimitive($receiver, clazz) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10;
    if (!Kotlin.isType($receiver, YamlPrimitive)) {
      var message = 'the element is not YamlPrimitive';
      throw IllegalArgumentException_init(message.toString());
    }
    if (equals(clazz, PrimitiveClasses$byteClass))
      tmp$_8 = (tmp$ = get_literalContentOrNull($receiver)) != null ? toByte(tmp$) : null;
    else if (equals(clazz, PrimitiveClasses$shortClass))
      tmp$_8 = (tmp$_0 = get_literalContentOrNull($receiver)) != null ? toShort(tmp$_0) : null;
    else if (equals(clazz, PrimitiveClasses$intClass))
      tmp$_8 = (tmp$_1 = get_literalContentOrNull($receiver)) != null ? toInt(tmp$_1) : null;
    else if (equals(clazz, getKClass(Long)))
      tmp$_8 = (tmp$_2 = get_literalContentOrNull($receiver)) != null ? toLong(tmp$_2) : null;
    else if (equals(clazz, PrimitiveClasses$floatClass)) {
      tmp$_8 = (tmp$_3 = get_literalContentOrNull($receiver)) != null ? toDouble(tmp$_3) : null;
    } else if (equals(clazz, PrimitiveClasses$doubleClass))
      tmp$_8 = (tmp$_4 = get_literalContentOrNull($receiver)) != null ? toDouble(tmp$_4) : null;
    else if (equals(clazz, getKClass(Char))) {
      var tmp$_11;
      if ((tmp$_6 = (tmp$_5 = get_literalContentOrNull($receiver)) != null ? singleOrNull(tmp$_5) : null) != null)
        tmp$_11 = tmp$_6;
      else {
        throw IllegalStateException_init('too many chars'.toString());
      }
      tmp$_8 = tmp$_11;
    } else if (equals(clazz, PrimitiveClasses$booleanClass))
      tmp$_8 = (tmp$_7 = get_literalContentOrNull($receiver)) != null ? toBoolean(tmp$_7) : null;
    else if (equals(clazz, PrimitiveClasses$stringClass))
      tmp$_8 = get_literalContentOrNull($receiver);
    else
      tmp$_8 = null;
    tmp$_10 = Kotlin.isType(tmp$_9 = tmp$_8, Any) ? tmp$_9 : null;
    if (tmp$_10 == null) {
      throw IllegalStateException_init(clazz.toString() + ' is not a primitive type.');
    }
    return tmp$_10;
  }
  function toContent($receiver) {
    var tmp$;
    if (Kotlin.isType($receiver, YamlPrimitive))
      tmp$ = $receiver.content;
    else if (Kotlin.isType($receiver, YamlMap))
      tmp$ = toContentMap($receiver);
    else if (Kotlin.isType($receiver, YamlList))
      tmp$ = toContentList($receiver);
    else
      tmp$ = Kotlin.noWhenBranchMatched();
    return tmp$;
  }
  function YamlNullableDynamicSerializer$decode$lambda_0($receiver) {
    return Unit;
  }
  var YamlNullableDynamicSerializer$decode$lambda_1 = wrapFunction(function () {
    var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
    return function (this$YamlNullableDynamicSerializer, closure$whenNull) {
      return function ($receiver) {
        var tmp$, tmp$_0;
        switch ((Kotlin.isInstanceOf(YamlDecoder$AbstractDecoder)(tmp$ = $receiver) ? tmp$ : throwCCE()).kind.name) {
          case 'FLOW_MAP':
          case 'BLOCK_MAP':
            $receiver.dontWrapNextStructure_8be2vx$ = true;
            tmp$_0 = this$YamlNullableDynamicSerializer.mapSerializer_8be2vx$.deserialize_bq71mq$($receiver);
            break;
          case 'FLOW_SEQUENCE':
            $receiver.dontWrapNextStructure_8be2vx$ = true;
            tmp$_0 = this$YamlNullableDynamicSerializer.listSerializer_8be2vx$.deserialize_bq71mq$($receiver);
            break;
          case 'BLOCK_SEQUENCE':
            $receiver.dontWrapNextStructure_8be2vx$ = true;
            tmp$_0 = this$YamlNullableDynamicSerializer.listSerializer_8be2vx$.deserialize_bq71mq$($receiver);
            break;
          case 'STRING':
            return adjustDynamicString(ensureNotNull($receiver.parentYamlDecoder_8be2vx$.tokenStream_8be2vx$.strBuff), $receiver.parentYamlDecoder_8be2vx$.tokenStream_8be2vx$.quoted);
          case 'NULL_STRING':
            closure$whenNull($receiver);
            return null;
          default:
            throw IllegalStateException_init(('bad decoder returned: ' + $receiver).toString());
        }
        return tmp$_0;
      };
    };
  });
  function YamlNullableDynamicSerializer() {
    YamlNullableDynamicSerializer_instance = this;
    this.descriptor_ey7wc8$_0 = buildSerialDescriptor('YamlNullableDynamic', SerialKind.CONTEXTUAL, []);
    this.listSerializer_8be2vx$ = ListSerializer(this);
    this.mapSerializer_8be2vx$ = MapSerializer(this, this);
  }
  Object.defineProperty(YamlNullableDynamicSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_ey7wc8$_0;
    }
  });
  YamlNullableDynamicSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var descriptor = this.descriptor;
    var decodeStructure$result;
    var composite = decoder.beginStructure_24f42q$(descriptor);
    var ex = null;
    try {
      var block$result;
      block$break: do {
        var tmp$, tmp$_0;
        switch ((Kotlin.isType(tmp$ = composite, YamlDecoder$AbstractDecoder) ? tmp$ : throwCCE()).kind.name) {
          case 'FLOW_MAP':
          case 'BLOCK_MAP':
            composite.dontWrapNextStructure_8be2vx$ = true;
            tmp$_0 = this.mapSerializer_8be2vx$.deserialize_bq71mq$(composite);
            break;
          case 'FLOW_SEQUENCE':
            composite.dontWrapNextStructure_8be2vx$ = true;
            tmp$_0 = this.listSerializer_8be2vx$.deserialize_bq71mq$(composite);
            break;
          case 'BLOCK_SEQUENCE':
            composite.dontWrapNextStructure_8be2vx$ = true;
            tmp$_0 = this.listSerializer_8be2vx$.deserialize_bq71mq$(composite);
            break;
          case 'STRING':
            block$result = adjustDynamicString(ensureNotNull(composite.parentYamlDecoder_8be2vx$.tokenStream_8be2vx$.strBuff), composite.parentYamlDecoder_8be2vx$.tokenStream_8be2vx$.quoted);
            break block$break;
          case 'NULL_STRING':
            YamlNullableDynamicSerializer$decode$lambda_0(composite);
            block$result = null;
            break block$break;
          default:
            throw IllegalStateException_init(('bad decoder returned: ' + composite).toString());
        }
        block$result = tmp$_0;
      }
       while (false);
      decodeStructure$result = block$result;
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
  YamlNullableDynamicSerializer.prototype.decode_vjb5ak$ = defineInlineFunction('yamlkt.net.mamoe.yamlkt.YamlNullableDynamicSerializer.decode_vjb5ak$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var wrapFunction = Kotlin.wrapFunction;
    var YamlDecoder$AbstractDecoder = _.net.mamoe.yamlkt.internal.YamlDecoder.AbstractDecoder;
    var throwCCE = Kotlin.throwCCE;
    var ensureNotNull = Kotlin.ensureNotNull;
    var adjustDynamicString = _.net.mamoe.yamlkt.internal.adjustDynamicString_pgzefr$;
    var Throwable = Error;
    var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
    function YamlNullableDynamicSerializer$decode$lambda($receiver) {
      return Unit;
    }
    var YamlNullableDynamicSerializer$decode$lambda_0 = wrapFunction(function () {
      var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
      return function (this$YamlNullableDynamicSerializer, closure$whenNull) {
        return function ($receiver) {
          var tmp$, tmp$_0;
          switch ((Kotlin.isType(tmp$ = $receiver, YamlDecoder$AbstractDecoder) ? tmp$ : throwCCE()).kind.name) {
            case 'FLOW_MAP':
            case 'BLOCK_MAP':
              $receiver.dontWrapNextStructure_8be2vx$ = true;
              tmp$_0 = this$YamlNullableDynamicSerializer.mapSerializer_8be2vx$.deserialize_bq71mq$($receiver);
              break;
            case 'FLOW_SEQUENCE':
              $receiver.dontWrapNextStructure_8be2vx$ = true;
              tmp$_0 = this$YamlNullableDynamicSerializer.listSerializer_8be2vx$.deserialize_bq71mq$($receiver);
              break;
            case 'BLOCK_SEQUENCE':
              $receiver.dontWrapNextStructure_8be2vx$ = true;
              tmp$_0 = this$YamlNullableDynamicSerializer.listSerializer_8be2vx$.deserialize_bq71mq$($receiver);
              break;
            case 'STRING':
              return adjustDynamicString(ensureNotNull($receiver.parentYamlDecoder_8be2vx$.tokenStream_8be2vx$.strBuff), $receiver.parentYamlDecoder_8be2vx$.tokenStream_8be2vx$.quoted);
            case 'NULL_STRING':
              closure$whenNull($receiver);
              return null;
            default:
              throw IllegalStateException_init(('bad decoder returned: ' + $receiver).toString());
          }
          return tmp$_0;
        };
      };
    });
    return function (decoder, whenNull) {
      if (whenNull === void 0)
        whenNull = YamlNullableDynamicSerializer$decode$lambda;
      var descriptor = this.descriptor;
      var decodeStructure$result;
      var composite = decoder.beginStructure_24f42q$(descriptor);
      var ex = null;
      try {
        var block$result;
        block$break: do {
          var tmp$, tmp$_0;
          switch ((Kotlin.isType(tmp$ = composite, YamlDecoder$AbstractDecoder) ? tmp$ : throwCCE()).kind.name) {
            case 'FLOW_MAP':
            case 'BLOCK_MAP':
              composite.dontWrapNextStructure_8be2vx$ = true;
              tmp$_0 = this.mapSerializer_8be2vx$.deserialize_bq71mq$(composite);
              break;
            case 'FLOW_SEQUENCE':
              composite.dontWrapNextStructure_8be2vx$ = true;
              tmp$_0 = this.listSerializer_8be2vx$.deserialize_bq71mq$(composite);
              break;
            case 'BLOCK_SEQUENCE':
              composite.dontWrapNextStructure_8be2vx$ = true;
              tmp$_0 = this.listSerializer_8be2vx$.deserialize_bq71mq$(composite);
              break;
            case 'STRING':
              block$result = adjustDynamicString(ensureNotNull(composite.parentYamlDecoder_8be2vx$.tokenStream_8be2vx$.strBuff), composite.parentYamlDecoder_8be2vx$.tokenStream_8be2vx$.quoted);
              break block$break;
            case 'NULL_STRING':
              whenNull(composite);
              block$result = null;
              break block$break;
            default:
              throw IllegalStateException_init(('bad decoder returned: ' + composite).toString());
          }
          block$result = tmp$_0;
        }
         while (false);
        decodeStructure$result = block$result;
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
  }));
  YamlNullableDynamicSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    if (value == null) {
      encoder.encodeNullableSerializableValue_f4686g$(serializer(kotlin_js_internal_StringCompanionObject), value);
    } else
      serializeImpl(this, encoder, value);
  };
  YamlNullableDynamicSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'YamlNullableDynamicSerializer',
    interfaces: [IYamlDynamicSerializer, KSerializer]
  };
  var YamlNullableDynamicSerializer_instance = null;
  function YamlNullableDynamicSerializer_getInstance() {
    if (YamlNullableDynamicSerializer_instance === null) {
      new YamlNullableDynamicSerializer();
    }
    return YamlNullableDynamicSerializer_instance;
  }
  var contextualDecodingException = defineInlineFunction('yamlkt.net.mamoe.yamlkt.internal.contextualDecodingException_4jech9$', wrapFunction(function () {
    var YamlDecodingException_init = _.net.mamoe.yamlkt.YamlDecodingException;
    var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
    return function (hint, text, cur, position, throwable) {
      if (throwable === void 0)
        throwable = null;
      var $receiver = StringBuilder_init();
      $receiver.append_pdl1vj$(hint);
      $receiver.append_s8itvh$(10);
      $receiver.append_pdl1vj$(text);
      $receiver.append_s8itvh$(10);
      for (var index = 0; index < cur; index++) {
        $receiver.append_s8itvh$(32);
      }
      $receiver.append_s8itvh$(94);
      $receiver.append_s8itvh$(32);
      $receiver.append_pdl1vj$(position);
      $receiver.append_s8itvh$(10);
      return new YamlDecodingException_init($receiver.toString(), throwable);
    };
  }));
  var contextualDecodingException_0 = defineInlineFunction('yamlkt.net.mamoe.yamlkt.internal.contextualDecodingException_179xip$', wrapFunction(function () {
    var contextualDecodingException = _.net.mamoe.yamlkt.internal.contextualDecodingException_fjiswb$;
    return function ($receiver, hint, descriptor, index, throwable) {
      if (descriptor === void 0)
        descriptor = null;
      if (index === void 0)
        index = -1;
      if (throwable === void 0)
        throwable = null;
      return contextualDecodingException($receiver.tokenStream_8be2vx$, 'Top-level decoder: ' + hint, descriptor, index, throwable);
    };
  }));
  var contextualDecodingException_1 = defineInlineFunction('yamlkt.net.mamoe.yamlkt.internal.contextualDecodingException_paouo3$', wrapFunction(function () {
    var contextualDecodingException = _.net.mamoe.yamlkt.internal.contextualDecodingException_fjiswb$;
    return function ($receiver, hint, descriptor, index, throwable) {
      if (descriptor === void 0)
        descriptor = null;
      if (index === void 0)
        index = -1;
      if (throwable === void 0)
        throwable = null;
      return contextualDecodingException($receiver.parentYamlDecoder_8be2vx$.tokenStream_8be2vx$, 'Top-level decoder: ' + hint, descriptor, index, throwable);
    };
  }));
  var contextualDecodingException_2 = defineInlineFunction('yamlkt.net.mamoe.yamlkt.internal.contextualDecodingException_y5hiww$', wrapFunction(function () {
    var contextualDecodingException = _.net.mamoe.yamlkt.internal.contextualDecodingException_fjiswb$;
    return function ($receiver, hint) {
      return contextualDecodingException($receiver.parentYamlDecoder_8be2vx$.tokenStream_8be2vx$, 'Top-level decoder: ' + ($receiver.name + ': ' + hint), null, -1, null);
    };
  }));
  var contextualDecodingException_3 = defineInlineFunction('yamlkt.net.mamoe.yamlkt.internal.contextualDecodingException_4somew$', wrapFunction(function () {
    var contextualDecodingException = _.net.mamoe.yamlkt.internal.contextualDecodingException_fjiswb$;
    return function ($receiver, hint) {
      return contextualDecodingException($receiver, hint, null, -1);
    };
  }));
  function get_lineNumberAndCurrentLine$read(this$lineNumberAndCurrentLine, closure$isLastLineSeparator, closure$lineStartingCur, closure$_lineNumber) {
    return function (i) {
      var $receiver = toBoxedChar(this$lineNumberAndCurrentLine.source.charCodeAt(i));
      var closure$isLastLineSeparator_0 = closure$isLastLineSeparator;
      var closure$lineStartingCur_0 = closure$lineStartingCur;
      var closure$_lineNumber_0 = closure$_lineNumber;
      if (closure$isLastLineSeparator_0.v !== 0) {
        closure$lineStartingCur_0.v = i + 1 - closure$isLastLineSeparator_0.v | 0;
        closure$isLastLineSeparator_0.v = 0;
      }
      var $receiver_0 = unboxChar($receiver);
      if ($receiver_0 === 10 || $receiver_0 === 13) {
        closure$isLastLineSeparator_0.v = closure$isLastLineSeparator_0.v + 1 | 0;
        closure$_lineNumber_0.v = closure$_lineNumber_0.v + 1 | 0;
      }
      return unboxChar($receiver);
    };
  }
  function get_lineNumberAndCurrentLine($receiver) {
    var tmp$;
    var lineStartingCur = {v: 0};
    var isLastLineSeparator = {v: 0};
    var _lineNumber = {v: 1};
    var read = get_lineNumberAndCurrentLine$read($receiver, isLastLineSeparator, lineStartingCur, _lineNumber);
    if ($receiver.source.length > 0) {
      tmp$ = coerceIn($receiver.cur - 1 | 0, get_indices($receiver.source));
      for (var i = 0; i <= tmp$; i++) {
        read(i);
      }
    }
    var tmp$_0 = _lineNumber.v - isLastLineSeparator.v | 0;
    var $receiver_0 = $receiver.source;
    var startIndex = lineStartingCur.v;
    var endIndex = $receiver.cur - isLastLineSeparator.v | 0;
    return new Pair(tmp$_0, $receiver_0.substring(startIndex, endIndex));
  }
  function get_lineNumber($receiver) {
    var tmp$;
    var line = 1;
    tmp$ = coerceAtMost($receiver.cur, $receiver.source.length);
    for (var i = 0; i <= tmp$; i++) {
      var $receiver_0 = $receiver.source.charCodeAt(i);
      if ($receiver_0 === 10 || $receiver_0 === 13) {
        line = line + 1 | 0;
      }
    }
    return line;
  }
  function readLine($receiver) {
    var buffer = StringBuilder_init();
    var tmp$;
    while (!($receiver.cur === $receiver.source.length)) {
      var it = toBoxedChar($receiver.source.charCodeAt((tmp$ = $receiver.cur, $receiver.cur = tmp$ + 1 | 0, tmp$)));
      var $receiver_0 = unboxChar(it);
      if ($receiver_0 === 10 || $receiver_0 === 13)
        return buffer.toString();
      buffer.append_s8itvh$(unboxChar(it));
    }
    null;
    return buffer.toString();
  }
  function skipLine($receiver) {
    var tmp$;
    while (!($receiver.cur === $receiver.source.length)) {
      var $receiver_0 = unboxChar(toBoxedChar($receiver.source.charCodeAt((tmp$ = $receiver.cur, $receiver.cur = tmp$ + 1 | 0, tmp$))));
      if ($receiver_0 === 10 || $receiver_0 === 13)
        return;
    }
    null;
  }
  function contextualDecodingException_4($receiver, hint, descriptor, index, throwable) {
    if (throwable === void 0)
      throwable = null;
    var tmp$;
    var message = descriptor == null ? hint : hint + (" for '" + descriptor.getElementName_za3lpa$(index) + "' ") + ("in '" + descriptor.serialName + "'");
    var v = get_lineNumberAndCurrentLine($receiver);
    var lineNumber = v.first;
    var columnNumber = v.second.length + 1 | 0;
    var before = limitLast(v.second, 32);
    var last = limitFirst(readLine($receiver), 32);
    if (get_lineNumberAndCurrentLine($receiver).first !== lineNumber) {
      tmp$ = before;
    } else {
      tmp$ = before + last;
    }
    var text = tmp$;
    var position = 'at line ' + lineNumber + ', column ' + columnNumber;
    var cur = coerceAtLeast(before.length - 1 | 0, 0);
    var $receiver_0 = StringBuilder_init();
    $receiver_0.append_pdl1vj$(message);
    $receiver_0.append_s8itvh$(10);
    $receiver_0.append_pdl1vj$(text);
    $receiver_0.append_s8itvh$(10);
    for (var index_0 = 0; index_0 < cur; index_0++) {
      $receiver_0.append_s8itvh$(32);
    }
    $receiver_0.append_s8itvh$(94);
    $receiver_0.append_s8itvh$(32);
    $receiver_0.append_pdl1vj$(position);
    $receiver_0.append_s8itvh$(10);
    return new YamlDecodingException($receiver_0.toString(), throwable);
  }
  function limitLast($receiver, length) {
    if ($receiver.length <= length)
      return $receiver;
    return '...' + takeLast($receiver, length);
  }
  function limitFirst($receiver, length) {
    if ($receiver.length <= length)
      return $receiver;
    return take($receiver, length) + '...';
  }
  var isLineSeparator = defineInlineFunction('yamlkt.net.mamoe.yamlkt.internal.isLineSeparator_nupfqh$', function ($receiver) {
    return $receiver === 10 || $receiver === 13;
  });
  var foldFromRightOffsetIndexed = wrapFunction(function () {
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    return function ($receiver, offset, initial, operation) {
      if (!(offset <= ($receiver.length - 1 | 0))) {
        var message = 'length < offset';
        throw IllegalArgumentException_init(message.toString());
      }
      var accumulator = {v: initial};
      var index = {v: 0};
      var times = $receiver.length - offset | 0;
      for (var index_0 = 0; index_0 < times; index_0++) {
        var tmp$;
        var element = $receiver.charCodeAt($receiver.length - index_0 - 1 | 0);
        accumulator.v = operation((tmp$ = index.v, index.v = tmp$ + 1 | 0, tmp$), accumulator.v, toBoxedChar(element));
      }
      return accumulator.v;
    };
  });
  function foldFromRightOffsetIndexed_0($receiver, offset, length, initial, operation) {
    var accumulator = {v: initial};
    var lastIndex = offset + length - 1 | 0;
    var index = {v: 0};
    for (var index_0 = 0; index_0 < length; index_0++) {
      var tmp$;
      var element = $receiver[lastIndex - index_0 | 0];
      accumulator.v = operation((tmp$ = index.v, index.v = tmp$ + 1 | 0, tmp$), accumulator.v, toBoxedChar(element));
    }
    return accumulator.v;
  }
  function HexConverter() {
    HexConverter_instance = this;
    var array = Array_0(16);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = Kotlin.Long.fromNumber(JsMath.pow(16.0, i));
    }
    this.HEX_POW_TABLE_0 = array;
  }
  HexConverter.prototype.hexToLong_bm4lxs$ = function (value, offset) {
    if (!((value.length - offset | 0) <= 16)) {
      var message = 'max ' + '16' + ' bits, but found ' + (value.length - offset | 0);
      throw IllegalStateException_init(message.toString());
    }
    var initial = L0;
    if (!(offset <= (value.length - 1 | 0))) {
      var message_0 = 'length < offset';
      throw IllegalArgumentException_init(message_0.toString());
    }
    var accumulator = {v: initial};
    var index = {v: 0};
    var times = value.length - offset | 0;
    for (var index_0 = 0; index_0 < times; index_0++) {
      var tmp$;
      var element = value.charCodeAt(value.length - index_0 - 1 | 0);
      var index_1 = (tmp$ = index.v, index.v = tmp$ + 1 | 0, tmp$);
      var acc = accumulator.v;
      var char = toBoxedChar(element);
      var tmp$_0, tmp$_1;
      tmp$_0 = unboxChar(char);
      if ((new CharRange(65, 70)).contains_mef7kx$(tmp$_0))
        tmp$_1 = Kotlin.Long.fromInt(unboxChar(char) - 65 + 10 | 0).multiply(this.HEX_POW_TABLE_0[index_1]);
      else if ((new CharRange(97, 102)).contains_mef7kx$(tmp$_0))
        tmp$_1 = Kotlin.Long.fromInt(unboxChar(char) - 97 + 10 | 0).multiply(this.HEX_POW_TABLE_0[index_1]);
      else if ((new CharRange(48, 57)).contains_mef7kx$(tmp$_0))
        tmp$_1 = Kotlin.Long.fromInt(unboxChar(char) - 48).multiply(this.HEX_POW_TABLE_0[index_1]);
      else {
        throw IllegalStateException_init(("illegal digit '" + String.fromCharCode(unboxChar(char)) + "' in hexadecimal string " + value).toString());
      }
      accumulator.v = acc.add(tmp$_1);
    }
    return accumulator.v;
  };
  HexConverter.prototype.hexToLong_8chfmy$ = function (value, offset, length) {
    if (!((value.length - offset | 0) <= 16)) {
      var message = 'max ' + '16' + ' bits, but found ' + (value.length - offset | 0);
      throw IllegalStateException_init(message.toString());
    }
    var accumulator = {v: L0};
    var lastIndex = offset + length - 1 | 0;
    var index = {v: 0};
    for (var index_0 = 0; index_0 < length; index_0++) {
      var tmp$;
      var element = value[lastIndex - index_0 | 0];
      var index_1 = (tmp$ = index.v, index.v = tmp$ + 1 | 0, tmp$);
      var acc = accumulator.v;
      var char = toBoxedChar(element);
      var tmp$_0, tmp$_1;
      tmp$_0 = unboxChar(char);
      if ((new CharRange(65, 70)).contains_mef7kx$(tmp$_0))
        tmp$_1 = Kotlin.Long.fromInt(unboxChar(char) - 65 + 10 | 0).multiply(this.HEX_POW_TABLE_0[index_1]);
      else if ((new CharRange(97, 102)).contains_mef7kx$(tmp$_0))
        tmp$_1 = Kotlin.Long.fromInt(unboxChar(char) - 97 + 10 | 0).multiply(this.HEX_POW_TABLE_0[index_1]);
      else if ((new CharRange(48, 57)).contains_mef7kx$(tmp$_0))
        tmp$_1 = Kotlin.Long.fromInt(unboxChar(char) - 48).multiply(this.HEX_POW_TABLE_0[index_1]);
      else {
        throw IllegalStateException_init(("illegal digit '" + String.fromCharCode(unboxChar(char)) + "' in hexadecimal string " + value).toString());
      }
      accumulator.v = acc.add(tmp$_1);
    }
    return accumulator.v;
  };
  HexConverter.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'HexConverter',
    interfaces: []
  };
  var HexConverter_instance = null;
  function HexConverter_getInstance() {
    if (HexConverter_instance === null) {
      new HexConverter();
    }
    return HexConverter_instance;
  }
  function BinaryConverter() {
    BinaryConverter_instance = this;
    var array = Array_0(64);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = doubleToULong(JsMath.pow(2.0, i)).data;
    }
    this.BINARY_POW_TABLE_0 = array;
  }
  BinaryConverter.prototype.binToLong_bm4lxs$ = function (value, offset) {
    if (!((value.length - offset | 0) <= 64)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }
    var initial = L0;
    if (!(offset <= (value.length - 1 | 0))) {
      var message_0 = 'length < offset';
      throw IllegalArgumentException_init(message_0.toString());
    }
    var accumulator = {v: initial};
    var index = {v: 0};
    var times = value.length - offset | 0;
    for (var index_0 = 0; index_0 < times; index_0++) {
      var tmp$;
      var element = value.charCodeAt(value.length - index_0 - 1 | 0);
      var index_1 = (tmp$ = index.v, index.v = tmp$ + 1 | 0, tmp$);
      var acc = accumulator.v;
      var char = toBoxedChar(element);
      var tmp$_0;
      switch (unboxChar(char)) {
        case 48:
          tmp$_0 = L0;
          break;
        case 49:
          tmp$_0 = this.BINARY_POW_TABLE_0[index_1];
          break;
        default:
          throw IllegalStateException_init(("illegal digit '" + String.fromCharCode(unboxChar(char)) + "' in binary string " + value).toString());
      }
      accumulator.v = acc.add(tmp$_0);
    }
    return accumulator.v;
  };
  BinaryConverter.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BinaryConverter',
    interfaces: []
  };
  var BinaryConverter_instance = null;
  function BinaryConverter_getInstance() {
    if (BinaryConverter_instance === null) {
      new BinaryConverter();
    }
    return BinaryConverter_instance;
  }
  function limitToByte($receiver) {
    if (L_128.lessThanOrEqual($receiver) && $receiver.lessThanOrEqual(L127))
      return toByte_0($receiver.toInt());
    throw IllegalStateException_init(('value is too large for byte: ' + $receiver.toString()).toString());
  }
  function limitToShort($receiver) {
    if (L_32768.lessThanOrEqual($receiver) && $receiver.lessThanOrEqual(L32767))
      return toShort_0($receiver.toInt());
    throw IllegalStateException_init(('value is too large for short: ' + $receiver.toString()).toString());
  }
  function limitToInt($receiver) {
    if (L_2147483648.lessThanOrEqual($receiver) && $receiver.lessThanOrEqual(L2147483647))
      return $receiver.toInt();
    throw IllegalStateException_init(('value is too large for int: ' + $receiver.toString()).toString());
  }
  var optimizeNull = defineInlineFunction('yamlkt.net.mamoe.yamlkt.internal.optimizeNull_7efafi$', function ($receiver) {
    switch ($receiver) {
      case '~':
      case 'null':
      case 'NULL':
        return null;
      default:
        return $receiver;
    }
  });
  var classSimpleName = defineInlineFunction('yamlkt.net.mamoe.yamlkt.internal.classSimpleName_8ea4r1$', function ($receiver) {
    return Kotlin.getKClassFromExpression($receiver).simpleName;
  });
  var enabled0;
  var logIndent0;
  var decodeValue0;
  function Debugging() {
    Debugging_instance = this;
    this.enabled_8be2vx$_hz2l5c$_0 = getPropertyCallableRef('enabled0', 0, function () {
      return enabled0;
    });
    this.logIndent_u216q5$_0 = getPropertyCallableRef('logIndent0', 0, function () {
      return logIndent0;
    });
    this.decodeValue_cgmali$_0 = getPropertyCallableRef('decodeValue0', 0, function () {
      return decodeValue0;
    });
  }
  Object.defineProperty(Debugging.prototype, 'enabled_8be2vx$', {
    configurable: true,
    get: function () {
      return this.enabled_8be2vx$_hz2l5c$_0.get();
    },
    set: function (enabled) {
      this.enabled_8be2vx$_hz2l5c$_0.set(enabled);
    }
  });
  Object.defineProperty(Debugging.prototype, 'logIndent', {
    configurable: true,
    get: function () {
      return this.logIndent_u216q5$_0.get();
    },
    set: function (logIndent) {
      this.logIndent_u216q5$_0.set(logIndent);
    }
  });
  Object.defineProperty(Debugging.prototype, 'decodeValue_0', {
    configurable: true,
    get: function () {
      return this.decodeValue_cgmali$_0.get();
    },
    set: function (decodeValue) {
      this.decodeValue_cgmali$_0.set(decodeValue);
    }
  });
  Debugging.prototype.beginStructure_c6m6yj$ = function (descriptor, decoder) {
    var tmp$;
    if (!this.enabled_8be2vx$)
      return;
    if (!this.enabled_8be2vx$)
      return;
    if (decoder == null) {
      println(this.space_0(this.logIndent) + (descriptor.serialName + ' {'));
    } else {
      if (Kotlin.isType(decoder, YamlDecoder$IndentedDecoder)) {
        tmp$ = 'indented ' + decoder.baseIndent_8be2vx$ + ' ';
      } else
        tmp$ = '';
      var indent = tmp$;
      println(this.space_0(this.logIndent) + (descriptor.serialName + ' by ' + decoder.name + ' ' + indent + '{'));
    }
    this.logIndent = this.logIndent + 4 | 0;
  };
  Debugging.prototype.endStructure = function () {
    if (!this.enabled_8be2vx$)
      return;
    this.logIndent = this.logIndent - 4 | 0;
    println(this.space_0(this.logIndent) + '}');
  };
  Debugging.prototype.logDecode_h5k49v$ = function (descriptor, index, value) {
    if (!this.enabled_8be2vx$)
      return;
    if (descriptor == null) {
      if (this.decodeValue_0 > 0) {
        println(' = ' + value);
        this.decodeValue_0 = this.decodeValue_0 - 1 | 0;
      } else {
        print(this.space_0(this.logIndent) + value);
        this.decodeValue_0 = this.decodeValue_0 + 1 | 0;
      }
    } else {
      println(this.space_0(this.logIndent) + (descriptor.getElementName_za3lpa$(index) + ': ' + value));
    }
  };
  Debugging.prototype.logCustom_h4ejuu$ = defineInlineFunction('yamlkt.net.mamoe.yamlkt.internal.Debugging.logCustom_h4ejuu$', wrapFunction(function () {
    var println = Kotlin.kotlin.io.println_s8jyv4$;
    return function (message) {
      if (!this.enabled_8be2vx$)
        return;
      println(this.space_0(this.logIndent) + message());
    };
  }));
  Debugging.prototype.space_0 = function (count) {
    return repeat(' ', coerceAtLeast(count, 0));
  };
  Debugging.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Debugging',
    interfaces: []
  };
  var Debugging_instance = null;
  function Debugging_getInstance() {
    if (Debugging_instance === null) {
      new Debugging();
    }
    return Debugging_instance;
  }
  var debuggingLogDecoder = defineInlineFunction('yamlkt.net.mamoe.yamlkt.internal.debuggingLogDecoder_p90puq$', wrapFunction(function () {
    var internal = _.net.mamoe.yamlkt.internal;
    return function ($receiver, descriptor, index) {
      internal.Debugging.logDecode_h5k49v$(descriptor, index, $receiver != null ? $receiver : '<null>');
      return $receiver;
    };
  }));
  var LONG_AS_DOUBLE_RANGE;
  var INT_AS_DOUBLE_RANGE;
  function adjustDynamicString($receiver, quoted) {
    var tmp$, tmp$_0;
    if (quoted)
      return $receiver;
    switch ($receiver) {
      case 'true':
      case 'TRUE':
        tmp$_0 = true;
        break;
      case 'false':
      case 'FALSE':
        tmp$_0 = false;
        break;
      default:
        tmp$ = toDoubleOrNull($receiver);
        if (tmp$ == null) {
          return $receiver;
        }

        var double = tmp$;
        if (contains($receiver, 46))
          return double;
        if (INT_AS_DOUBLE_RANGE.contains_mef7kx$(double))
          tmp$_0 = numberToInt(double);
        else if (LONG_AS_DOUBLE_RANGE.contains_mef7kx$(double))
          tmp$_0 = Kotlin.Long.fromNumber(double);
        else
          tmp$_0 = double;
        break;
    }
    return tmp$_0;
  }
  function IYamlDynamicSerializer() {
  }
  IYamlDynamicSerializer.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IYamlDynamicSerializer',
    interfaces: []
  };
  function AnyTypedArraySerializer() {
    AnyTypedArraySerializer_instance = this;
    var elementSerializer = YamlNullableDynamicSerializer_getInstance();
    this.$delegate_uonmkq$_0 = ArraySerializer(PrimitiveClasses$anyClass, elementSerializer);
  }
  Object.defineProperty(AnyTypedArraySerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.$delegate_uonmkq$_0.descriptor;
    }
  });
  AnyTypedArraySerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return this.$delegate_uonmkq$_0.deserialize_bq71mq$(decoder);
  };
  AnyTypedArraySerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    return this.$delegate_uonmkq$_0.serialize_55azsf$(encoder, value);
  };
  AnyTypedArraySerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AnyTypedArraySerializer',
    interfaces: [KSerializer]
  };
  var AnyTypedArraySerializer_instance = null;
  function AnyTypedArraySerializer_getInstance() {
    if (AnyTypedArraySerializer_instance === null) {
      new AnyTypedArraySerializer();
    }
    return AnyTypedArraySerializer_instance;
  }
  function YamlDynamicPairSerializer() {
    YamlDynamicPairSerializer_instance = this;
    this.$delegate_do1vgh$_0 = PairSerializer(YamlNullableDynamicSerializer_getInstance(), YamlNullableDynamicSerializer_getInstance());
  }
  Object.defineProperty(YamlDynamicPairSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.$delegate_do1vgh$_0.descriptor;
    }
  });
  YamlDynamicPairSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return this.$delegate_do1vgh$_0.deserialize_bq71mq$(decoder);
  };
  YamlDynamicPairSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    return this.$delegate_do1vgh$_0.serialize_55azsf$(encoder, value);
  };
  YamlDynamicPairSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'YamlDynamicPairSerializer',
    interfaces: [KSerializer]
  };
  var YamlDynamicPairSerializer_instance = null;
  function YamlDynamicPairSerializer_getInstance() {
    if (YamlDynamicPairSerializer_instance === null) {
      new YamlDynamicPairSerializer();
    }
    return YamlDynamicPairSerializer_instance;
  }
  function YamlDynamicTripleSerializer() {
    YamlDynamicTripleSerializer_instance = this;
    this.$delegate_qqfpyz$_0 = TripleSerializer(YamlNullableDynamicSerializer_getInstance(), YamlNullableDynamicSerializer_getInstance(), YamlNullableDynamicSerializer_getInstance());
  }
  Object.defineProperty(YamlDynamicTripleSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.$delegate_qqfpyz$_0.descriptor;
    }
  });
  YamlDynamicTripleSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return this.$delegate_qqfpyz$_0.deserialize_bq71mq$(decoder);
  };
  YamlDynamicTripleSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    return this.$delegate_qqfpyz$_0.serialize_55azsf$(encoder, value);
  };
  YamlDynamicTripleSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'YamlDynamicTripleSerializer',
    interfaces: [KSerializer]
  };
  var YamlDynamicTripleSerializer_instance = null;
  function YamlDynamicTripleSerializer_getInstance() {
    if (YamlDynamicTripleSerializer_instance === null) {
      new YamlDynamicTripleSerializer();
    }
    return YamlDynamicTripleSerializer_instance;
  }
  function YamlMapEntrySerializer() {
    YamlMapEntrySerializer_instance = this;
    this.$delegate_jqy42a$_0 = MapEntrySerializer(YamlNullableDynamicSerializer_getInstance(), YamlNullableDynamicSerializer_getInstance());
  }
  Object.defineProperty(YamlMapEntrySerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.$delegate_jqy42a$_0.descriptor;
    }
  });
  YamlMapEntrySerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return this.$delegate_jqy42a$_0.deserialize_bq71mq$(decoder);
  };
  YamlMapEntrySerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    return this.$delegate_jqy42a$_0.serialize_55azsf$(encoder, value);
  };
  YamlMapEntrySerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'YamlMapEntrySerializer',
    interfaces: [KSerializer]
  };
  var YamlMapEntrySerializer_instance = null;
  function YamlMapEntrySerializer_getInstance() {
    if (YamlMapEntrySerializer_instance === null) {
      new YamlMapEntrySerializer();
    }
    return YamlMapEntrySerializer_instance;
  }
  function IntTypedArraySerializer() {
    IntTypedArraySerializer_instance = this;
    var elementSerializer = serializer_0(kotlin_js_internal_IntCompanionObject);
    this.$delegate_z71h0z$_0 = ArraySerializer(PrimitiveClasses$intClass, elementSerializer);
  }
  Object.defineProperty(IntTypedArraySerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.$delegate_z71h0z$_0.descriptor;
    }
  });
  IntTypedArraySerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return this.$delegate_z71h0z$_0.deserialize_bq71mq$(decoder);
  };
  IntTypedArraySerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    return this.$delegate_z71h0z$_0.serialize_55azsf$(encoder, value);
  };
  IntTypedArraySerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'IntTypedArraySerializer',
    interfaces: [KSerializer]
  };
  var IntTypedArraySerializer_instance = null;
  function IntTypedArraySerializer_getInstance() {
    if (IntTypedArraySerializer_instance === null) {
      new IntTypedArraySerializer();
    }
    return IntTypedArraySerializer_instance;
  }
  function DoubleTypedArraySerializer() {
    DoubleTypedArraySerializer_instance = this;
    var elementSerializer = serializer_1(kotlin_js_internal_DoubleCompanionObject);
    this.$delegate_223e0b$_0 = ArraySerializer(PrimitiveClasses$doubleClass, elementSerializer);
  }
  Object.defineProperty(DoubleTypedArraySerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.$delegate_223e0b$_0.descriptor;
    }
  });
  DoubleTypedArraySerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return this.$delegate_223e0b$_0.deserialize_bq71mq$(decoder);
  };
  DoubleTypedArraySerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    return this.$delegate_223e0b$_0.serialize_55azsf$(encoder, value);
  };
  DoubleTypedArraySerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DoubleTypedArraySerializer',
    interfaces: [KSerializer]
  };
  var DoubleTypedArraySerializer_instance = null;
  function DoubleTypedArraySerializer_getInstance() {
    if (DoubleTypedArraySerializer_instance === null) {
      new DoubleTypedArraySerializer();
    }
    return DoubleTypedArraySerializer_instance;
  }
  function FloatTypedArraySerializer() {
    FloatTypedArraySerializer_instance = this;
    var elementSerializer = serializer_2(kotlin_js_internal_FloatCompanionObject);
    this.$delegate_3wveii$_0 = ArraySerializer(PrimitiveClasses$floatClass, elementSerializer);
  }
  Object.defineProperty(FloatTypedArraySerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.$delegate_3wveii$_0.descriptor;
    }
  });
  FloatTypedArraySerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return this.$delegate_3wveii$_0.deserialize_bq71mq$(decoder);
  };
  FloatTypedArraySerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    return this.$delegate_3wveii$_0.serialize_55azsf$(encoder, value);
  };
  FloatTypedArraySerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FloatTypedArraySerializer',
    interfaces: [KSerializer]
  };
  var FloatTypedArraySerializer_instance = null;
  function FloatTypedArraySerializer_getInstance() {
    if (FloatTypedArraySerializer_instance === null) {
      new FloatTypedArraySerializer();
    }
    return FloatTypedArraySerializer_instance;
  }
  function ByteTypedArraySerializer() {
    ByteTypedArraySerializer_instance = this;
    var elementSerializer = serializer_3(kotlin_js_internal_ByteCompanionObject);
    this.$delegate_n84to4$_0 = ArraySerializer(PrimitiveClasses$byteClass, elementSerializer);
  }
  Object.defineProperty(ByteTypedArraySerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.$delegate_n84to4$_0.descriptor;
    }
  });
  ByteTypedArraySerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return this.$delegate_n84to4$_0.deserialize_bq71mq$(decoder);
  };
  ByteTypedArraySerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    return this.$delegate_n84to4$_0.serialize_55azsf$(encoder, value);
  };
  ByteTypedArraySerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ByteTypedArraySerializer',
    interfaces: [KSerializer]
  };
  var ByteTypedArraySerializer_instance = null;
  function ByteTypedArraySerializer_getInstance() {
    if (ByteTypedArraySerializer_instance === null) {
      new ByteTypedArraySerializer();
    }
    return ByteTypedArraySerializer_instance;
  }
  function ShortTypedArraySerializer() {
    ShortTypedArraySerializer_instance = this;
    var elementSerializer = serializer_4(kotlin_js_internal_ShortCompanionObject);
    this.$delegate_gt72qu$_0 = ArraySerializer(PrimitiveClasses$shortClass, elementSerializer);
  }
  Object.defineProperty(ShortTypedArraySerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.$delegate_gt72qu$_0.descriptor;
    }
  });
  ShortTypedArraySerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return this.$delegate_gt72qu$_0.deserialize_bq71mq$(decoder);
  };
  ShortTypedArraySerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    return this.$delegate_gt72qu$_0.serialize_55azsf$(encoder, value);
  };
  ShortTypedArraySerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ShortTypedArraySerializer',
    interfaces: [KSerializer]
  };
  var ShortTypedArraySerializer_instance = null;
  function ShortTypedArraySerializer_getInstance() {
    if (ShortTypedArraySerializer_instance === null) {
      new ShortTypedArraySerializer();
    }
    return ShortTypedArraySerializer_instance;
  }
  function CharTypedArraySerializer() {
    CharTypedArraySerializer_instance = this;
    var elementSerializer = serializer_5(kotlin_js_internal_CharCompanionObject);
    this.$delegate_rfcqhm$_0 = ArraySerializer(getKClass(Char), elementSerializer);
  }
  Object.defineProperty(CharTypedArraySerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.$delegate_rfcqhm$_0.descriptor;
    }
  });
  CharTypedArraySerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return this.$delegate_rfcqhm$_0.deserialize_bq71mq$(decoder);
  };
  CharTypedArraySerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    return this.$delegate_rfcqhm$_0.serialize_55azsf$(encoder, value);
  };
  CharTypedArraySerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CharTypedArraySerializer',
    interfaces: [KSerializer]
  };
  var CharTypedArraySerializer_instance = null;
  function CharTypedArraySerializer_getInstance() {
    if (CharTypedArraySerializer_instance === null) {
      new CharTypedArraySerializer();
    }
    return CharTypedArraySerializer_instance;
  }
  function StringTypedArraySerializer() {
    StringTypedArraySerializer_instance = this;
    var elementSerializer = serializer(kotlin_js_internal_StringCompanionObject);
    this.$delegate_83as17$_0 = ArraySerializer(PrimitiveClasses$stringClass, elementSerializer);
  }
  Object.defineProperty(StringTypedArraySerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.$delegate_83as17$_0.descriptor;
    }
  });
  StringTypedArraySerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return this.$delegate_83as17$_0.deserialize_bq71mq$(decoder);
  };
  StringTypedArraySerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    return this.$delegate_83as17$_0.serialize_55azsf$(encoder, value);
  };
  StringTypedArraySerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'StringTypedArraySerializer',
    interfaces: [KSerializer]
  };
  var StringTypedArraySerializer_instance = null;
  function StringTypedArraySerializer_getInstance() {
    if (StringTypedArraySerializer_instance === null) {
      new StringTypedArraySerializer();
    }
    return StringTypedArraySerializer_instance;
  }
  function LongTypedArraySerializer() {
    LongTypedArraySerializer_instance = this;
    var elementSerializer = serializer_6(kotlin_js_internal_LongCompanionObject);
    this.$delegate_uxz8ow$_0 = ArraySerializer(getKClass(Long), elementSerializer);
  }
  Object.defineProperty(LongTypedArraySerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.$delegate_uxz8ow$_0.descriptor;
    }
  });
  LongTypedArraySerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return this.$delegate_uxz8ow$_0.deserialize_bq71mq$(decoder);
  };
  LongTypedArraySerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    return this.$delegate_uxz8ow$_0.serialize_55azsf$(encoder, value);
  };
  LongTypedArraySerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LongTypedArraySerializer',
    interfaces: [KSerializer]
  };
  var LongTypedArraySerializer_instance = null;
  function LongTypedArraySerializer_getInstance() {
    if (LongTypedArraySerializer_instance === null) {
      new LongTypedArraySerializer();
    }
    return LongTypedArraySerializer_instance;
  }
  function YamlDynamicMapSerializer() {
    YamlDynamicMapSerializer_instance = this;
    this.$delegate_fkzeh3$_0 = MapSerializer(YamlNullableDynamicSerializer_getInstance(), YamlNullableDynamicSerializer_getInstance());
  }
  Object.defineProperty(YamlDynamicMapSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.$delegate_fkzeh3$_0.descriptor;
    }
  });
  YamlDynamicMapSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return this.$delegate_fkzeh3$_0.deserialize_bq71mq$(decoder);
  };
  YamlDynamicMapSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    return this.$delegate_fkzeh3$_0.serialize_55azsf$(encoder, value);
  };
  YamlDynamicMapSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'YamlDynamicMapSerializer',
    interfaces: [KSerializer]
  };
  var YamlDynamicMapSerializer_instance = null;
  function YamlDynamicMapSerializer_getInstance() {
    if (YamlDynamicMapSerializer_instance === null) {
      new YamlDynamicMapSerializer();
    }
    return YamlDynamicMapSerializer_instance;
  }
  function YamlDynamicListSerializer() {
    YamlDynamicListSerializer_instance = this;
    this.$delegate_tsmojf$_0 = ListSerializer(YamlNullableDynamicSerializer_getInstance());
  }
  Object.defineProperty(YamlDynamicListSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.$delegate_tsmojf$_0.descriptor;
    }
  });
  YamlDynamicListSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return this.$delegate_tsmojf$_0.deserialize_bq71mq$(decoder);
  };
  YamlDynamicListSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    return this.$delegate_tsmojf$_0.serialize_55azsf$(encoder, value);
  };
  YamlDynamicListSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'YamlDynamicListSerializer',
    interfaces: [KSerializer]
  };
  var YamlDynamicListSerializer_instance = null;
  function YamlDynamicListSerializer_getInstance() {
    if (YamlDynamicListSerializer_instance === null) {
      new YamlDynamicListSerializer();
    }
    return YamlDynamicListSerializer_instance;
  }
  var ESC2C_MAX;
  var STRING;
  var STRING_ESC;
  var INVALID;
  var UNICODE_ESC;
  var REPLACEMENT_CHARS;
  function EscapeCharMappings() {
    EscapeCharMappings_instance = this;
    this.ESCAPE_2_CHAR = Kotlin.charArray(117);
    for (var i = 0; i <= 31; i++) {
      this.initC2ESC_0(i, UNICODE_ESC);
    }
    this.initC2ESC_0(8, 98);
    this.initC2ESC_0(9, 116);
    this.initC2ESC_0(10, 110);
    this.initC2ESC_0(12, 102);
    this.initC2ESC_0(13, 114);
    this.initC2ESC_1(47, 47);
    this.initC2ESC_1(STRING, STRING);
    this.initC2ESC_1(STRING_ESC, STRING_ESC);
  }
  EscapeCharMappings.prototype.initC2ESC_0 = function (c, esc) {
    if (esc !== UNICODE_ESC) {
      this.ESCAPE_2_CHAR[esc | 0] = toChar(c);
    }
  };
  EscapeCharMappings.prototype.initC2ESC_1 = function (c, esc) {
    this.initC2ESC_0(c | 0, esc);
  };
  EscapeCharMappings.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'EscapeCharMappings',
    interfaces: []
  };
  var EscapeCharMappings_instance = null;
  function EscapeCharMappings_getInstance() {
    if (EscapeCharMappings_instance === null) {
      new EscapeCharMappings();
    }
    return EscapeCharMappings_instance;
  }
  function escapeToChar(c) {
    return unboxChar(c < 117 ? EscapeCharMappings_getInstance().ESCAPE_2_CHAR[c] : INVALID);
  }
  function readSingleQuotedString$lambda(it) {
    return unboxChar(it) === 32;
  }
  function readSingleQuotedString($receiver) {
    var startCur = {v: $receiver.cur};
    var escapedOnce = {v: false};
    while (!($receiver.cur === $receiver.source.length)) {
      if (readSingleQuotedString$lambda(toBoxedChar($receiver.source.charCodeAt($receiver.cur)))) {
        $receiver.cur = $receiver.cur + 1 | 0;
      } else {
        break;
      }
    }
    var $receiver_0 = $receiver.source.charCodeAt($receiver.cur);
    if ($receiver_0 === 10 || $receiver_0 === 13) {
      $receiver.cur = $receiver.cur + 1 | 0;
      escapedOnce.v = true;
      runNewLineSkippingAndEscaping($receiver);
      startCur.v = $receiver.cur;
    }
    var tmp$;
    while (!($receiver.cur === $receiver.source.length)) {
      var char = toBoxedChar($receiver.source.charCodeAt((tmp$ = $receiver.cur, $receiver.cur = tmp$ + 1 | 0, tmp$)));
      if (unboxChar(char) === SINGLE_QUOTATION_CHAR) {
        if (!($receiver.cur === $receiver.source.length) && $receiver.source.charCodeAt($receiver.cur) === SINGLE_QUOTATION_CHAR) {
          $receiver.cur = $receiver.cur + 1 | 0;
          $receiver.append_3m52m6$($receiver.source, startCur.v, $receiver.cur - 2 | 0);
          escapedOnce.v = true;
          startCur.v = $receiver.cur;
        } else {
          if (!escapedOnce.v) {
            var $receiver_1 = $receiver.source;
            var startIndex = startCur.v;
            var endIndex = $receiver.cur - 1 | 0;
            return $receiver_1.substring(startIndex, endIndex);
          }
          $receiver.append_3m52m6$($receiver.source, startCur.v, $receiver.cur - 2 | 0);
          return $receiver.takeStringBuf();
        }
      } else {
        var $receiver_2 = unboxChar(char);
        if ($receiver_2 === 10 || $receiver_2 === 13) {
          $receiver.append_3m52m6$($receiver.source, startCur.v, $receiver.cur - 2 | 0);
          runNewLineSkippingAndEscaping($receiver);
          startCur.v = $receiver.cur;
          escapedOnce.v = true;
        }
      }
    }
    null;
    throw contextualDecodingException_4($receiver, 'Unexpected EOF', null, -1);
  }
  function readUnquotedString$lambda(it) {
    return unboxChar(it) === 32;
  }
  function readUnquotedString$doEnd(closure$escapedOnce, closure$startCur, this$readUnquotedString) {
    return function () {
      if (!closure$escapedOnce.v) {
        return this$readUnquotedString.subSourceTrimEnd_vux9f0$(closure$startCur.v, this$readUnquotedString.cur - 1 | 0);
      }
      this$readUnquotedString.append_3m52m6$(this$readUnquotedString.source, closure$startCur.v, this$readUnquotedString.cur - 2 | 0);
      return this$readUnquotedString.takeStringBufTrimEnd();
    };
  }
  function readUnquotedString($receiver, stopOnComma, begin) {
    var startingIndent = $receiver.currentIndent;
    var startCur = {v: $receiver.cur - 1 | 0};
    var escapedOnce = {v: false};
    var tmp$ = $receiver.leadingSpace;
    var start = $receiver.cur;
    while (!($receiver.cur === $receiver.source.length)) {
      if (readUnquotedString$lambda(toBoxedChar($receiver.source.charCodeAt($receiver.cur)))) {
        $receiver.cur = $receiver.cur + 1 | 0;
      } else {
        break;
      }
    }
    $receiver.leadingSpace = tmp$ + ($receiver.cur - start | 0) | 0;
    var doEnd = readUnquotedString$doEnd(escapedOnce, startCur, $receiver);
    var tmp$_0;
    var char = toBoxedChar(begin);
    var $receiver_0 = unboxChar(char);
    if ($receiver_0 === 10 || $receiver_0 === 13) {
      $receiver.currentIndent = 0;
      $receiver.append_3m52m6$($receiver.source, startCur.v, $receiver.cur - 2 | 0);
      escapedOnce.v = true;
      if (!runNewLineSkippingAndEscapingForUnquoted($receiver, startingIndent)) {
        return $receiver.takeStringBufTrimEnd();
      }
      startCur.v = $receiver.cur;
    } else {
      switch (unboxChar(char)) {
        case 58:
          $receiver.reuseToken_ybqaeu$(Token$COLON_getInstance());
          return doEnd();
        case 44:
          if (stopOnComma) {
            $receiver.reuseToken_ybqaeu$(Token$COMMA_getInstance());
            return doEnd();
          }

          break;
        case 124:
          return readMultilineString($receiver, getCallableRef('readLinesForMultilineLiteralString', function ($receiver_0, p1_0, p2_0) {
            return readLinesForMultilineLiteralString($receiver_0, p1_0, p2_0), Unit;
          }));
        case 62:
          return readMultilineString($receiver, getCallableRef('readLinesForMultilineFoldedString', function ($receiver_0, p1_0, p2_0) {
            return readLinesForMultilineFoldedString($receiver_0, p1_0, p2_0), Unit;
          }));
        case 91:
          $receiver.reuseToken_ybqaeu$(Token$LIST_BEGIN_getInstance());
          return doEnd();
        case 93:
          $receiver.reuseToken_ybqaeu$(Token$LIST_END_getInstance());
          return doEnd();
        case 123:
          $receiver.reuseToken_ybqaeu$(Token$MAP_BEGIN_getInstance());
          return doEnd();
        case 125:
          $receiver.reuseToken_ybqaeu$(Token$MAP_END_getInstance());
          return doEnd();
        case 35:
          var block$result;
          if (!escapedOnce.v) {
            block$result = $receiver.subSourceTrimEnd_vux9f0$(startCur.v, $receiver.cur - 1 | 0);
          } else {
            $receiver.append_3m52m6$($receiver.source, startCur.v, $receiver.cur - 2 | 0);
            block$result = $receiver.takeStringBufTrimEnd();
          }

          var toString = block$result;
          skipLine($receiver);
          $receiver.cur = $receiver.cur - 1 | 0;
          $receiver.currentIndent = 0;
          return toString;
      }
    }
    while (!($receiver.cur === $receiver.source.length)) {
      var char_0 = toBoxedChar($receiver.source.charCodeAt((tmp$_0 = $receiver.cur, $receiver.cur = tmp$_0 + 1 | 0, tmp$_0)));
      var $receiver_1 = unboxChar(char_0);
      if ($receiver_1 === 10 || $receiver_1 === 13) {
        $receiver.currentIndent = 0;
        $receiver.append_3m52m6$($receiver.source, startCur.v, $receiver.cur - 2 | 0);
        escapedOnce.v = true;
        if (!runNewLineSkippingAndEscapingForUnquoted($receiver, startingIndent)) {
          return $receiver.takeStringBufTrimEnd();
        }
        startCur.v = $receiver.cur;
      } else {
        switch (unboxChar(char_0)) {
          case 58:
            $receiver.reuseToken_ybqaeu$(Token$COLON_getInstance());
            return doEnd();
          case 44:
            if (stopOnComma) {
              $receiver.reuseToken_ybqaeu$(Token$COMMA_getInstance());
              return doEnd();
            }

            break;
          case 124:
            return readMultilineString($receiver, getCallableRef('readLinesForMultilineLiteralString', function ($receiver_0, p1_0, p2_0) {
              return readLinesForMultilineLiteralString($receiver_0, p1_0, p2_0), Unit;
            }));
          case 62:
            return readMultilineString($receiver, getCallableRef('readLinesForMultilineFoldedString', function ($receiver_0, p1_0, p2_0) {
              return readLinesForMultilineFoldedString($receiver_0, p1_0, p2_0), Unit;
            }));
          case 91:
            $receiver.reuseToken_ybqaeu$(Token$LIST_BEGIN_getInstance());
            return doEnd();
          case 93:
            $receiver.reuseToken_ybqaeu$(Token$LIST_END_getInstance());
            return doEnd();
          case 123:
            $receiver.reuseToken_ybqaeu$(Token$MAP_BEGIN_getInstance());
            return doEnd();
          case 125:
            $receiver.reuseToken_ybqaeu$(Token$MAP_END_getInstance());
            return doEnd();
          case 35:
            var block$result_0;
            if (!escapedOnce.v) {
              block$result_0 = $receiver.subSourceTrimEnd_vux9f0$(startCur.v, $receiver.cur - 1 | 0);
            } else {
              $receiver.append_3m52m6$($receiver.source, startCur.v, $receiver.cur - 2 | 0);
              block$result_0 = $receiver.takeStringBufTrimEnd();
            }

            var toString_0 = block$result_0;
            skipLine($receiver);
            $receiver.cur = $receiver.cur - 1 | 0;
            $receiver.currentIndent = 0;
            return toString_0;
        }
      }
    }
    null;
    if (!escapedOnce.v) {
      return $receiver.subSourceTrimEnd_vux9f0$(startCur.v, $receiver.cur);
    }
    $receiver.append_3m52m6$($receiver.source, startCur.v, $receiver.cur - 1 | 0);
    return $receiver.takeStringBufTrimEnd();
  }
  function readMultilineString($receiver, readLines) {
    var tmp$;
    var tmp$_0 = takeChompCharacter($receiver);
    var trimEnd_0 = tmp$_0.component1()
    , keepTrailingNewlines = tmp$_0.component2();
    advanceToEndOfLineThrowIfNotWhitespace($receiver);
    if (!($receiver.cur === $receiver.source.length)) {
      $receiver.cur = $receiver.cur + 1 | 0;
    }
    var tmp$_1 = advanceToNextNonBlankLine($receiver);
    var firstLineIndent = tmp$_1.component1()
    , prependedNewlineCount = tmp$_1.component2();
    if (firstLineIndent < $receiver.currentIndent) {
      if (!($receiver.cur === $receiver.source.length)) {
        $receiver.cur = $receiver.cur - (firstLineIndent + 1) | 0;
      }
      return $receiver.takeStringBufTrimEnd();
    }
    for (var i = 0; i < prependedNewlineCount; i++) {
      $receiver.append_s8itvh$(10);
    }
    readLines($receiver, firstLineIndent, keepTrailingNewlines);
    if (trimEnd_0) {
      var $receiver_0 = $receiver.takeStringBufTrimEnd();
      var tmp$_2;
      tmp$ = trimEnd(Kotlin.isCharSequence(tmp$_2 = $receiver_0) ? tmp$_2 : throwCCE()).toString();
    } else if (keepTrailingNewlines) {
      tmp$ = $receiver.takeStringBufTrimEnd();
    } else {
      var $receiver_1 = $receiver.takeStringBufTrimEnd();
      var tmp$_3;
      tmp$ = trimEnd(Kotlin.isCharSequence(tmp$_3 = $receiver_1) ? tmp$_3 : throwCCE()).toString() + '\n';
    }
    return tmp$;
  }
  function readLinesForMultilineFoldedString($receiver, foldingIndent, keepTrailingLines) {
    var lineNumber = 0;
    var currentLineIndent = foldingIndent;
    var previousLineBlank = true;
    var trailingBlankLines = 0;
    while (true) {
      var tmp$ = currentLineIndent >= foldingIndent;
      if (tmp$) {
        tmp$ = !($receiver.cur === $receiver.source.length);
      }
      if (!tmp$)
        break;
      readLineForMultilineFoldedString($receiver, lineNumber, foldingIndent, currentLineIndent, previousLineBlank);
      var tmp$_0 = advanceToNextNonBlankLine($receiver);
      var nextIndent = tmp$_0.component1()
      , blankLineCount = tmp$_0.component2();
      previousLineBlank = blankLineCount > 0;
      trailingBlankLines = blankLineCount;
      currentLineIndent = nextIndent;
      if (blankLineCount > 0) {
        $receiver.append_s8itvh$(10);
      }
      lineNumber = lineNumber + 1 | 0;
    }
    finishMultilineString($receiver, foldingIndent, currentLineIndent, lineNumber, keepTrailingLines, trailingBlankLines);
  }
  function finishMultilineString($receiver, foldingIndent, currentLineIndent, lineNumber, keepTrailingLines, trailingBlankLines) {
    if (keepTrailingLines) {
      for (var i = 0; i < trailingBlankLines; i++) {
        $receiver.append_s8itvh$(10);
      }
    }
    if (lineNumber > 0 && currentLineIndent >= foldingIndent) {
      $receiver.append_s8itvh$(10);
    }
    if (!($receiver.cur === $receiver.source.length)) {
      $receiver.cur = $receiver.cur - (currentLineIndent + 1) | 0;
    }
  }
  function readLineForMultilineFoldedString($receiver, lineNumber, foldingIndent, lineIndent, previousLineBlank) {
    var tmp$;
    var lineStart = $receiver.cur;
    var lineLength = 0;
    while (!($receiver.cur === $receiver.source.length) && $receiver.source.charCodeAt($receiver.cur) !== 10) {
      lineLength = lineLength + 1 | 0;
      $receiver.cur = $receiver.cur + 1 | 0;
    }
    if (lineNumber > 0) {
      if (lineIndent > foldingIndent) {
        $receiver.append_s8itvh$(10);
        tmp$ = foldingIndent + 1 | 0;
        for (var i = lineIndent; i >= tmp$; i--) {
          $receiver.append_s8itvh$(32);
        }
      } else {
        if (lineLength > 0 && !previousLineBlank) {
          $receiver.append_s8itvh$(32);
        }
      }
    }
    if (lineLength > 0) {
      $receiver.append_3m52m6$($receiver.source, lineStart, $receiver.cur - 1 | 0);
    }
    if (!($receiver.cur === $receiver.source.length)) {
      $receiver.cur = $receiver.cur + 1 | 0;
    }
    return lineLength;
  }
  function readLineForMultilineLiteralString($receiver, lineNumber, foldingIndent, lineIndent, previousLineBlank) {
    var tmp$;
    var lineStart = $receiver.cur;
    var lineLength = 0;
    while (!($receiver.cur === $receiver.source.length) && $receiver.source.charCodeAt($receiver.cur) !== 10) {
      lineLength = lineLength + 1 | 0;
      $receiver.cur = $receiver.cur + 1 | 0;
    }
    if (lineNumber > 0) {
      $receiver.append_s8itvh$(10);
      if (lineIndent > foldingIndent) {
        tmp$ = foldingIndent + 1 | 0;
        for (var i = lineIndent; i >= tmp$; i--) {
          $receiver.append_s8itvh$(32);
        }
      }
    }
    if (lineLength > 0) {
      $receiver.append_3m52m6$($receiver.source, lineStart, $receiver.cur - 1 | 0);
    }
    if (!($receiver.cur === $receiver.source.length)) {
      $receiver.cur = $receiver.cur + 1 | 0;
    }
    return lineLength;
  }
  function readLinesForMultilineLiteralString($receiver, foldingIndent, keepTrailingLines) {
    var lineNumber = 0;
    var currentLineIndent = foldingIndent;
    var previousLineBlank = true;
    var trailingBlankLines = 0;
    while (true) {
      var tmp$ = currentLineIndent >= foldingIndent;
      if (tmp$) {
        tmp$ = !($receiver.cur === $receiver.source.length);
      }
      if (!tmp$)
        break;
      readLineForMultilineLiteralString($receiver, lineNumber, foldingIndent, currentLineIndent, previousLineBlank);
      var tmp$_0 = advanceToNextNonBlankLine($receiver);
      var nextIndent = tmp$_0.component1()
      , blankLineCount = tmp$_0.component2();
      previousLineBlank = blankLineCount > 0;
      trailingBlankLines = blankLineCount;
      currentLineIndent = nextIndent;
      for (var i = 0; i < blankLineCount; i++) {
        $receiver.append_s8itvh$(10);
      }
      lineNumber = lineNumber + 1 | 0;
    }
    finishMultilineString($receiver, foldingIndent, currentLineIndent, lineNumber, keepTrailingLines, trailingBlankLines);
  }
  function advanceToNextNonBlankLine$lambda(it) {
    return unboxChar(it) === 32;
  }
  function advanceToNextNonBlankLine$lambda_0(it) {
    return unboxChar(it) === 32;
  }
  function advanceToNextNonBlankLine($receiver) {
    var start = $receiver.cur;
    while (!($receiver.cur === $receiver.source.length)) {
      if (advanceToNextNonBlankLine$lambda(toBoxedChar($receiver.source.charCodeAt($receiver.cur)))) {
        $receiver.cur = $receiver.cur + 1 | 0;
      } else {
        break;
      }
    }
    var lineIndent = $receiver.cur - start | 0;
    var prependedNewlineCount = 0;
    while (!($receiver.cur === $receiver.source.length) && $receiver.source.charCodeAt($receiver.cur) === 10) {
      prependedNewlineCount = prependedNewlineCount + 1 | 0;
      $receiver.cur = $receiver.cur + 1 | 0;
      var start_0 = $receiver.cur;
      while (!($receiver.cur === $receiver.source.length)) {
        if (advanceToNextNonBlankLine$lambda_0(toBoxedChar($receiver.source.charCodeAt($receiver.cur)))) {
          $receiver.cur = $receiver.cur + 1 | 0;
        } else {
          break;
        }
      }
      lineIndent = $receiver.cur - start_0 | 0;
    }
    return new Pair(lineIndent, prependedNewlineCount);
  }
  function advanceToEndOfLineThrowIfNotWhitespace($receiver) {
    while (!($receiver.cur === $receiver.source.length) && $receiver.source.charCodeAt($receiver.cur) === 32 && $receiver.source.charCodeAt($receiver.cur) !== 10) {
      $receiver.cur = $receiver.cur + 1 | 0;
    }
    if (!($receiver.cur === $receiver.source.length) && $receiver.source.charCodeAt($receiver.cur) !== 10) {
      throw contextualDecodingException_4($receiver, "Only whitespace allowed after '>'", null, -1);
    }
  }
  function takeChompCharacter($receiver) {
    var startChar = !($receiver.cur === $receiver.source.length) ? $receiver.source.charCodeAt($receiver.cur) : 10;
    var trimEnd = startChar === 45;
    var keepTrailingNewlines = startChar === 43;
    if (keepTrailingNewlines || trimEnd) {
      $receiver.cur = $receiver.cur + 1 | 0;
    }
    return new Pair(trimEnd, keepTrailingNewlines);
  }
  function runNewLineSkippingAndEscapingForUnquoted$lambda(it) {
    return unboxChar(it) === 32;
  }
  function runNewLineSkippingAndEscapingForUnquoted($receiver, initialIntent, addCaret) {
    if (addCaret === void 0)
      addCaret = true;
    var tmp$;
    if ($receiver.cur === $receiver.source.length)
      return true;
    var start = $receiver.cur;
    while (!($receiver.cur === $receiver.source.length)) {
      if (runNewLineSkippingAndEscapingForUnquoted$lambda(toBoxedChar($receiver.source.charCodeAt($receiver.cur)))) {
        $receiver.cur = $receiver.cur + 1 | 0;
      } else {
        break;
      }
    }
    var newIntent = $receiver.cur - start | 0;
    if (newIntent <= initialIntent) {
      $receiver.cur = $receiver.cur - newIntent | 0;
      return false;
    }
    if ($receiver.cur === $receiver.source.length)
      return true;
    var next = $receiver.source.charCodeAt($receiver.cur);
    if (next === 10 || next === 13) {
      $receiver.cur = $receiver.cur + 1 | 0;
      $receiver.append_s8itvh$(10);
      tmp$ = runNewLineSkippingAndEscapingForUnquoted($receiver, initialIntent, false);
    } else {
      if (addCaret)
        $receiver.append_s8itvh$(32);
      tmp$ = true;
    }
    return tmp$;
  }
  var ensureNotEOF = defineInlineFunction('yamlkt.net.mamoe.yamlkt.internal.ensureNotEOF_btbr4a$', wrapFunction(function () {
    var contextualDecodingException = _.net.mamoe.yamlkt.internal.contextualDecodingException_fjiswb$;
    return function ($receiver) {
      if ($receiver.cur === $receiver.source.length) {
        throw contextualDecodingException($receiver, 'Unexpected EOF', null, -1);
      }
    };
  }));
  function runNewLineSkippingAndEscaping$lambda(it) {
    return unboxChar(it) === 32;
  }
  function runNewLineSkippingAndEscaping($receiver, addCaret) {
    if (addCaret === void 0)
      addCaret = true;
    if ($receiver.cur === $receiver.source.length) {
      throw contextualDecodingException_4($receiver, 'Unexpected EOF', null, -1);
    }
    while (!($receiver.cur === $receiver.source.length)) {
      if (runNewLineSkippingAndEscaping$lambda(toBoxedChar($receiver.source.charCodeAt($receiver.cur)))) {
        $receiver.cur = $receiver.cur + 1 | 0;
      } else {
        break;
      }
    }
    if ($receiver.cur === $receiver.source.length) {
      throw contextualDecodingException_4($receiver, 'Unexpected EOF', null, -1);
    }
    var next = $receiver.source.charCodeAt($receiver.cur);
    if (next === 10 || next === 13) {
      $receiver.cur = $receiver.cur + 1 | 0;
      $receiver.append_s8itvh$(10);
      runNewLineSkippingAndEscaping($receiver, false);
    } else {
      if (addCaret)
        $receiver.append_s8itvh$(32);
      return;
    }
  }
  function readDoubleQuotedString$lambda(it) {
    return unboxChar(it) === 32;
  }
  function readDoubleQuotedString($receiver) {
    var startCur = {v: $receiver.cur};
    var escapedOnce = {v: false};
    while (!($receiver.cur === $receiver.source.length)) {
      if (readDoubleQuotedString$lambda(toBoxedChar($receiver.source.charCodeAt($receiver.cur)))) {
        $receiver.cur = $receiver.cur + 1 | 0;
      } else {
        break;
      }
    }
    var $receiver_0 = $receiver.source.charCodeAt($receiver.cur);
    if ($receiver_0 === 10 || $receiver_0 === 13) {
      $receiver.cur = $receiver.cur + 1 | 0;
      escapedOnce.v = true;
      runNewLineSkippingAndEscaping($receiver);
      startCur.v = $receiver.cur;
    }
    var tmp$;
    while (!($receiver.cur === $receiver.source.length)) {
      var char = toBoxedChar($receiver.source.charCodeAt((tmp$ = $receiver.cur, $receiver.cur = tmp$ + 1 | 0, tmp$)));
      var tmp$_0, tmp$_1;
      if (unboxChar(char) === DOUBLE_QUOTATION_CHAR) {
        if (!escapedOnce.v) {
          var $receiver_1 = $receiver.source;
          var startIndex = startCur.v;
          var endIndex = $receiver.cur - 1 | 0;
          return $receiver_1.substring(startIndex, endIndex);
        }
        $receiver.append_3m52m6$($receiver.source, startCur.v, $receiver.cur - 2 | 0);
        return $receiver.takeStringBuf();
      } else {
        var $receiver_2 = unboxChar(char);
        if ($receiver_2 === 10 || $receiver_2 === 13) {
          $receiver.append_3m52m6$($receiver.source, startCur.v, $receiver.cur - 2 | 0);
          runNewLineSkippingAndEscaping($receiver);
          startCur.v = $receiver.cur;
          escapedOnce.v = true;
        } else if (unboxChar(char) === STRING_ESC) {
          $receiver.append_3m52m6$($receiver.source, startCur.v, $receiver.cur - 2 | 0);
          startCur.v = $receiver.cur + 1 | 0;
          escapedOnce.v = true;
          if ($receiver.cur === $receiver.source.length) {
            throw contextualDecodingException_4($receiver, 'Unexpected EOF', null, -1);
          }
          var esChar = $receiver.source.charCodeAt((tmp$_0 = $receiver.cur, $receiver.cur = tmp$_0 + 1 | 0, tmp$_0));
          if (esChar === 10 || esChar === 13) {
            var block = getCallableRef('isWhitespace', function ($receiver) {
              return isWhitespace(unboxChar($receiver));
            });
            while (!($receiver.cur === $receiver.source.length)) {
              if (block(toBoxedChar($receiver.source.charCodeAt($receiver.cur)))) {
                $receiver.cur = $receiver.cur + 1 | 0;
              } else {
                break;
              }
            }
            startCur.v = $receiver.cur;
          } else if (isWhitespace(esChar)) {
            $receiver.append_s8itvh$(32);
            startCur.v = $receiver.cur;
          } else {
            var es = escapeToChar(esChar | 0);
            if (es !== INVALID) {
              $receiver.append_s8itvh$(es);
              startCur.v = $receiver.cur;
            } else {
              switch (esChar) {
                case 120:
                  tmp$_1 = 2;
                  break;
                case 117:
                  tmp$_1 = 4;
                  break;
                case 85:
                  tmp$_1 = 8;
                  break;
                default:
                  throw contextualDecodingException_4($receiver, "Illegal escape '" + String.fromCharCode(esChar) + "' when reading double quoted String", null, -1);
              }
              var digitCount = tmp$_1;
              loop_label: for (var index = 0; index < digitCount; index++) {
                useNext$break: do {
                  var tmp$_2;
                  if ($receiver.cur === $receiver.source.length) {
                    null;
                    break useNext$break;
                  }
                  var c = toBoxedChar($receiver.source.charCodeAt((tmp$_2 = $receiver.cur, $receiver.cur = tmp$_2 + 1 | 0, tmp$_2)));
                  var $receiver_3 = unboxChar(c);
                  if (!((new CharRange(48, 57)).contains_mef7kx$($receiver_3) || (new CharRange(97, 102)).contains_mef7kx$($receiver_3) || (new CharRange(65, 70)).contains_mef7kx$($receiver_3))) {
                    throw contextualDecodingException_4($receiver, "Expected hex digit but found '" + String.fromCharCode(unboxChar(c)) + "'", null, -1);
                  }
                  $receiver.appendEsc_s8itvh$(unboxChar(c));
                }
                 while (false);
              }
              startCur.v = $receiver.cur;
              $receiver.flushEsc();
            }
          }
        }
      }
    }
    null;
    throw contextualDecodingException_4($receiver, 'Unexpected EOF', null, -1);
  }
  var useNext = defineInlineFunction('yamlkt.net.mamoe.yamlkt.internal.useNext_75u3kf$', wrapFunction(function () {
    var toBoxedChar = Kotlin.toBoxedChar;
    return function ($receiver, block) {
      var tmp$;
      if ($receiver.cur === $receiver.source.length)
        return null;
      return block(toBoxedChar($receiver.source.charCodeAt((tmp$ = $receiver.cur, $receiver.cur = tmp$ + 1 | 0, tmp$))));
    };
  }));
  var peekNext = defineInlineFunction('yamlkt.net.mamoe.yamlkt.internal.peekNext_75u3kf$', wrapFunction(function () {
    var toBoxedChar = Kotlin.toBoxedChar;
    return function ($receiver, block) {
      if ($receiver.cur === $receiver.source.length)
        return null;
      return block(toBoxedChar($receiver.source.charCodeAt($receiver.cur + 1 | 0)));
    };
  }));
  var isHexDigit = defineInlineFunction('yamlkt.net.mamoe.yamlkt.internal.isHexDigit_nupfqh$', wrapFunction(function () {
    var CharRange = Kotlin.kotlin.ranges.CharRange;
    return function ($receiver) {
      return (new CharRange(48, 57)).contains_mef7kx$($receiver) || (new CharRange(97, 102)).contains_mef7kx$($receiver) || (new CharRange(65, 70)).contains_mef7kx$($receiver);
    };
  }));
  function toEscapedString($receiver, buf, stringSerialization) {
    var tmp$;
    var availability = getQuotationAvailability($receiver);
    var tmp$_0 = stringSerialization === YamlBuilder$StringSerialization$SINGLE_QUOTATION_getInstance();
    if (tmp$_0) {
      tmp$_0 = (availability & 1) !== 0;
    }
    if (tmp$_0)
      return "'" + $receiver + "'";
    else {
      var tmp$_1 = stringSerialization === YamlBuilder$StringSerialization$NONE_getInstance();
      if (tmp$_1) {
        tmp$_1 = (availability & 2) !== 0;
      }
      if (tmp$_1)
        return $receiver;
      else if (stringSerialization === YamlBuilder$StringSerialization$DOUBLE_QUOTATION_getInstance()) {
        return (availability & 4) !== 0 ? '"' + $receiver + '"' : toDoubleQuotedString($receiver, buf);
      }
    }
    if ((availability & 2) !== 0)
      tmp$ = $receiver;
    else {
      if ((availability & 1) !== 0)
        tmp$ = "'" + $receiver + "'";
      else {
        if ((availability & 4) !== 0)
          tmp$ = '"' + $receiver + '"';
        else {
          return (availability & 4) !== 0 ? '"' + $receiver + '"' : toDoubleQuotedString($receiver, buf);
        }
      }
    }
    return tmp$;
  }
  function toDoubleQuotedString($receiver, buf) {
    var tmp$;
    buf.append_s8itvh$(34);
    tmp$ = iterator($receiver);
    while (tmp$.hasNext()) {
      var ch = unboxChar(tmp$.next());
      var es = getOrNull(REPLACEMENT_CHARS, ch | 0);
      if (es != null) {
        buf.append_3m52m6$(es, 0, es.length - 1 | 0);
      } else
        buf.append_s8itvh$(ch);
    }
    buf.append_s8itvh$(34);
    return buf.takeStringBuf();
  }
  function hasFlag($receiver, flag) {
    return ($receiver & flag) !== 0;
  }
  var SINGLE;
  var UNQUOTED;
  var DOUBLE_WITHOUT_ESCAPE;
  function getQuotationAvailability($receiver) {
    var tmp$;
    if ($receiver.length === 0) {
      return 5;
    }
    var canBeSingleQuoted = true;
    var canBeUnquoted = true;
    var doubleWithoutEscape = true;
    if (isWhitespace(first($receiver)) || isWhitespace(last($receiver))) {
      canBeUnquoted = false;
    }
    var lastIsColon = false;
    tmp$ = iterator($receiver);
    while (tmp$.hasNext()) {
      var c = unboxChar(tmp$.next());
      if (!doubleWithoutEscape && !canBeSingleQuoted && !canBeUnquoted)
        return 0;
      else {
        if (c === 10 || c === 13)
          return 0;
        else {
          var tmp$_0 = doubleWithoutEscape;
          if (tmp$_0) {
            tmp$_0 = getOrNull(REPLACEMENT_CHARS, c | 0) != null;
          }
          if (tmp$_0)
            doubleWithoutEscape = false;
          else if (c === 39) {
            canBeSingleQuoted = false;
            canBeUnquoted = false;
          } else if (c === 34) {
            doubleWithoutEscape = false;
            canBeUnquoted = false;
          } else if (c === 35)
            canBeUnquoted = false;
          else if (c === 58)
            lastIsColon = true;
          else if (c === 32 && lastIsColon)
            canBeUnquoted = false;
          else if (contains(trimIndent('\n                []{}"\'$^*|>-?/~\n                '), c))
            canBeUnquoted = false;
        }
      }
    }
    if (lastIsColon)
      canBeUnquoted = false;
    return (canBeSingleQuoted ? 1 : 0) | (canBeUnquoted ? 2 : 0) | (doubleWithoutEscape ? 4 : 0);
  }
  function InlineEncoder(writer, encoder, serializersModule) {
    this.writer_0 = writer;
    this.encoder_0 = encoder;
    this.serializersModule_sl70md$_0 = serializersModule;
  }
  Object.defineProperty(InlineEncoder.prototype, 'serializersModule', {
    get: function () {
      return this.serializersModule_sl70md$_0;
    }
  });
  InlineEncoder.prototype.encodeInt_za3lpa$ = function (value) {
    var tmp$ = this.writer_0;
    var chars = (new UInt_init(value)).toString();
    tmp$.currentIndent_8be2vx$ = tmp$.currentIndent_8be2vx$ + chars.length | 0;
    tmp$.output_0.append_gw00v9$(chars);
  };
  InlineEncoder.prototype.encodeLong_s8cxhz$ = function (value) {
    var tmp$ = this.writer_0;
    var chars = (new ULong_init(value)).toString();
    tmp$.currentIndent_8be2vx$ = tmp$.currentIndent_8be2vx$ + chars.length | 0;
    tmp$.output_0.append_gw00v9$(chars);
  };
  InlineEncoder.prototype.encodeByte_s8j3t7$ = function (value) {
    var tmp$ = this.writer_0;
    var chars = (new UByte_init(value)).toString();
    tmp$.currentIndent_8be2vx$ = tmp$.currentIndent_8be2vx$ + chars.length | 0;
    tmp$.output_0.append_gw00v9$(chars);
  };
  InlineEncoder.prototype.encodeShort_mq22fl$ = function (value) {
    var tmp$ = this.writer_0;
    var chars = (new UShort_init(value)).toString();
    tmp$.currentIndent_8be2vx$ = tmp$.currentIndent_8be2vx$ + chars.length | 0;
    tmp$.output_0.append_gw00v9$(chars);
  };
  InlineEncoder.prototype.beginCollection_szpzho$ = function (descriptor, collectionSize) {
    return this.encoder_0.beginCollection_szpzho$(descriptor, collectionSize);
  };
  InlineEncoder.prototype.beginStructure_24f42q$ = function (descriptor) {
    return this.encoder_0.beginStructure_24f42q$(descriptor);
  };
  InlineEncoder.prototype.encodeBoolean_6taknv$ = function (value) {
    return this.encoder_0.encodeBoolean_6taknv$(value);
  };
  InlineEncoder.prototype.encodeChar_s8itvh$ = function (value) {
    return this.encoder_0.encodeChar_s8itvh$(value);
  };
  InlineEncoder.prototype.encodeDouble_14dthe$ = function (value) {
    return this.encoder_0.encodeDouble_14dthe$(value);
  };
  InlineEncoder.prototype.encodeEnum_szpzho$ = function (enumDescriptor, index) {
    return this.encoder_0.encodeEnum_szpzho$(enumDescriptor, index);
  };
  InlineEncoder.prototype.encodeFloat_mx4ult$ = function (value) {
    return this.encoder_0.encodeFloat_mx4ult$(value);
  };
  InlineEncoder.prototype.encodeInline_24f42q$ = function (inlineDescriptor) {
    return this.encoder_0.encodeInline_24f42q$(inlineDescriptor);
  };
  InlineEncoder.prototype.encodeNotNullMark = function () {
    return this.encoder_0.encodeNotNullMark();
  };
  InlineEncoder.prototype.encodeNull = function () {
    return this.encoder_0.encodeNull();
  };
  InlineEncoder.prototype.encodeNullableSerializableValue_f4686g$ = function (serializer, value) {
    return this.encoder_0.encodeNullableSerializableValue_f4686g$(serializer, value);
  };
  InlineEncoder.prototype.encodeSerializableValue_tf03ej$ = function (serializer, value) {
    return this.encoder_0.encodeSerializableValue_tf03ej$(serializer, value);
  };
  InlineEncoder.prototype.encodeString_61zpoe$ = function (value) {
    return this.encoder_0.encodeString_61zpoe$(value);
  };
  InlineEncoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InlineEncoder',
    interfaces: [Encoder]
  };
  function InlineDecoder(delegate) {
    this.delegate_0 = delegate;
  }
  Object.defineProperty(InlineDecoder.prototype, 'serializersModule', {
    configurable: true,
    get: function () {
      return this.delegate_0.serializersModule;
    }
  });
  InlineDecoder.prototype.decodeByte = function () {
    var $receiver = this.delegate_0;
    return (new UByte_init(toByte_0($receiver.withIntegerValue_ty35cg$($receiver.decodeString(), 'UByte', null, -1).toInt()))).data;
  };
  InlineDecoder.prototype.decodeShort = function () {
    var $receiver = this.delegate_0;
    return (new UShort_init(toShort_0($receiver.withIntegerValue_ty35cg$($receiver.decodeString(), 'UShort', null, -1).toInt()))).data;
  };
  InlineDecoder.prototype.decodeInt = function () {
    var $receiver = this.delegate_0;
    return (new UInt_init($receiver.withIntegerValue_ty35cg$($receiver.decodeString(), 'UInt', null, -1).toInt())).data;
  };
  InlineDecoder.prototype.decodeLong = function () {
    var $receiver = this.delegate_0;
    return (new ULong_init($receiver.withIntegerValue_ty35cg$($receiver.decodeString(), 'ULong', null, -1))).data;
  };
  InlineDecoder.prototype.beginStructure_24f42q$ = function (descriptor) {
    return this.delegate_0.beginStructure_24f42q$(descriptor);
  };
  InlineDecoder.prototype.decodeBoolean = function () {
    return this.delegate_0.decodeBoolean();
  };
  InlineDecoder.prototype.decodeChar = function () {
    return this.delegate_0.decodeChar();
  };
  InlineDecoder.prototype.decodeDouble = function () {
    return this.delegate_0.decodeDouble();
  };
  InlineDecoder.prototype.decodeEnum_24f42q$ = function (enumDescriptor) {
    return this.delegate_0.decodeEnum_24f42q$(enumDescriptor);
  };
  InlineDecoder.prototype.decodeFloat = function () {
    return this.delegate_0.decodeFloat();
  };
  InlineDecoder.prototype.decodeInline_24f42q$ = function (inlineDescriptor) {
    return this.delegate_0.decodeInline_24f42q$(inlineDescriptor);
  };
  InlineDecoder.prototype.decodeNotNullMark = function () {
    return this.delegate_0.decodeNotNullMark();
  };
  InlineDecoder.prototype.decodeNull = function () {
    return this.delegate_0.decodeNull();
  };
  InlineDecoder.prototype.decodeNullableSerializableValue_aae3ea$ = function (deserializer) {
    return this.delegate_0.decodeNullableSerializableValue_aae3ea$(deserializer);
  };
  InlineDecoder.prototype.decodeSerializableValue_w63s0f$ = function (deserializer) {
    return this.delegate_0.decodeSerializableValue_w63s0f$(deserializer);
  };
  InlineDecoder.prototype.decodeString = function () {
    return this.delegate_0.decodeString();
  };
  InlineDecoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InlineDecoder',
    interfaces: [Decoder]
  };
  function InlineElementDecoder(yamlDecoder, compositeDecoder, descriptor, index) {
    this.yamlDecoder_0 = yamlDecoder;
    this.compositeDecoder_0 = compositeDecoder;
    this.descriptor_0 = descriptor;
    this.index_0 = index;
  }
  Object.defineProperty(InlineElementDecoder.prototype, 'serializersModule', {
    configurable: true,
    get: function () {
      return this.yamlDecoder_0.serializersModule;
    }
  });
  InlineElementDecoder.prototype.decodeElementIndex_24f42q$ = function (descriptor) {
    throw UnsupportedOperationException_init('InlineDecoder.decodeElementIndex');
  };
  InlineElementDecoder.prototype.decodeByte = function () {
    return (new UByte_init(toByte_0(this.yamlDecoder_0.withIntegerValue_ty35cg$(this.compositeDecoder_0.decodeStringElement_szpzho$(this.descriptor_0, this.index_0), 'UByte', null, -1).toInt()))).data;
  };
  InlineElementDecoder.prototype.decodeShort = function () {
    return (new UShort_init(toShort_0(this.yamlDecoder_0.withIntegerValue_ty35cg$(this.compositeDecoder_0.decodeStringElement_szpzho$(this.descriptor_0, this.index_0), 'UShort', null, -1).toInt()))).data;
  };
  InlineElementDecoder.prototype.decodeInt = function () {
    return (new UInt_init(this.yamlDecoder_0.withIntegerValue_ty35cg$(this.compositeDecoder_0.decodeStringElement_szpzho$(this.descriptor_0, this.index_0), 'UInt', null, -1).toInt())).data;
  };
  InlineElementDecoder.prototype.decodeLong = function () {
    return (new ULong_init(this.yamlDecoder_0.withIntegerValue_ty35cg$(this.compositeDecoder_0.decodeStringElement_szpzho$(this.descriptor_0, this.index_0), 'ULong', null, -1))).data;
  };
  InlineElementDecoder.prototype.beginStructure_24f42q$ = function (descriptor) {
    return this.compositeDecoder_0.beginStructure_24f42q$(descriptor);
  };
  InlineElementDecoder.prototype.decodeBoolean = function () {
    return this.compositeDecoder_0.decodeBoolean();
  };
  InlineElementDecoder.prototype.decodeChar = function () {
    return this.compositeDecoder_0.decodeChar();
  };
  InlineElementDecoder.prototype.decodeDouble = function () {
    return this.compositeDecoder_0.decodeDouble();
  };
  InlineElementDecoder.prototype.decodeEnum_24f42q$ = function (enumDescriptor) {
    return this.compositeDecoder_0.decodeEnum_24f42q$(enumDescriptor);
  };
  InlineElementDecoder.prototype.decodeFloat = function () {
    return this.compositeDecoder_0.decodeFloat();
  };
  InlineElementDecoder.prototype.decodeInline_24f42q$ = function (inlineDescriptor) {
    return this.compositeDecoder_0.decodeInline_24f42q$(inlineDescriptor);
  };
  InlineElementDecoder.prototype.decodeNotNullMark = function () {
    return this.compositeDecoder_0.decodeNotNullMark();
  };
  InlineElementDecoder.prototype.decodeNull = function () {
    return this.compositeDecoder_0.decodeNull();
  };
  InlineElementDecoder.prototype.decodeNullableSerializableValue_aae3ea$ = function (deserializer) {
    return this.compositeDecoder_0.decodeNullableSerializableValue_aae3ea$(deserializer);
  };
  InlineElementDecoder.prototype.decodeSerializableValue_w63s0f$ = function (deserializer) {
    return this.compositeDecoder_0.decodeSerializableValue_w63s0f$(deserializer);
  };
  InlineElementDecoder.prototype.decodeString = function () {
    return this.compositeDecoder_0.decodeString();
  };
  InlineElementDecoder.prototype.decodeBooleanElement_szpzho$ = function (descriptor, index) {
    return this.compositeDecoder_0.decodeBooleanElement_szpzho$(descriptor, index);
  };
  InlineElementDecoder.prototype.decodeByteElement_szpzho$ = function (descriptor, index) {
    return this.compositeDecoder_0.decodeByteElement_szpzho$(descriptor, index);
  };
  InlineElementDecoder.prototype.decodeCharElement_szpzho$ = function (descriptor, index) {
    return this.compositeDecoder_0.decodeCharElement_szpzho$(descriptor, index);
  };
  InlineElementDecoder.prototype.decodeCollectionSize_24f42q$ = function (descriptor) {
    return this.compositeDecoder_0.decodeCollectionSize_24f42q$(descriptor);
  };
  InlineElementDecoder.prototype.decodeDoubleElement_szpzho$ = function (descriptor, index) {
    return this.compositeDecoder_0.decodeDoubleElement_szpzho$(descriptor, index);
  };
  InlineElementDecoder.prototype.decodeFloatElement_szpzho$ = function (descriptor, index) {
    return this.compositeDecoder_0.decodeFloatElement_szpzho$(descriptor, index);
  };
  InlineElementDecoder.prototype.decodeInlineElement_szpzho$ = function (descriptor, index) {
    return this.compositeDecoder_0.decodeInlineElement_szpzho$(descriptor, index);
  };
  InlineElementDecoder.prototype.decodeIntElement_szpzho$ = function (descriptor, index) {
    return this.compositeDecoder_0.decodeIntElement_szpzho$(descriptor, index);
  };
  InlineElementDecoder.prototype.decodeLongElement_szpzho$ = function (descriptor, index) {
    return this.compositeDecoder_0.decodeLongElement_szpzho$(descriptor, index);
  };
  InlineElementDecoder.prototype.decodeNullableSerializableElement_8viuyw$$default = function (descriptor, index, deserializer, previousValue) {
    return this.compositeDecoder_0.decodeNullableSerializableElement_8viuyw$$default(descriptor, index, deserializer, previousValue);
  };
  InlineElementDecoder.prototype.decodeSequentially = function () {
    return this.compositeDecoder_0.decodeSequentially();
  };
  InlineElementDecoder.prototype.decodeSerializableElement_12e8id$$default = function (descriptor, index, deserializer, previousValue) {
    return this.compositeDecoder_0.decodeSerializableElement_12e8id$$default(descriptor, index, deserializer, previousValue);
  };
  InlineElementDecoder.prototype.decodeShortElement_szpzho$ = function (descriptor, index) {
    return this.compositeDecoder_0.decodeShortElement_szpzho$(descriptor, index);
  };
  InlineElementDecoder.prototype.decodeStringElement_szpzho$ = function (descriptor, index) {
    return this.compositeDecoder_0.decodeStringElement_szpzho$(descriptor, index);
  };
  InlineElementDecoder.prototype.endStructure_24f42q$ = function (descriptor) {
    return this.compositeDecoder_0.endStructure_24f42q$(descriptor);
  };
  InlineElementDecoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InlineElementDecoder',
    interfaces: [CompositeDecoder, Decoder]
  };
  function Token(name, ordinal, value) {
    Enum.call(this);
    this.value = toBoxedChar(value);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Token_initFields() {
    Token_initFields = function () {
    };
    Token$COMMA_instance = new Token('COMMA', 0, 44);
    Token$COLON_instance = new Token('COLON', 1, 58);
    Token$MULTILINE_LIST_FLAG_instance = new Token('MULTILINE_LIST_FLAG', 2, 45);
    Token$LIST_BEGIN_instance = new Token('LIST_BEGIN', 3, 91);
    Token$LIST_END_instance = new Token('LIST_END', 4, 93);
    Token$MAP_BEGIN_instance = new Token('MAP_BEGIN', 5, 123);
    Token$MAP_END_instance = new Token('MAP_END', 6, 125);
    Token$STRING_instance = new Token('STRING', 7, 32);
    Token$STRING_NULL_instance = new Token('STRING_NULL', 8, 32);
    Token$Companion_getInstance();
  }
  var Token$COMMA_instance;
  function Token$COMMA_getInstance() {
    Token_initFields();
    return Token$COMMA_instance;
  }
  var Token$COLON_instance;
  function Token$COLON_getInstance() {
    Token_initFields();
    return Token$COLON_instance;
  }
  var Token$MULTILINE_LIST_FLAG_instance;
  function Token$MULTILINE_LIST_FLAG_getInstance() {
    Token_initFields();
    return Token$MULTILINE_LIST_FLAG_instance;
  }
  var Token$LIST_BEGIN_instance;
  function Token$LIST_BEGIN_getInstance() {
    Token_initFields();
    return Token$LIST_BEGIN_instance;
  }
  var Token$LIST_END_instance;
  function Token$LIST_END_getInstance() {
    Token_initFields();
    return Token$LIST_END_instance;
  }
  var Token$MAP_BEGIN_instance;
  function Token$MAP_BEGIN_getInstance() {
    Token_initFields();
    return Token$MAP_BEGIN_instance;
  }
  var Token$MAP_END_instance;
  function Token$MAP_END_getInstance() {
    Token_initFields();
    return Token$MAP_END_instance;
  }
  var Token$STRING_instance;
  function Token$STRING_getInstance() {
    Token_initFields();
    return Token$STRING_instance;
  }
  var Token$STRING_NULL_instance;
  function Token$STRING_NULL_getInstance() {
    Token_initFields();
    return Token$STRING_NULL_instance;
  }
  function Token$Companion() {
    Token$Companion_instance = this;
    this.values = __values__init;
    this.valuesLastIndex_0 = toChar(125);
  }
  Token$Companion.prototype.get_s8itvh$ = defineInlineFunction('yamlkt.net.mamoe.yamlkt.internal.Token.Companion.get_s8itvh$', function (char) {
    return char > this.valuesLastIndex_0 ? null : this.values[char | 0];
  });
  Token$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Token$Companion_instance = null;
  function Token$Companion_getInstance() {
    Token_initFields();
    if (Token$Companion_instance === null) {
      new Token$Companion();
    }
    return Token$Companion_instance;
  }
  Token.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Token',
    interfaces: [Enum]
  };
  function Token$values() {
    return [Token$COMMA_getInstance(), Token$COLON_getInstance(), Token$MULTILINE_LIST_FLAG_getInstance(), Token$LIST_BEGIN_getInstance(), Token$LIST_END_getInstance(), Token$MAP_BEGIN_getInstance(), Token$MAP_END_getInstance(), Token$STRING_getInstance(), Token$STRING_NULL_getInstance()];
  }
  Token.values = Token$values;
  function Token$valueOf(name) {
    switch (name) {
      case 'COMMA':
        return Token$COMMA_getInstance();
      case 'COLON':
        return Token$COLON_getInstance();
      case 'MULTILINE_LIST_FLAG':
        return Token$MULTILINE_LIST_FLAG_getInstance();
      case 'LIST_BEGIN':
        return Token$LIST_BEGIN_getInstance();
      case 'LIST_END':
        return Token$LIST_END_getInstance();
      case 'MAP_BEGIN':
        return Token$MAP_BEGIN_getInstance();
      case 'MAP_END':
        return Token$MAP_END_getInstance();
      case 'STRING':
        return Token$STRING_getInstance();
      case 'STRING_NULL':
        return Token$STRING_NULL_getInstance();
      default:
        throwISE('No enum constant net.mamoe.yamlkt.internal.Token.' + name);
    }
  }
  Token.valueOf_61zpoe$ = Token$valueOf;
  var __values__init;
  var get_END_OF_FILE = defineInlineFunction('yamlkt.net.mamoe.yamlkt.internal.get_END_OF_FILE_8be2vx$', function () {
    return null;
  });
  function StringBufHolder() {
    this._stringBuf_0 = Kotlin.charArray(32);
    this._stringLength_0 = 0;
  }
  StringBufHolder.prototype.incStringBuf_0 = function () {
    this._stringBuf_0 = copyOf(this._stringBuf_0, this._stringBuf_0.length + (this._stringBuf_0.length >>> 1) | 0);
  };
  StringBufHolder.prototype.takeStringBuf = function () {
    var $receiver = concatToString(this._stringBuf_0, 0, 0 + this._stringLength_0 | 0);
    this._stringLength_0 = 0;
    return $receiver;
  };
  StringBufHolder.prototype.takeStringBufTrimEnd = function () {
    for (var i = this._stringLength_0 - 1 | 0; i >= 0; i--) {
      if (this._stringBuf_0[i] !== 32) {
        this._stringLength_0 = 0;
        return concatToString(this._stringBuf_0, 0, 0 + (i + 1) | 0);
      }
    }
    return '';
  };
  StringBufHolder.prototype.append_s8itvh$ = function (c) {
    var tmp$;
    if (this._stringLength_0 === this._stringBuf_0.length)
      this.incStringBuf_0();
    this._stringBuf_0[tmp$ = this._stringLength_0, this._stringLength_0 = tmp$ + 1 | 0, tmp$] = c;
  };
  StringBufHolder.prototype.append_3m52m6$ = function (source, startIndex, endIndex) {
    var tmp$;
    var length = endIndex - startIndex | 0;
    var requiredSize = this._stringLength_0 + length + 1 | 0;
    while (this._stringBuf_0.length < requiredSize) {
      this.incStringBuf_0();
    }
    for (var i = 0; i <= length; i++) {
      this._stringBuf_0[tmp$ = this._stringLength_0, this._stringLength_0 = tmp$ + 1 | 0, tmp$] = source.charCodeAt(startIndex + i | 0);
    }
  };
  StringBufHolder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StringBufHolder',
    interfaces: []
  };
  function TokenStream(source) {
    StringBufHolder.call(this);
    this.source = source;
    this.cur = 0;
    this.currentIndent = 0;
    this.leadingSpace = 0;
    this.strBuff = null;
    this.quoted = false;
    this.newLined = false;
    this.escapeCount = 0;
    this.escapeBuff = Kotlin.charArray(16);
    this.reuseTokenStack_0 = new Stack();
  }
  Object.defineProperty(TokenStream.prototype, 'endOfInput', {
    configurable: true,
    get: defineInlineFunction('yamlkt.net.mamoe.yamlkt.internal.TokenStream.get_endOfInput', function () {
      return this.cur === this.source.length;
    })
  });
  TokenStream.prototype.subSourceTrimEnd_vux9f0$ = function (offset, endIndex) {
    for (var i = endIndex - 1 | 0; i >= offset; i--) {
      if (this.source.charCodeAt(i) !== 32) {
        var $receiver = this.source;
        var endIndex_0 = i + 1 | 0;
        return $receiver.substring(offset, endIndex_0);
      }
    }
    return '';
  };
  TokenStream.prototype.flushEsc = function () {
    if (this.escapeCount === 0) {
      return;
    }
    this.append_s8itvh$(toChar(HexConverter_getInstance().hexToLong_8chfmy$(this.escapeBuff, 0, this.escapeCount).toInt()));
    this.escapeCount = 0;
  };
  TokenStream.prototype.appendEsc_s8itvh$ = function (c) {
    var tmp$;
    this.escapeBuff[tmp$ = this.escapeCount, this.escapeCount = tmp$ + 1 | 0, tmp$] = c;
    if (this.escapeCount === 4) {
      this.flushEsc();
    }
  };
  TokenStream.prototype.reuseToken_ybqaeu$ = function (token) {
    this.reuseTokenStack_0.add_11rb$(token);
  };
  TokenStream.prototype.reuseToken_61zpoe$ = function (string) {
    this.reuseTokenStack_0.add_11rb$(string);
  };
  TokenStream.prototype.nextToken_6taknv$ = function (stopOnComma) {
    var tmp$, tmp$_0;
    var reuse = this.reuseTokenStack_0.popOrNull();
    if (reuse != null) {
      if (typeof reuse === 'string') {
        this.strBuff = reuse;
        tmp$_0 = Token$STRING_getInstance();
      } else {
        tmp$_0 = Kotlin.isType(tmp$ = reuse, Token) ? tmp$ : throwCCE();
      }
      return tmp$_0;
    }
    this.newLined = false;
    this.leadingSpace = 0;
    var tmp$_1;
    while (!(this.cur === this.source.length)) {
      var char = toBoxedChar(this.source.charCodeAt((tmp$_1 = this.cur, this.cur = tmp$_1 + 1 | 0, tmp$_1)));
      var tmp$_2;
      if (unboxChar(char) === 32) {
        this.currentIndent = this.currentIndent + 1 | 0;
        this.leadingSpace = this.leadingSpace + 1 | 0;
      } else {
        switch (unboxChar(char)) {
          case 58:
            this.currentIndent = this.currentIndent + 1 | 0;
            return Token$COLON_getInstance();
          case 10:
          case 13:
            this.newLined = true;
            this.currentIndent = 0;
            this.leadingSpace = 0;
            break;
          case 44:
            this.currentIndent = this.currentIndent + 1 | 0;
            return Token$COMMA_getInstance();
          case 123:
            this.currentIndent = this.currentIndent + 1 | 0;
            return Token$MAP_BEGIN_getInstance();
          case 125:
            this.currentIndent = this.currentIndent + 1 | 0;
            return Token$MAP_END_getInstance();
          case 91:
            this.currentIndent = this.currentIndent + 1 | 0;
            return Token$LIST_BEGIN_getInstance();
          case 93:
            this.currentIndent = this.currentIndent + 1 | 0;
            return Token$LIST_END_getInstance();
          case 45:
            this.currentIndent = this.currentIndent + 1 | 0;
            return Token$MULTILINE_LIST_FLAG_getInstance();
          case 35:
            skipLine(this);
            this.currentIndent = 0;
            break;
          default:
            tmp$_2 = this.prepareStringAndNextToken_0(stopOnComma, unboxChar(char));
            if (tmp$_2 == null) {
              return Token$STRING_NULL_getInstance();
            }

            var str = tmp$_2;
            this.strBuff = str;
            return Token$STRING_getInstance();
        }
      }
    }
    null;
    return null;
  };
  TokenStream.prototype.prepareStringAndNextToken_0 = function (stopOnComma, begin) {
    loop_label: switch (begin) {
      case 39:
        this.quoted = true;
        return readSingleQuotedString(this);
      case 34:
        this.quoted = true;
        return readDoubleQuotedString(this);
      default:
        this.quoted = false;
        var $receiver = readUnquotedString(this, stopOnComma, begin);
        var optimizeNull$result;
        optimizeNull$break: do {
          switch ($receiver) {
            case '~':
            case 'null':
            case 'NULL':
              optimizeNull$result = null;
              break optimizeNull$break;
            default:
              optimizeNull$result = $receiver;
              break optimizeNull$break;
          }
        }
         while (false);
        return optimizeNull$result;
    }
  };
  TokenStream.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TokenStream',
    interfaces: [StringBufHolder]
  };
  var SINGLE_QUOTATION_CHAR;
  var DOUBLE_QUOTATION_CHAR;
  var whileNotEOF = defineInlineFunction('yamlkt.net.mamoe.yamlkt.internal.whileNotEOF_nvp92c$', wrapFunction(function () {
    var toBoxedChar = Kotlin.toBoxedChar;
    return function ($receiver, block) {
      var tmp$;
      while (!($receiver.cur === $receiver.source.length)) {
        block(toBoxedChar($receiver.source.charCodeAt((tmp$ = $receiver.cur, $receiver.cur = tmp$ + 1 | 0, tmp$))));
      }
      return null;
    };
  }));
  var skipIf = defineInlineFunction('yamlkt.net.mamoe.yamlkt.internal.skipIf_e9gslo$', wrapFunction(function () {
    var toBoxedChar = Kotlin.toBoxedChar;
    return function ($receiver, block) {
      while (!($receiver.cur === $receiver.source.length)) {
        if (block(toBoxedChar($receiver.source.charCodeAt($receiver.cur)))) {
          $receiver.cur = $receiver.cur + 1 | 0;
        } else {
          break;
        }
      }
    };
  }));
  var countSkipIf = defineInlineFunction('yamlkt.net.mamoe.yamlkt.internal.countSkipIf_e9gslo$', wrapFunction(function () {
    var toBoxedChar = Kotlin.toBoxedChar;
    return function ($receiver, block) {
      var start = $receiver.cur;
      while (!($receiver.cur === $receiver.source.length)) {
        if (block(toBoxedChar($receiver.source.charCodeAt($receiver.cur)))) {
          $receiver.cur = $receiver.cur + 1 | 0;
        } else {
          break;
        }
      }
      return $receiver.cur - start | 0;
    };
  }));
  var whileNotEOFWithBegin = defineInlineFunction('yamlkt.net.mamoe.yamlkt.internal.whileNotEOFWithBegin_7ag171$', wrapFunction(function () {
    var toBoxedChar = Kotlin.toBoxedChar;
    return function ($receiver, begin, block) {
      var tmp$;
      block(toBoxedChar(begin));
      while (!($receiver.cur === $receiver.source.length)) {
        block(toBoxedChar($receiver.source.charCodeAt((tmp$ = $receiver.cur, $receiver.cur = tmp$ + 1 | 0, tmp$))));
      }
      return null;
    };
  }));
  function Stack() {
    this.cur = 0;
    this.currentSize = 64;
    this.content = Kotlin.newArray(this.currentSize, null);
  }
  Stack.prototype.increase = function () {
    var it = this.content.length;
    var new_0 = it + (it >> 1) | 0;
    this.currentSize = new_0;
    this.content = copyOf_0(this.content, this.currentSize);
  };
  Stack.prototype.add_11rb$ = function (value) {
    var tmp$;
    if (this.cur === this.currentSize) {
      this.increase();
    }
    this.content[tmp$ = this.cur, this.cur = tmp$ + 1 | 0, tmp$] = value;
  };
  Stack.prototype.popOrNull = function () {
    var tmp$;
    if (this.cur === 0) {
      return null;
    }
    return (tmp$ = this.content[this.cur = this.cur - 1 | 0, this.cur]) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  };
  Stack.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Stack',
    interfaces: []
  };
  function get_READ_DONE() {
    return -1;
  }
  function YamlDecoder(configuration, tokenStream, serializersModule) {
    YamlDecoder$Companion_getInstance();
    this.configuration_0 = configuration;
    this.tokenStream_8be2vx$ = tokenStream;
    this.serializersModule_azcy81$_0 = serializersModule;
    this.inlineDecoder_0 = new InlineDecoder(this);
    this.emptyClassDecoder_0 = new YamlDecoder$EmptyClassDecoder(this);
    this.yamlStringDecoder_0 = new YamlDecoder$YamlStringDecoder(this);
    this.yamlNullStringDecoder_0 = new YamlDecoder$YamlNullStringDecoder(this);
  }
  Object.defineProperty(YamlDecoder.prototype, 'serializersModule', {
    get: function () {
      return this.serializersModule_azcy81$_0;
    }
  });
  YamlDecoder.prototype.nextString_0 = function (stopOnComma) {
    var tmp$, tmp$_0;
    tmp$ = this.tokenStream_8be2vx$.nextToken_6taknv$(stopOnComma);
    if (tmp$ == null) {
      return null;
    }
    var token = tmp$;
    switch (token.name) {
      case 'MULTILINE_LIST_FLAG':
        tmp$_0 = '-' + toString(this.nextString_0(stopOnComma));
        break;
      case 'STRING_NULL':
        return token;
      case 'STRING':
        tmp$_0 = ensureNotNull(this.tokenStream_8be2vx$.strBuff);
        break;
      default:
        throw contextualDecodingException_4(this.tokenStream_8be2vx$, 'Top-level decoder: ' + ('expected String, found token ' + token + ' instead'), null, -1, null);
    }
    return tmp$_0;
  };
  YamlDecoder.prototype.isNextWhitespace_a69lzt$ = function ($receiver) {
    peekNext$break: do {
      if ($receiver.cur === $receiver.source.length) {
        null;
        break peekNext$break;
      }
      var it = toBoxedChar($receiver.source.charCodeAt($receiver.cur + 1 | 0));
      var tmp$ = !isWhitespace(unboxChar(it));
      if (tmp$) {
        var tmp$_0 = unboxChar(it) === 45;
        if (!tmp$_0) {
          var $this = Token$Companion_getInstance();
          var char = unboxChar(it);
          tmp$_0 = (char > $this.valuesLastIndex_0 ? null : $this.values[char | 0]) == null;
        }
        tmp$ = tmp$_0;
      }
      if (tmp$) {
        return true;
      }
    }
     while (false);
    return false;
  };
  function YamlDecoder$Kind(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function YamlDecoder$Kind_initFields() {
    YamlDecoder$Kind_initFields = function () {
    };
    YamlDecoder$Kind$FLOW_CLASS_instance = new YamlDecoder$Kind('FLOW_CLASS', 0);
    YamlDecoder$Kind$FLOW_MAP_instance = new YamlDecoder$Kind('FLOW_MAP', 1);
    YamlDecoder$Kind$FLOW_SEQUENCE_instance = new YamlDecoder$Kind('FLOW_SEQUENCE', 2);
    YamlDecoder$Kind$STRING_instance = new YamlDecoder$Kind('STRING', 3);
    YamlDecoder$Kind$NULL_STRING_instance = new YamlDecoder$Kind('NULL_STRING', 4);
    YamlDecoder$Kind$BLOCK_CLASS_instance = new YamlDecoder$Kind('BLOCK_CLASS', 5);
    YamlDecoder$Kind$BLOCK_MAP_instance = new YamlDecoder$Kind('BLOCK_MAP', 6);
    YamlDecoder$Kind$BLOCK_SEQUENCE_instance = new YamlDecoder$Kind('BLOCK_SEQUENCE', 7);
    YamlDecoder$Kind$EMPTY_CLASS_instance = new YamlDecoder$Kind('EMPTY_CLASS', 8);
  }
  var YamlDecoder$Kind$FLOW_CLASS_instance;
  function YamlDecoder$Kind$FLOW_CLASS_getInstance() {
    YamlDecoder$Kind_initFields();
    return YamlDecoder$Kind$FLOW_CLASS_instance;
  }
  var YamlDecoder$Kind$FLOW_MAP_instance;
  function YamlDecoder$Kind$FLOW_MAP_getInstance() {
    YamlDecoder$Kind_initFields();
    return YamlDecoder$Kind$FLOW_MAP_instance;
  }
  var YamlDecoder$Kind$FLOW_SEQUENCE_instance;
  function YamlDecoder$Kind$FLOW_SEQUENCE_getInstance() {
    YamlDecoder$Kind_initFields();
    return YamlDecoder$Kind$FLOW_SEQUENCE_instance;
  }
  var YamlDecoder$Kind$STRING_instance;
  function YamlDecoder$Kind$STRING_getInstance() {
    YamlDecoder$Kind_initFields();
    return YamlDecoder$Kind$STRING_instance;
  }
  var YamlDecoder$Kind$NULL_STRING_instance;
  function YamlDecoder$Kind$NULL_STRING_getInstance() {
    YamlDecoder$Kind_initFields();
    return YamlDecoder$Kind$NULL_STRING_instance;
  }
  var YamlDecoder$Kind$BLOCK_CLASS_instance;
  function YamlDecoder$Kind$BLOCK_CLASS_getInstance() {
    YamlDecoder$Kind_initFields();
    return YamlDecoder$Kind$BLOCK_CLASS_instance;
  }
  var YamlDecoder$Kind$BLOCK_MAP_instance;
  function YamlDecoder$Kind$BLOCK_MAP_getInstance() {
    YamlDecoder$Kind_initFields();
    return YamlDecoder$Kind$BLOCK_MAP_instance;
  }
  var YamlDecoder$Kind$BLOCK_SEQUENCE_instance;
  function YamlDecoder$Kind$BLOCK_SEQUENCE_getInstance() {
    YamlDecoder$Kind_initFields();
    return YamlDecoder$Kind$BLOCK_SEQUENCE_instance;
  }
  var YamlDecoder$Kind$EMPTY_CLASS_instance;
  function YamlDecoder$Kind$EMPTY_CLASS_getInstance() {
    YamlDecoder$Kind_initFields();
    return YamlDecoder$Kind$EMPTY_CLASS_instance;
  }
  YamlDecoder$Kind.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Kind',
    interfaces: [Enum]
  };
  function YamlDecoder$Kind$values() {
    return [YamlDecoder$Kind$FLOW_CLASS_getInstance(), YamlDecoder$Kind$FLOW_MAP_getInstance(), YamlDecoder$Kind$FLOW_SEQUENCE_getInstance(), YamlDecoder$Kind$STRING_getInstance(), YamlDecoder$Kind$NULL_STRING_getInstance(), YamlDecoder$Kind$BLOCK_CLASS_getInstance(), YamlDecoder$Kind$BLOCK_MAP_getInstance(), YamlDecoder$Kind$BLOCK_SEQUENCE_getInstance(), YamlDecoder$Kind$EMPTY_CLASS_getInstance()];
  }
  YamlDecoder$Kind.values = YamlDecoder$Kind$values;
  function YamlDecoder$Kind$valueOf(name) {
    switch (name) {
      case 'FLOW_CLASS':
        return YamlDecoder$Kind$FLOW_CLASS_getInstance();
      case 'FLOW_MAP':
        return YamlDecoder$Kind$FLOW_MAP_getInstance();
      case 'FLOW_SEQUENCE':
        return YamlDecoder$Kind$FLOW_SEQUENCE_getInstance();
      case 'STRING':
        return YamlDecoder$Kind$STRING_getInstance();
      case 'NULL_STRING':
        return YamlDecoder$Kind$NULL_STRING_getInstance();
      case 'BLOCK_CLASS':
        return YamlDecoder$Kind$BLOCK_CLASS_getInstance();
      case 'BLOCK_MAP':
        return YamlDecoder$Kind$BLOCK_MAP_getInstance();
      case 'BLOCK_SEQUENCE':
        return YamlDecoder$Kind$BLOCK_SEQUENCE_getInstance();
      case 'EMPTY_CLASS':
        return YamlDecoder$Kind$EMPTY_CLASS_getInstance();
      default:
        throwISE('No enum constant net.mamoe.yamlkt.internal.YamlDecoder.Kind.' + name);
    }
  }
  YamlDecoder$Kind.valueOf_61zpoe$ = YamlDecoder$Kind$valueOf;
  function YamlDecoder$AbstractDecoder($outer, name) {
    this.$outer = $outer;
    this.name = name;
    this.dontWrapNextStructure_8be2vx$ = false;
  }
  Object.defineProperty(YamlDecoder$AbstractDecoder.prototype, 'parentYamlDecoder_8be2vx$', {
    configurable: true,
    get: function () {
      return this.$outer;
    }
  });
  YamlDecoder$AbstractDecoder.prototype.nextToken_a69lzt$ = function ($receiver) {
    return $receiver.nextToken_6taknv$(this.stopOnComma);
  };
  Object.defineProperty(YamlDecoder$AbstractDecoder.prototype, 'serializersModule', {
    configurable: true,
    get: function () {
      return this.$outer.serializersModule;
    }
  });
  YamlDecoder$AbstractDecoder.prototype.nextStringOrNull = function () {
    return this.$outer.nextStringOrNull_0(this.stopOnComma);
  };
  YamlDecoder$AbstractDecoder.prototype.decodeBooleanElement_szpzho$ = function (descriptor, index) {
    return this.$outer.decodeBooleanElementImpl_0(this.nextStringOrNull(), descriptor, index);
  };
  YamlDecoder$AbstractDecoder.prototype.decodeByteElement_szpzho$ = function (descriptor, index) {
    return this.$outer.decodeByteElementImpl_0(this.nextStringOrNull(), descriptor, index);
  };
  YamlDecoder$AbstractDecoder.prototype.decodeCharElement_szpzho$ = function (descriptor, index) {
    return toBoxedChar(this.$outer.decodeCharElementImpl_0(this.nextStringOrNull(), descriptor, index));
  };
  YamlDecoder$AbstractDecoder.prototype.decodeDoubleElement_szpzho$ = function (descriptor, index) {
    return this.$outer.decodeDoubleElementImpl_0(this.nextStringOrNull(), descriptor, index);
  };
  YamlDecoder$AbstractDecoder.prototype.decodeFloatElement_szpzho$ = function (descriptor, index) {
    return this.$outer.decodeFloatElementImpl_0(this.nextStringOrNull(), descriptor, index);
  };
  YamlDecoder$AbstractDecoder.prototype.decodeIntElement_szpzho$ = function (descriptor, index) {
    return this.$outer.decodeIntElementImpl_0(this.nextStringOrNull(), descriptor, index);
  };
  YamlDecoder$AbstractDecoder.prototype.decodeLongElement_szpzho$ = function (descriptor, index) {
    return this.$outer.decodeLongElementImpl_0(this.nextStringOrNull(), descriptor, index);
  };
  YamlDecoder$AbstractDecoder.prototype.decodeShortElement_szpzho$ = function (descriptor, index) {
    return this.$outer.decodeShortElementImpl_0(this.nextStringOrNull(), descriptor, index);
  };
  YamlDecoder$AbstractDecoder.prototype.decodeStringElement_szpzho$ = function (descriptor, index) {
    return this.$outer.decodeStringElementImpl_0(this.nextStringOrNull(), descriptor, index);
  };
  YamlDecoder$AbstractDecoder.prototype.decodeInlineElement_szpzho$ = function (descriptor, index) {
    return new InlineElementDecoder(this.$outer, this, descriptor, index);
  };
  YamlDecoder$AbstractDecoder.prototype.decodeShort = function () {
    return this.$outer.decodeShortElementImpl_0(this.nextStringOrNull(), null, -1);
  };
  YamlDecoder$AbstractDecoder.prototype.decodeString = function () {
    return this.$outer.decodeStringElementImpl_0(this.nextStringOrNull(), null, -1);
  };
  YamlDecoder$AbstractDecoder.prototype.decodeBoolean = function () {
    return this.$outer.decodeBooleanElementImpl_0(this.nextStringOrNull(), null, -1);
  };
  YamlDecoder$AbstractDecoder.prototype.decodeByte = function () {
    return this.$outer.decodeByteElementImpl_0(this.nextStringOrNull(), null, -1);
  };
  YamlDecoder$AbstractDecoder.prototype.decodeChar = function () {
    return toBoxedChar(this.$outer.decodeCharElementImpl_0(this.nextStringOrNull(), null, -1));
  };
  YamlDecoder$AbstractDecoder.prototype.decodeDouble = function () {
    return this.$outer.decodeDoubleElementImpl_0(this.nextStringOrNull(), null, -1);
  };
  YamlDecoder$AbstractDecoder.prototype.decodeFloat = function () {
    return this.$outer.decodeFloatElementImpl_0(this.nextStringOrNull(), null, -1);
  };
  YamlDecoder$AbstractDecoder.prototype.decodeInt = function () {
    return this.$outer.decodeIntElementImpl_0(this.nextStringOrNull(), null, -1);
  };
  YamlDecoder$AbstractDecoder.prototype.decodeLong = function () {
    return this.$outer.decodeLongElementImpl_0(this.nextStringOrNull(), null, -1);
  };
  YamlDecoder$AbstractDecoder.prototype.decodeEnum_24f42q$ = function (enumDescriptor) {
    return getElementIndexOrThrow(enumDescriptor, this.decodeString());
  };
  YamlDecoder$AbstractDecoder.prototype.decodeInline_24f42q$ = function (inlineDescriptor) {
    return this.$outer.inlineDecoder_0;
  };
  YamlDecoder$AbstractDecoder.prototype.decodeNotNullMark = function () {
    var token = this.nextToken_a69lzt$(this.$outer.tokenStream_8be2vx$);
    if (equals(token, null))
      return false;
    else if (equals(token, Token$STRING_NULL_getInstance()))
      return false;
    else {
      this.$outer.tokenStream_8be2vx$.reuseToken_ybqaeu$(token);
      return true;
    }
  };
  YamlDecoder$AbstractDecoder.prototype.decodeNull = function () {
    var tmp$;
    package$internal.Debugging.logDecode_h5k49v$(null, -1, null != null ? null : '<null>');
    return (tmp$ = null) == null || Kotlin.isType(tmp$, Nothing) ? tmp$ : throwCCE();
  };
  YamlDecoder$AbstractDecoder.prototype.beginStructure_24f42q$ = function (descriptor) {
    if (this.dontWrapNextStructure_8be2vx$) {
      this.dontWrapNextStructure_8be2vx$ = false;
      return this;
    }
    return this.$outer.beginStructureImpl_uqxmps$(this, descriptor);
  };
  YamlDecoder$AbstractDecoder.prototype.endStructure_24f42q$ = function (descriptor) {
    Debugging_getInstance().endStructure();
  };
  YamlDecoder$AbstractDecoder.prototype.decodeNullableSerializableElement_8viuyw$$default = function (descriptor, index, deserializer, previousValue) {
    var tmp$;
    try {
      var block$result;
      if (this.decodeNotNullMark()) {
        block$result = deserializer.deserialize_bq71mq$(this);
      } else {
        block$result = this.decodeNull();
      }
      tmp$ = new Result(block$result);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        tmp$ = new Result(createFailure(e));
      } else
        throw e;
    }
    var $receiver = tmp$;
    var tmp$_0, tmp$_0_0;
    var exception = $receiver.exceptionOrNull();
    if (exception == null)
      tmp$_0_0 = (tmp$_0 = $receiver.value) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
    else {
      var hint = 'deserializing nested class';
      throw contextualDecodingException_4(this.parentYamlDecoder_8be2vx$.tokenStream_8be2vx$, 'Top-level decoder: ' + hint, descriptor, index, exception);
    }
    return tmp$_0_0;
  };
  YamlDecoder$AbstractDecoder.prototype.decodeSerializableElement_12e8id$$default = function (descriptor, index, deserializer, previousValue) {
    var tmp$;
    try {
      tmp$ = new Result(deserializer.deserialize_bq71mq$(this));
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        tmp$ = new Result(createFailure(e));
      } else
        throw e;
    }
    var $receiver = tmp$;
    var tmp$_0, tmp$_0_0;
    var exception = $receiver.exceptionOrNull();
    if (exception == null)
      tmp$_0_0 = (tmp$_0 = $receiver.value) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
    else {
      var hint = 'deserializing nested class';
      throw contextualDecodingException_4(this.parentYamlDecoder_8be2vx$.tokenStream_8be2vx$, 'Top-level decoder: ' + hint, descriptor, index, exception);
    }
    return tmp$_0_0;
  };
  YamlDecoder$AbstractDecoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractDecoder',
    interfaces: [Decoder, CompositeDecoder]
  };
  function YamlDecoder$IndentedDecoder($outer, baseIndent, name) {
    this.$outer = $outer;
    YamlDecoder$AbstractDecoder.call(this, this.$outer, name);
    this.baseIndent_8be2vx$ = baseIndent;
    if (!(this.baseIndent_8be2vx$ >= 0)) {
      var message = 'baseIndent must be >= 0';
      throw IllegalStateException_init(message.toString());
    }
  }
  YamlDecoder$IndentedDecoder.prototype.checkIndent_za3lpa$ = function (newIndent) {
    if (newIndent > this.baseIndent_8be2vx$) {
      var hint = 'bad indentation, baseIndent=' + this.baseIndent_8be2vx$ + ', newIndent=' + newIndent;
      throw contextualDecodingException_4(this.parentYamlDecoder_8be2vx$.tokenStream_8be2vx$, 'Top-level decoder: ' + (this.name + ': ' + hint), null, -1, null);
    }
    return this.baseIndent_8be2vx$ <= newIndent;
  };
  YamlDecoder$IndentedDecoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IndentedDecoder',
    interfaces: [YamlDecoder$AbstractDecoder]
  };
  function YamlDecoder$EmptyClassDecoder($outer) {
    this.$outer = $outer;
    YamlDecoder$AbstractDecoder.call(this, this.$outer, 'Yaml Empty Class');
  }
  Object.defineProperty(YamlDecoder$EmptyClassDecoder.prototype, 'kind', {
    configurable: true,
    get: function () {
      return YamlDecoder$Kind$EMPTY_CLASS_getInstance();
    }
  });
  Object.defineProperty(YamlDecoder$EmptyClassDecoder.prototype, 'stopOnComma', {
    configurable: true,
    get: function () {
      throw IllegalStateException_init("shouldn't be called".toString());
    }
  });
  YamlDecoder$EmptyClassDecoder.prototype.decodeNotNullMark = function () {
    return false;
  };
  YamlDecoder$EmptyClassDecoder.prototype.decodeSequentially = function () {
    return false;
  };
  YamlDecoder$EmptyClassDecoder.prototype.decodeElementIndex_24f42q$ = function (descriptor) {
    return -1;
  };
  YamlDecoder$EmptyClassDecoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EmptyClassDecoder',
    interfaces: [YamlDecoder$AbstractDecoder]
  };
  function YamlDecoder$BlockClassDecoder($outer, baseIndent) {
    this.$outer = $outer;
    YamlDecoder$IndentedDecoder.call(this, this.$outer, baseIndent, 'Yaml Block Class');
  }
  Object.defineProperty(YamlDecoder$BlockClassDecoder.prototype, 'stopOnComma', {
    configurable: true,
    get: function () {
      return false;
    }
  });
  YamlDecoder$BlockClassDecoder.prototype.decodeSequentially = function () {
    return false;
  };
  Object.defineProperty(YamlDecoder$BlockClassDecoder.prototype, 'kind', {
    configurable: true,
    get: function () {
      return YamlDecoder$Kind$BLOCK_CLASS_getInstance();
    }
  });
  YamlDecoder$BlockClassDecoder.prototype.decodeNotNullMark = function () {
    var tmp$;
    var indent = this.$outer.tokenStream_8be2vx$.currentIndent;
    var leadingSpace = this.$outer.tokenStream_8be2vx$.leadingSpace;
    var token = this.nextToken_a69lzt$(this.$outer.tokenStream_8be2vx$);
    if (equals(token, null))
      tmp$ = false;
    else if (equals(token, Token$STRING_NULL_getInstance()))
      tmp$ = false;
    else {
      this.$outer.tokenStream_8be2vx$.reuseToken_ybqaeu$(token);
      if (this.$outer.tokenStream_8be2vx$.currentIndent > indent) {
        return true;
      }
      if (this.$outer.tokenStream_8be2vx$.leadingSpace > leadingSpace && !this.$outer.tokenStream_8be2vx$.quoted) {
        return true;
      }
      if (equals(token, Token$STRING_getInstance())) {
        return !(this.$outer.tokenStream_8be2vx$.currentIndent === indent && !this.$outer.tokenStream_8be2vx$.quoted && (this.$outer.tokenStream_8be2vx$.newLined || isBlank(ensureNotNull(this.$outer.tokenStream_8be2vx$.strBuff))));
      }
      tmp$ = false;
    }
    return tmp$;
  };
  YamlDecoder$BlockClassDecoder.prototype.decodeElementIndex_24f42q$ = function (descriptor) {
    var tmp$;
    var token = this.nextToken_a69lzt$(this.$outer.tokenStream_8be2vx$);
    if (token == null) {
      return -1;
    } else if (equals(token, Token$STRING_getInstance())) {
      if (this.$outer.tokenStream_8be2vx$.currentIndent < this.baseIndent_8be2vx$) {
        this.$outer.tokenStream_8be2vx$.reuseToken_61zpoe$(ensureNotNull(this.$outer.tokenStream_8be2vx$.strBuff));
        return -1;
      }
      if (!this.checkIndent_za3lpa$(this.$outer.tokenStream_8be2vx$.currentIndent)) {
        return -1;
      }
      var index = descriptor.getElementIndex_61zpoe$(ensureNotNull(this.$outer.tokenStream_8be2vx$.strBuff));
      var current = this.nextToken_a69lzt$(this.$outer.tokenStream_8be2vx$);
      if (!equals(current, Token$COLON_getInstance())) {
        throw contextualDecodingException_4(this.$outer.tokenStream_8be2vx$, 'There must be a COLON between class key and value but found ' + toString(current) + " for '" + descriptor.serialName + "'", null, -1);
      }
      if (index !== -3) {
        tmp$ = index;
      } else {
        YamlNullableDynamicSerializer_getInstance().deserialize_bq71mq$(this);
        tmp$ = this.decodeElementIndex_24f42q$(descriptor);
      }
      return tmp$;
    } else {
      this.$outer.tokenStream_8be2vx$.reuseToken_ybqaeu$(token);
      return -1;
    }
  };
  YamlDecoder$BlockClassDecoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BlockClassDecoder',
    interfaces: [YamlDecoder$IndentedDecoder]
  };
  function YamlDecoder$BlockMapDecoder($outer, baseIndent) {
    this.$outer = $outer;
    YamlDecoder$IndentedDecoder.call(this, this.$outer, baseIndent, 'Yaml Block Map');
    this.index_0 = 0;
  }
  Object.defineProperty(YamlDecoder$BlockMapDecoder.prototype, 'stopOnComma', {
    configurable: true,
    get: function () {
      return false;
    }
  });
  Object.defineProperty(YamlDecoder$BlockMapDecoder.prototype, 'kind', {
    configurable: true,
    get: function () {
      return YamlDecoder$Kind$BLOCK_MAP_getInstance();
    }
  });
  YamlDecoder$BlockMapDecoder.prototype.decodeNotNullMark = function () {
    var tmp$;
    var indent = this.$outer.tokenStream_8be2vx$.currentIndent;
    var token = this.nextToken_a69lzt$(this.$outer.tokenStream_8be2vx$);
    if (equals(token, null))
      tmp$ = false;
    else if (equals(token, Token$STRING_NULL_getInstance()))
      tmp$ = false;
    else {
      this.$outer.tokenStream_8be2vx$.reuseToken_ybqaeu$(token);
      tmp$ = this.$outer.tokenStream_8be2vx$.currentIndent > indent;
    }
    return tmp$;
  };
  YamlDecoder$BlockMapDecoder.prototype.decodeElementIndex_24f42q$ = function (descriptor) {
    var tmp$, tmp$_0;
    if ((this.index_0 & 1) !== 0) {
      return tmp$ = this.index_0, this.index_0 = tmp$ + 1 | 0, tmp$;
    }
    var token = this.nextToken_a69lzt$(this.$outer.tokenStream_8be2vx$);
    if (equals(token, null)) {
      return -1;
    } else if (equals(token, Token$STRING_getInstance())) {
      if (this.$outer.tokenStream_8be2vx$.currentIndent < this.baseIndent_8be2vx$) {
        var $this = Debugging_getInstance();
        this.$outer;
        logCustom_h4ejuu$break: do {
          if (!$this.enabled_8be2vx$)
            break logCustom_h4ejuu$break;
          println($this.space_0($this.logIndent) + ('BlockMapDecoder exit: crt=' + this.$outer.tokenStream_8be2vx$.currentIndent + ', base=' + this.baseIndent_8be2vx$));
        }
         while (false);
        this.$outer.tokenStream_8be2vx$.reuseToken_61zpoe$(ensureNotNull(this.$outer.tokenStream_8be2vx$.strBuff));
        return -1;
      }
      if (!this.checkIndent_za3lpa$(this.$outer.tokenStream_8be2vx$.currentIndent)) {
        return -1;
      }
      var current = this.nextToken_a69lzt$(this.$outer.tokenStream_8be2vx$);
      if (!equals(current, Token$COLON_getInstance())) {
        throw contextualDecodingException_4(this.$outer.tokenStream_8be2vx$, 'There must be a COLON between map key and value but found ' + toString(current) + " for '" + descriptor.serialName + "'", null, -1);
      } else {
        var $this_0 = this.$outer.tokenStream_8be2vx$;
        if (!($this_0.cur === $this_0.source.length)) {
          var char = this.$outer.tokenStream_8be2vx$.source.charCodeAt(this.$outer.tokenStream_8be2vx$.cur);
          if (!isWhitespace(char)) {
            throw contextualDecodingException_4(this.$outer.tokenStream_8be2vx$, 'Expected whitespace after COLON but found ' + String.fromCharCode(char) + " for '" + descriptor.serialName + "'", null, -1);
          }
        }
      }
      this.$outer.tokenStream_8be2vx$.reuseToken_61zpoe$(ensureNotNull(this.$outer.tokenStream_8be2vx$.strBuff));
      return tmp$_0 = this.index_0, this.index_0 = tmp$_0 + 1 | 0, tmp$_0;
    } else {
      this.$outer.tokenStream_8be2vx$.reuseToken_ybqaeu$(token);
      return -1;
    }
  };
  YamlDecoder$BlockMapDecoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BlockMapDecoder',
    interfaces: [YamlDecoder$IndentedDecoder]
  };
  function YamlDecoder$FlowMapDecoder($outer) {
    this.$outer = $outer;
    YamlDecoder$AbstractDecoder.call(this, this.$outer, 'Yaml Flow Map');
    this.valueCache_0 = null;
    this.index_0 = 0;
  }
  Object.defineProperty(YamlDecoder$FlowMapDecoder.prototype, 'stopOnComma', {
    configurable: true,
    get: function () {
      return true;
    }
  });
  Object.defineProperty(YamlDecoder$FlowMapDecoder.prototype, 'kind', {
    configurable: true,
    get: function () {
      return YamlDecoder$Kind$FLOW_MAP_getInstance();
    }
  });
  YamlDecoder$FlowMapDecoder.prototype.decodeNotNullMark = function () {
    var tmp$;
    if (this.valueCache_0 != null)
      return true;
    var token = this.nextToken_a69lzt$(this.$outer.tokenStream_8be2vx$);
    if (equals(token, null)) {
      var hint = 'Early EOF';
      throw contextualDecodingException_4(this.parentYamlDecoder_8be2vx$.tokenStream_8be2vx$, 'Top-level decoder: ' + (this.name + ': ' + hint), null, -1, null);
    } else if (equals(token, Token$MAP_END_getInstance())) {
      this.$outer.tokenStream_8be2vx$.reuseToken_ybqaeu$(token);
      tmp$ = false;
    } else if (equals(token, Token$STRING_getInstance())) {
      this.valueCache_0 = this.$outer.tokenStream_8be2vx$.strBuff;
      tmp$ = true;
    } else if (equals(token, Token$COMMA_getInstance()))
      tmp$ = false;
    else {
      var hint_0 = 'Illegal token ' + toString(token);
      throw contextualDecodingException_4(this.parentYamlDecoder_8be2vx$.tokenStream_8be2vx$, 'Top-level decoder: ' + (this.name + ': ' + hint_0), null, -1, null);
    }
    return tmp$;
  };
  YamlDecoder$FlowMapDecoder.prototype.nextStringOrNull = function () {
    if (this.valueCache_0 != null) {
      var $receiver = this.valueCache_0;
      this.valueCache_0 = null;
      return $receiver;
    }
    return YamlDecoder$AbstractDecoder.prototype.nextStringOrNull.call(this);
  };
  YamlDecoder$FlowMapDecoder.prototype.decodeSequentially = function () {
    return false;
  };
  YamlDecoder$FlowMapDecoder.prototype.decodeElementIndex_24f42q$ = function (descriptor) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if ((this.index_0 & 1) !== 0) {
      return tmp$ = this.index_0, this.index_0 = tmp$ + 1 | 0, tmp$;
    }
    if (this.index_0 > 1) {
      var token = this.nextToken_a69lzt$(this.$outer.tokenStream_8be2vx$);
      if (equals(token, null)) {
        var hint = "Early EOF. Expected '}'.";
        throw contextualDecodingException_4(this.parentYamlDecoder_8be2vx$.tokenStream_8be2vx$, 'Top-level decoder: ' + (this.name + ': ' + hint), null, -1, null);
      } else if (equals(token, Token$MAP_END_getInstance())) {
        return -1;
      } else if (!equals(token, Token$COMMA_getInstance())) {
        var hint_0 = 'There must be a COMMA between flow map entries but found ' + toString(token) + " for '" + descriptor.serialName + "'";
        throw contextualDecodingException_4(this.parentYamlDecoder_8be2vx$.tokenStream_8be2vx$, 'Top-level decoder: ' + (this.name + ': ' + hint_0), null, -1, null);
      }
    }
    var token_0 = this.nextToken_a69lzt$(this.$outer.tokenStream_8be2vx$);
    if (equals(token_0, null)) {
      var hint_1 = "Early EOF. Expected '}'.";
      throw contextualDecodingException_4(this.parentYamlDecoder_8be2vx$.tokenStream_8be2vx$, 'Top-level decoder: ' + (this.name + ': ' + hint_1), null, -1, null);
    } else if (equals(token_0, Token$STRING_getInstance())) {
      var next = this.nextToken_a69lzt$(this.$outer.tokenStream_8be2vx$);
      if (equals(next, Token$COLON_getInstance()))
        this.$outer.tokenStream_8be2vx$.reuseToken_61zpoe$(ensureNotNull(this.$outer.tokenStream_8be2vx$.strBuff));
      else if (equals(next, Token$COMMA_getInstance()) || equals(next, Token$MAP_END_getInstance())) {
        this.$outer.tokenStream_8be2vx$.reuseToken_ybqaeu$(next);
        this.$outer.tokenStream_8be2vx$.reuseToken_ybqaeu$(Token$STRING_NULL_getInstance());
        this.$outer.tokenStream_8be2vx$.reuseToken_61zpoe$(ensureNotNull(this.$outer.tokenStream_8be2vx$.strBuff));
      } else {
        var hint_2 = 'Illegal token ' + toString(token_0);
        throw contextualDecodingException_4(this.parentYamlDecoder_8be2vx$.tokenStream_8be2vx$, 'Top-level decoder: ' + (this.name + ': ' + hint_2), null, -1, null);
      }
      tmp$_2 = (tmp$_0 = this.index_0, this.index_0 = tmp$_0 + 1 | 0, tmp$_0);
    } else if (equals(token_0, Token$MAP_END_getInstance())) {
      tmp$_2 = -1;
    } else if (equals(token_0, Token$COMMA_getInstance())) {
      this.$outer.tokenStream_8be2vx$.reuseToken_ybqaeu$(Token$STRING_NULL_getInstance());
      this.$outer.tokenStream_8be2vx$.reuseToken_ybqaeu$(Token$STRING_NULL_getInstance());
      tmp$_2 = (tmp$_1 = this.index_0, this.index_0 = tmp$_1 + 1 | 0, tmp$_1);
    } else {
      var hint_3 = 'Illegal token ' + toString(token_0);
      throw contextualDecodingException_4(this.parentYamlDecoder_8be2vx$.tokenStream_8be2vx$, 'Top-level decoder: ' + (this.name + ': ' + hint_3), null, -1, null);
    }
    return tmp$_2;
  };
  YamlDecoder$FlowMapDecoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FlowMapDecoder',
    interfaces: [YamlDecoder$AbstractDecoder]
  };
  function YamlDecoder$FlowClassDecoder($outer) {
    this.$outer = $outer;
    YamlDecoder$AbstractDecoder.call(this, this.$outer, 'Yaml Flow Class');
    this.index_0 = -5;
    this.firstValueDecoded_0 = false;
  }
  Object.defineProperty(YamlDecoder$FlowClassDecoder.prototype, 'stopOnComma', {
    configurable: true,
    get: function () {
      return true;
    }
  });
  Object.defineProperty(YamlDecoder$FlowClassDecoder.prototype, 'kind', {
    configurable: true,
    get: function () {
      return YamlDecoder$Kind$FLOW_CLASS_getInstance();
    }
  });
  YamlDecoder$FlowClassDecoder.prototype.decodeNotNullMark = function () {
    var tmp$;
    var token = this.nextToken_a69lzt$(this.$outer.tokenStream_8be2vx$);
    if (equals(token, null)) {
      var hint = "Early EOF. Expected '}'.";
      throw contextualDecodingException_4(this.parentYamlDecoder_8be2vx$.tokenStream_8be2vx$, 'Top-level decoder: ' + (this.name + ': ' + hint), null, -1, null);
    } else if (equals(token, Token$MAP_END_getInstance())) {
      this.$outer.tokenStream_8be2vx$.reuseToken_ybqaeu$(token);
      tmp$ = false;
    } else if (equals(token, Token$MAP_BEGIN_getInstance()) || equals(token, Token$LIST_BEGIN_getInstance())) {
      this.$outer.tokenStream_8be2vx$.reuseToken_ybqaeu$(token);
      tmp$ = true;
    } else if (equals(token, Token$STRING_NULL_getInstance()))
      tmp$ = false;
    else if (equals(token, Token$STRING_getInstance())) {
      this.$outer.tokenStream_8be2vx$.reuseToken_61zpoe$(ensureNotNull(this.$outer.tokenStream_8be2vx$.strBuff));
      tmp$ = true;
    } else if (equals(token, Token$MULTILINE_LIST_FLAG_getInstance())) {
      var $this = this.$outer.tokenStream_8be2vx$;
      if ($this.cur === $this.source.length) {
        var hint_0 = "Early EOF. Expected '}'.";
        throw contextualDecodingException_4(this.parentYamlDecoder_8be2vx$.tokenStream_8be2vx$, 'Top-level decoder: ' + (this.name + ': ' + hint_0), null, -1, null);
      }
      if (this.$outer.isNextWhitespace_a69lzt$(this.$outer.tokenStream_8be2vx$)) {
        this.$outer.tokenStream_8be2vx$.reuseToken_61zpoe$(readUnquotedString(this.$outer.tokenStream_8be2vx$, true, 45));
        tmp$ = true;
      } else {
        var hint_1 = 'Illegal token ' + toString(token);
        throw contextualDecodingException_4(this.parentYamlDecoder_8be2vx$.tokenStream_8be2vx$, 'Top-level decoder: ' + (this.name + ': ' + hint_1), null, -1, null);
      }
    } else if (equals(token, Token$COMMA_getInstance()))
      tmp$ = false;
    else {
      var hint_2 = 'Illegal token ' + toString(token);
      throw contextualDecodingException_4(this.parentYamlDecoder_8be2vx$.tokenStream_8be2vx$, 'Top-level decoder: ' + (this.name + ': ' + hint_2), null, -1, null);
    }
    return tmp$;
  };
  YamlDecoder$FlowClassDecoder.prototype.decodeSequentially = function () {
    return false;
  };
  YamlDecoder$FlowClassDecoder.prototype.decodeElementIndex_24f42q$ = function (descriptor) {
    var tmp$;
    if (this.firstValueDecoded_0) {
      var token = this.nextToken_a69lzt$(this.$outer.tokenStream_8be2vx$);
      if (equals(token, null)) {
        var hint = "Early EOF. Expected '}'.";
        throw contextualDecodingException_4(this.parentYamlDecoder_8be2vx$.tokenStream_8be2vx$, 'Top-level decoder: ' + (this.name + ': ' + hint), null, -1, null);
      } else if (equals(token, Token$MAP_END_getInstance())) {
        return -1;
      } else if (!equals(token, Token$COMMA_getInstance())) {
        var hint_0 = 'There must be a COMMA between flow map entries but found ' + toString(token) + " for '" + descriptor.serialName + "'";
        throw contextualDecodingException_4(this.parentYamlDecoder_8be2vx$.tokenStream_8be2vx$, 'Top-level decoder: ' + (this.name + ': ' + hint_0), null, -1, null);
      }
    } else {
      this.firstValueDecoded_0 = true;
    }
    var token_0 = this.nextToken_a69lzt$(this.$outer.tokenStream_8be2vx$);
    if (equals(token_0, null)) {
      var hint_1 = "Early EOF. Expected '}'.";
      throw contextualDecodingException_4(this.parentYamlDecoder_8be2vx$.tokenStream_8be2vx$, 'Top-level decoder: ' + (this.name + ': ' + hint_1), null, -1, null);
    } else if (equals(token_0, Token$MAP_END_getInstance())) {
      tmp$ = -1;
    } else if (equals(token_0, Token$COMMA_getInstance()))
      return this.decodeElementIndex_24f42q$(descriptor);
    else if (equals(token_0, Token$STRING_getInstance())) {
      var next = this.nextToken_a69lzt$(this.$outer.tokenStream_8be2vx$);
      if (!equals(next, Token$COLON_getInstance())) {
        var hint_2 = 'Expected a COLON between flow map entries but found ' + toString(next) + " for '" + descriptor.serialName + "'";
        throw contextualDecodingException_4(this.parentYamlDecoder_8be2vx$.tokenStream_8be2vx$, 'Top-level decoder: ' + (this.name + ': ' + hint_2), null, -1, null);
      }
      var index = descriptor.getElementIndex_61zpoe$(ensureNotNull(this.$outer.tokenStream_8be2vx$.strBuff));
      if (index !== -3) {
        this.index_0 = index;
        tmp$ = index;
      } else {
        this.index_0 = -1;
        YamlNullableDynamicSerializer_getInstance().deserialize_bq71mq$(this);
        return this.decodeElementIndex_24f42q$(descriptor);
      }
    } else {
      var hint_3 = 'Illegal token ' + toString(token_0) + " for '" + descriptor.serialName + "'";
      throw contextualDecodingException_4(this.parentYamlDecoder_8be2vx$.tokenStream_8be2vx$, 'Top-level decoder: ' + (this.name + ': ' + hint_3), null, -1, null);
    }
    return tmp$;
  };
  YamlDecoder$FlowClassDecoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FlowClassDecoder',
    interfaces: [YamlDecoder$AbstractDecoder]
  };
  function YamlDecoder$FlowSequenceDecoder($outer) {
    this.$outer = $outer;
    YamlDecoder$AbstractDecoder.call(this, this.$outer, 'Yaml Flow Sequence');
    this.index_0 = 0;
  }
  Object.defineProperty(YamlDecoder$FlowSequenceDecoder.prototype, 'stopOnComma', {
    configurable: true,
    get: function () {
      return true;
    }
  });
  YamlDecoder$FlowSequenceDecoder.prototype.decodeSequentially = function () {
    return false;
  };
  Object.defineProperty(YamlDecoder$FlowSequenceDecoder.prototype, 'kind', {
    configurable: true,
    get: function () {
      return YamlDecoder$Kind$FLOW_SEQUENCE_getInstance();
    }
  });
  YamlDecoder$FlowSequenceDecoder.prototype.decodeElementIndex_24f42q$ = function (descriptor) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var current = this.nextToken_a69lzt$(this.$outer.tokenStream_8be2vx$);
    if (equals(current, null)) {
      var hint = 'Unexpected EOF';
      throw contextualDecodingException_4(this.parentYamlDecoder_8be2vx$.tokenStream_8be2vx$, 'Top-level decoder: ' + (this.name + ': ' + hint), null, -1, null);
    } else if (equals(current, Token$STRING_getInstance())) {
      var originString = ensureNotNull(this.$outer.tokenStream_8be2vx$.strBuff);
      var next = this.nextToken_a69lzt$(this.$outer.tokenStream_8be2vx$);
      if (equals(next, Token$COMMA_getInstance()))
        this.$outer.tokenStream_8be2vx$.reuseToken_61zpoe$(originString);
      else if (equals(next, Token$LIST_END_getInstance())) {
        this.$outer.tokenStream_8be2vx$.reuseToken_ybqaeu$(next);
        this.$outer.tokenStream_8be2vx$.reuseToken_61zpoe$(originString);
      } else {
        var hint_0 = 'Illegal token ' + toString(next);
        throw contextualDecodingException_4(this.parentYamlDecoder_8be2vx$.tokenStream_8be2vx$, 'Top-level decoder: ' + (this.name + ': ' + hint_0), null, -1, null);
      }
    } else if (equals(current, Token$LIST_END_getInstance())) {
      return -1;
    } else if (equals(current, Token$COMMA_getInstance())) {
      var next_0 = this.nextToken_a69lzt$(this.$outer.tokenStream_8be2vx$);
      if (equals(next_0, Token$LIST_END_getInstance())) {
        return -1;
      } else if (equals(next_0, Token$LIST_BEGIN_getInstance()) || equals(next_0, Token$MAP_BEGIN_getInstance()))
        this.$outer.tokenStream_8be2vx$.reuseToken_ybqaeu$(next_0);
      else if (equals(next_0, Token$STRING_NULL_getInstance()) || equals(next_0, Token$STRING_getInstance()))
        this.$outer.tokenStream_8be2vx$.reuseToken_ybqaeu$(next_0);
      else if (equals(next_0, Token$MULTILINE_LIST_FLAG_getInstance())) {
        this.handlePossibleNegativeValues_0(current);
        return tmp$ = this.index_0, this.index_0 = tmp$ + 1 | 0, tmp$;
      } else {
        var hint_1 = 'Illegal token ' + toString(next_0);
        throw contextualDecodingException_4(this.parentYamlDecoder_8be2vx$.tokenStream_8be2vx$, 'Top-level decoder: ' + (this.name + ': ' + hint_1), null, -1, null);
      }
    } else if (equals(current, Token$LIST_BEGIN_getInstance()) || equals(current, Token$MAP_BEGIN_getInstance())) {
      this.$outer.tokenStream_8be2vx$.reuseToken_ybqaeu$(current);
      return tmp$_0 = this.index_0, this.index_0 = tmp$_0 + 1 | 0, tmp$_0;
    } else if (equals(current, Token$MULTILINE_LIST_FLAG_getInstance())) {
      this.handlePossibleNegativeValues_0(current);
      return tmp$_1 = this.index_0, this.index_0 = tmp$_1 + 1 | 0, tmp$_1;
    } else {
      var hint_2 = 'Illegal token ' + toString(current);
      throw contextualDecodingException_4(this.parentYamlDecoder_8be2vx$.tokenStream_8be2vx$, 'Top-level decoder: ' + (this.name + ': ' + hint_2), null, -1, null);
    }
    return tmp$_2 = this.index_0, this.index_0 = tmp$_2 + 1 | 0, tmp$_2;
  };
  YamlDecoder$FlowSequenceDecoder.prototype.handlePossibleNegativeValues_0 = function (current) {
    var tmp$;
    if (this.$outer.isNextWhitespace_a69lzt$(this.$outer.tokenStream_8be2vx$)) {
      this.$outer.tokenStream_8be2vx$.reuseToken_61zpoe$(readUnquotedString(this.$outer.tokenStream_8be2vx$, true, 45));
      return;
    }
    tmp$ = this.nextToken_a69lzt$(this.$outer.tokenStream_8be2vx$);
    if (tmp$ == null) {
      var hint = 'Unexpected end of text';
      throw contextualDecodingException_4(this.parentYamlDecoder_8be2vx$.tokenStream_8be2vx$, 'Top-level decoder: ' + (this.name + ': ' + hint), null, -1, null);
    }
    var next = tmp$;
    if (equals(next, Token$STRING_getInstance())) {
      this.$outer.tokenStream_8be2vx$.reuseToken_ybqaeu$(next);
      this.$outer.tokenStream_8be2vx$.strBuff = '-' + this.$outer.tokenStream_8be2vx$.strBuff;
    } else {
      this.$outer.tokenStream_8be2vx$.reuseToken_ybqaeu$(current);
    }
  };
  YamlDecoder$FlowSequenceDecoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FlowSequenceDecoder',
    interfaces: [YamlDecoder$AbstractDecoder]
  };
  function YamlDecoder$BlockSequenceDecoder($outer, baseIndent) {
    this.$outer = $outer;
    YamlDecoder$IndentedDecoder.call(this, this.$outer, baseIndent, 'Yaml Block Sequence');
    this.index_0 = 0;
  }
  Object.defineProperty(YamlDecoder$BlockSequenceDecoder.prototype, 'stopOnComma', {
    configurable: true,
    get: function () {
      return false;
    }
  });
  YamlDecoder$BlockSequenceDecoder.prototype.decodeSequentially = function () {
    return false;
  };
  Object.defineProperty(YamlDecoder$BlockSequenceDecoder.prototype, 'kind', {
    configurable: true,
    get: function () {
      return YamlDecoder$Kind$BLOCK_SEQUENCE_getInstance();
    }
  });
  YamlDecoder$BlockSequenceDecoder.prototype.checkIndent_za3lpa$ = function (newIndent) {
    return this.baseIndent_8be2vx$ <= newIndent;
  };
  YamlDecoder$BlockSequenceDecoder.prototype.decodeElementIndex_24f42q$ = function (descriptor) {
    var tmp$, tmp$_0, tmp$_1;
    if (this.index_0 === 0) {
      var token = this.nextToken_a69lzt$(this.$outer.tokenStream_8be2vx$);
      if (!equals(token, Token$MULTILINE_LIST_FLAG_getInstance())) {
        var message = "The beginning token must be '-' but found " + toString(token);
        throw IllegalStateException_init(message.toString());
      }
      return tmp$ = this.index_0, this.index_0 = tmp$ + 1 | 0, tmp$;
    }
    var token_0 = this.nextToken_a69lzt$(this.$outer.tokenStream_8be2vx$);
    if (equals(token_0, null)) {
      return -1;
    } else if (equals(token_0, Token$MULTILINE_LIST_FLAG_getInstance())) {
      if (this.checkIndent_za3lpa$(this.$outer.tokenStream_8be2vx$.currentIndent)) {
        tmp$_1 = (tmp$_0 = this.index_0, this.index_0 = tmp$_0 + 1 | 0, tmp$_0);
      } else {
        this.$outer.tokenStream_8be2vx$.reuseToken_ybqaeu$(token_0);
        tmp$_1 = -1;
      }
      return tmp$_1;
    } else if (equals(token_0, Token$STRING_getInstance())) {
      this.$outer.tokenStream_8be2vx$.reuseToken_61zpoe$(ensureNotNull(this.$outer.tokenStream_8be2vx$.strBuff));
      return -1;
    } else {
      this.$outer.tokenStream_8be2vx$.reuseToken_ybqaeu$(token_0);
      return -1;
    }
  };
  YamlDecoder$BlockSequenceDecoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BlockSequenceDecoder',
    interfaces: [YamlDecoder$IndentedDecoder]
  };
  function YamlDecoder$YamlStringDecoder($outer) {
    this.$outer = $outer;
    YamlDecoder$AbstractDecoder.call(this, this.$outer, 'Yaml Literal');
  }
  Object.defineProperty(YamlDecoder$YamlStringDecoder.prototype, 'stopOnComma', {
    configurable: true,
    get: function () {
      return false;
    }
  });
  Object.defineProperty(YamlDecoder$YamlStringDecoder.prototype, 'kind', {
    configurable: true,
    get: function () {
      return YamlDecoder$Kind$STRING_getInstance();
    }
  });
  YamlDecoder$YamlStringDecoder.prototype.decodeElementIndex_24f42q$ = function (descriptor) {
    throw IllegalStateException_init("shouldn't be called".toString());
  };
  YamlDecoder$YamlStringDecoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'YamlStringDecoder',
    interfaces: [YamlDecoder$AbstractDecoder]
  };
  function YamlDecoder$YamlNullStringDecoder($outer) {
    this.$outer = $outer;
    YamlDecoder$AbstractDecoder.call(this, this.$outer, 'Yaml Null');
  }
  YamlDecoder$YamlNullStringDecoder.prototype.decodeElementIndex_24f42q$ = function (descriptor) {
    throw IllegalStateException_init("shouldn't be called".toString());
  };
  Object.defineProperty(YamlDecoder$YamlNullStringDecoder.prototype, 'kind', {
    configurable: true,
    get: function () {
      return YamlDecoder$Kind$NULL_STRING_getInstance();
    }
  });
  Object.defineProperty(YamlDecoder$YamlNullStringDecoder.prototype, 'stopOnComma', {
    configurable: true,
    get: function () {
      throw IllegalStateException_init("shouldn't be called".toString());
    }
  });
  YamlDecoder$YamlNullStringDecoder.prototype.decodeNotNullMark = function () {
    return false;
  };
  YamlDecoder$YamlNullStringDecoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'YamlNullStringDecoder',
    interfaces: [YamlDecoder$AbstractDecoder]
  };
  YamlDecoder.prototype.decodeNotNullMark = function () {
    var tmp$;
    var token = this.tokenStream_8be2vx$.nextToken_6taknv$(false);
    if (equals(token, null))
      tmp$ = false;
    else if (equals(token, Token$STRING_NULL_getInstance()))
      tmp$ = false;
    else {
      this.tokenStream_8be2vx$.reuseToken_ybqaeu$(token);
      tmp$ = true;
    }
    return tmp$;
  };
  YamlDecoder.prototype.beginStructure_24f42q$ = function (descriptor) {
    return this.beginStructureImpl_uqxmps$(null, descriptor);
  };
  function YamlDecoder$beginStructureImpl$nextToken(closure$parentDecoder, this$YamlDecoder) {
    return function () {
      var tmp$;
      var tmp$_0;
      if (closure$parentDecoder != null) {
        var $receiver = closure$parentDecoder;
        tmp$_0 = $receiver.nextToken_a69lzt$(this$YamlDecoder.tokenStream_8be2vx$);
      } else
        tmp$_0 = null;
      return (tmp$ = tmp$_0) != null ? tmp$ : this$YamlDecoder.tokenStream_8be2vx$.nextToken_6taknv$(false);
    };
  }
  YamlDecoder.prototype.beginStructureImpl_uqxmps$ = function (parentDecoder, descriptor) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    Debugging_getInstance().beginStructure_c6m6yj$(descriptor, parentDecoder);
    var nextToken = YamlDecoder$beginStructureImpl$nextToken(parentDecoder, this);
    tmp$ = descriptor.kind;
    if (equals(tmp$, StructureKind.LIST)) {
      var token = this.tokenStream_8be2vx$.nextToken_6taknv$(false);
      if (token == null) {
        throw contextualDecodingException_4(this.tokenStream_8be2vx$, 'Top-level decoder: ' + 'Early EOF', null, -1, null);
      } else if (equals(token, Token$LIST_BEGIN_getInstance()))
        tmp$_0 = new YamlDecoder$FlowSequenceDecoder(this);
      else if (equals(token, Token$MULTILINE_LIST_FLAG_getInstance())) {
        this.tokenStream_8be2vx$.reuseToken_ybqaeu$(token);
        tmp$_0 = new YamlDecoder$BlockSequenceDecoder(this, this.tokenStream_8be2vx$.currentIndent);
      } else {
        throw contextualDecodingException_4(this.tokenStream_8be2vx$, 'Top-level decoder: ' + ('expected list(sequence), but found ' + toString(token)), null, -1, null);
      }
      return tmp$_0;
    } else if (Kotlin.isType(tmp$, PolymorphicKind) || equals(tmp$, StructureKind.CLASS)) {
      var token_0 = nextToken();
      if (equals(token_0, null))
        tmp$_1 = this.emptyClassDecoder_0;
      else if (equals(token_0, Token$MAP_BEGIN_getInstance()))
        tmp$_1 = new YamlDecoder$FlowClassDecoder(this);
      else if (equals(token_0, Token$STRING_getInstance())) {
        this.tokenStream_8be2vx$.reuseToken_61zpoe$(ensureNotNull(this.tokenStream_8be2vx$.strBuff));
        tmp$_1 = new YamlDecoder$BlockClassDecoder(this, this.tokenStream_8be2vx$.currentIndent);
      } else {
        throw contextualDecodingException_4(this.tokenStream_8be2vx$, 'Top-level decoder: ' + ('illegal beginning token ' + toString(token_0) + ' on decoding class'), null, -1, null);
      }
      return tmp$_1;
    } else if (equals(tmp$, StructureKind.MAP)) {
      var token_1 = nextToken();
      if (equals(token_1, null)) {
        throw contextualDecodingException_4(this.tokenStream_8be2vx$, 'Top-level decoder: ' + 'Early EOF', null, -1, null);
      } else if (equals(token_1, Token$MAP_BEGIN_getInstance()))
        tmp$_2 = new YamlDecoder$FlowMapDecoder(this);
      else if (equals(token_1, Token$STRING_getInstance())) {
        this.tokenStream_8be2vx$.reuseToken_61zpoe$(ensureNotNull(this.tokenStream_8be2vx$.strBuff));
        tmp$_2 = new YamlDecoder$BlockMapDecoder(this, this.tokenStream_8be2vx$.currentIndent);
      } else {
        throw contextualDecodingException_4(this.tokenStream_8be2vx$, 'Top-level decoder: ' + ('illegal beginning token ' + toString(token_1) + ' on decoding map'), null, -1, null);
      }
      return tmp$_2;
    } else if (equals(tmp$, SerialKind.CONTEXTUAL)) {
      var token_2 = nextToken();
      if (equals(token_2, null)) {
        throw contextualDecodingException_4(this.tokenStream_8be2vx$, 'Top-level decoder: ' + 'Early EOF', null, -1, null);
      } else if (equals(token_2, Token$MAP_BEGIN_getInstance()))
        tmp$_4 = new YamlDecoder$FlowMapDecoder(this);
      else if (equals(token_2, Token$STRING_NULL_getInstance()))
        tmp$_4 = this.yamlNullStringDecoder_0;
      else if (equals(token_2, Token$STRING_getInstance())) {
        var beforeRealIndent = this.tokenStream_8be2vx$.currentIndent;
        var beforeIndent = this.tokenStream_8be2vx$.currentIndent;
        var stringValue = ensureNotNull(this.tokenStream_8be2vx$.strBuff);
        var next = nextToken();
        if (equals(next, null))
          tmp$_3 = this.yamlStringDecoder_0;
        else if (equals(next, Token$COLON_getInstance())) {
          this.tokenStream_8be2vx$.currentIndent = beforeIndent;
          this.tokenStream_8be2vx$.reuseToken_ybqaeu$(next);
          this.tokenStream_8be2vx$.reuseToken_61zpoe$(stringValue);
          tmp$_3 = new YamlDecoder$BlockMapDecoder(this, beforeRealIndent);
        } else if (equals(next, Token$STRING_getInstance())) {
          this.tokenStream_8be2vx$.reuseToken_61zpoe$(ensureNotNull(this.tokenStream_8be2vx$.strBuff));
          this.tokenStream_8be2vx$.strBuff = stringValue;
          tmp$_3 = this.yamlStringDecoder_0;
        } else {
          this.tokenStream_8be2vx$.reuseToken_ybqaeu$(next);
          tmp$_3 = this.yamlStringDecoder_0;
        }
        return tmp$_3;
      } else if (equals(token_2, Token$LIST_BEGIN_getInstance()))
        tmp$_4 = new YamlDecoder$FlowSequenceDecoder(this);
      else if (equals(token_2, Token$MULTILINE_LIST_FLAG_getInstance())) {
        this.tokenStream_8be2vx$.reuseToken_ybqaeu$(token_2);
        tmp$_4 = new YamlDecoder$BlockSequenceDecoder(this, this.tokenStream_8be2vx$.currentIndent);
      } else {
        throw contextualDecodingException_4(this.tokenStream_8be2vx$, 'Top-level decoder: ' + ('illegal beginning token ' + toString(token_2) + ' on decoding contextual'), null, -1, null);
      }
      return tmp$_4;
    } else {
      throw contextualDecodingException_4(this.tokenStream_8be2vx$, 'Top-level decoder: ' + ('unsupported SerialKind ' + descriptor.kind), null, -1, null);
    }
  };
  YamlDecoder.prototype.decodeShort = function () {
    return this.decodeShortElementImpl_0(this.nextStringOrNull_0(), null, -1);
  };
  YamlDecoder.prototype.decodeString = function () {
    return this.decodeStringElementImpl_0(this.nextStringOrNull_0(), null, -1);
  };
  YamlDecoder.prototype.decodeBoolean = function () {
    return this.decodeBooleanElementImpl_0(this.nextStringOrNull_0(), null, -1);
  };
  YamlDecoder.prototype.decodeByte = function () {
    return this.decodeByteElementImpl_0(this.nextStringOrNull_0(), null, -1);
  };
  YamlDecoder.prototype.decodeChar = function () {
    return toBoxedChar(this.decodeCharElementImpl_0(this.nextStringOrNull_0(), null, -1));
  };
  YamlDecoder.prototype.decodeDouble = function () {
    return this.decodeDoubleElementImpl_0(this.nextStringOrNull_0(), null, -1);
  };
  YamlDecoder.prototype.decodeFloat = function () {
    return this.decodeFloatElementImpl_0(this.nextStringOrNull_0(), null, -1);
  };
  YamlDecoder.prototype.decodeInline_24f42q$ = function (inlineDescriptor) {
    return this.inlineDecoder_0;
  };
  YamlDecoder.prototype.decodeInt = function () {
    return this.decodeIntElementImpl_0(this.nextStringOrNull_0(), null, -1);
  };
  YamlDecoder.prototype.decodeLong = function () {
    return this.decodeLongElementImpl_0(this.nextStringOrNull_0(), null, -1);
  };
  YamlDecoder.prototype.decodeEnum_24f42q$ = function (enumDescriptor) {
    return getElementIndexOrThrow(enumDescriptor, this.decodeString());
  };
  YamlDecoder.prototype.decodeNull = function () {
    var tmp$;
    package$internal.Debugging.logDecode_h5k49v$(null, -1, null != null ? null : '<null>');
    return (tmp$ = null) == null || Kotlin.isType(tmp$, Nothing) ? tmp$ : throwCCE();
  };
  YamlDecoder.prototype.nextStringOrNull_0 = function (stopOnComma) {
    if (stopOnComma === void 0)
      stopOnComma = true;
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.nextString_0(stopOnComma)) != null) {
      var block$result;
      var tmp$_1;
      if (equals(tmp$, Token$STRING_NULL_getInstance())) {
        return null;
      }
      (tmp$_1 = tmp$) == null || typeof tmp$_1 === 'string' ? tmp$_1 : throwCCE();
      if (equals(tmp$, '~')) {
        block$result = null;
      } else if (tmp$.length === 4 && equals_0(tmp$, 'null', true)) {
        block$result = null;
      } else {
        block$result = tmp$;
      }
      tmp$_0 = block$result;
    } else
      tmp$_0 = null;
    return tmp$_0;
  };
  YamlDecoder.prototype.decodeByteElementImpl_0 = function ($receiver, descriptor, index) {
    package$internal.Debugging.logDecode_h5k49v$(descriptor, index, $receiver != null ? $receiver : '<null>');
    return limitToByte(this.withIntegerValue_ty35cg$($receiver, 'byte', descriptor, index));
  };
  YamlDecoder.prototype.decodeCharElementImpl_0 = function ($receiver, descriptor, index) {
    var tmp$, tmp$_0, tmp$_1;
    var tmp$_2;
    package$internal.Debugging.logDecode_h5k49v$(descriptor, index, $receiver != null ? $receiver : '<null>');
    if ((tmp$ = $receiver) != null) {
      if (!(tmp$.length === 1)) {
        var message = 'too many chars for a char: ' + tmp$;
        throw IllegalStateException_init(message.toString());
      }
      tmp$_2 = toBoxedChar(first(tmp$));
    } else
      tmp$_2 = null;
    return unboxChar((tmp$_1 = (tmp$_0 = unboxChar(tmp$_2)) != null ? tmp$_0 : unboxChar(this.checkNonStrictNullability_0(descriptor, index))) != null ? tmp$_1 : toChar(0));
  };
  YamlDecoder.prototype.decodeDoubleElementImpl_0 = function ($receiver, descriptor, index) {
    package$internal.Debugging.logDecode_h5k49v$(descriptor, index, $receiver != null ? $receiver : '<null>');
    return this.withDoubleValue_0($receiver, 'double', descriptor, index);
  };
  YamlDecoder.prototype.decodeFloatElementImpl_0 = function ($receiver, descriptor, index) {
    package$internal.Debugging.logDecode_h5k49v$(descriptor, index, $receiver != null ? $receiver : '<null>');
    return this.withFloatValue_0($receiver, 'float', descriptor, index);
  };
  YamlDecoder.prototype.decodeIntElementImpl_0 = function ($receiver, descriptor, index) {
    package$internal.Debugging.logDecode_h5k49v$(descriptor, index, $receiver != null ? $receiver : '<null>');
    return limitToInt(this.withIntegerValue_ty35cg$($receiver, 'int', descriptor, index));
  };
  YamlDecoder.prototype.decodeLongElementImpl_0 = function ($receiver, descriptor, index) {
    package$internal.Debugging.logDecode_h5k49v$(descriptor, index, $receiver != null ? $receiver : '<null>');
    return this.withIntegerValue_ty35cg$($receiver, 'long', descriptor, index);
  };
  YamlDecoder.prototype.decodeShortElementImpl_0 = function ($receiver, descriptor, index) {
    package$internal.Debugging.logDecode_h5k49v$(descriptor, index, $receiver != null ? $receiver : '<null>');
    return limitToShort(this.withIntegerValue_ty35cg$($receiver, 'short', descriptor, index));
  };
  YamlDecoder.prototype.decodeStringElementImpl_0 = function ($receiver, descriptor, index) {
    var tmp$, tmp$_0;
    package$internal.Debugging.logDecode_h5k49v$(descriptor, index, $receiver != null ? $receiver : '<null>');
    return (tmp$_0 = (tmp$ = $receiver) != null ? tmp$ : this.checkNonStrictNullability_0(descriptor, index)) != null ? tmp$_0 : '';
  };
  YamlDecoder.prototype.decodeBooleanElementImpl_0 = function ($receiver, descriptor, index) {
    var tmp$, tmp$_0;
    var tmp$_1;
    package$internal.Debugging.logDecode_h5k49v$(descriptor, index, $receiver != null ? $receiver : '<null>');
    if ((tmp$ = $receiver) != null) {
      var block$result;
      block$break: do {
        switch (tmp$) {
          case 'null':
          case '~':
            block$result = null;
            break block$break;
          case '1':
          case 'true':
          case 'TRUE':
            block$result = true;
            break block$break;
          case '0':
          case 'false':
          case 'FALSE':
            block$result = false;
            break block$break;
          default:
            if (this.configuration_0.nonStrictNumber) {
              switch (numberToInt(this.withDoubleValue_0(tmp$, 'boolean', descriptor, index))) {
                case 1:
                  return true;
                case 0:
                  return false;
              }
            }

            throw contextualDecodingException_4(this.tokenStream_8be2vx$, 'Top-level decoder: ' + ('illegal boolean value: ' + tmp$), descriptor, index, null);
        }
      }
       while (false);
      tmp$_1 = block$result;
    } else
      tmp$_1 = null;
    var tmp$_2;
    if ((tmp$_0 = tmp$_1) != null)
      tmp$_2 = tmp$_0;
    else {
      if (this.configuration_0.nonStrictNullability) {
        return false;
      } else {
        throw contextualDecodingException_4(this.tokenStream_8be2vx$, 'Top-level decoder: ' + YamlDecoder$Companion_getInstance().UNEXPECTED_NULL_MESSAGE, descriptor, index, null);
      }
    }
    return tmp$_2;
  };
  YamlDecoder.prototype.castFromNullToZeroOrNull_0 = function ($receiver, descriptor, index) {
    if ($receiver == null || equals($receiver, '~') || ($receiver.length === 4 && equals_0($receiver, 'null', true))) {
      if (this.configuration_0.nonStrictNullability) {
        return L0;
      } else {
        throw contextualDecodingException_4(this.tokenStream_8be2vx$, 'Top-level decoder: ' + YamlDecoder$Companion_getInstance().UNEXPECTED_NULL_MESSAGE, descriptor, index, null);
      }
    }
    return null;
  };
  function YamlDecoder$Companion() {
    YamlDecoder$Companion_instance = this;
    this.UNEXPECTED_NULL_MESSAGE = 'unexpected null value, you may enable `nonStrictNullability`';
  }
  YamlDecoder$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var YamlDecoder$Companion_instance = null;
  function YamlDecoder$Companion_getInstance() {
    if (YamlDecoder$Companion_instance === null) {
      new YamlDecoder$Companion();
    }
    return YamlDecoder$Companion_instance;
  }
  YamlDecoder.prototype.checkNonStrictNullability_0 = function (descriptor, index) {
    if (!this.configuration_0.nonStrictNullability) {
      throw contextualDecodingException_4(this.tokenStream_8be2vx$, 'Top-level decoder: ' + YamlDecoder$Companion_getInstance().UNEXPECTED_NULL_MESSAGE, descriptor, index, null);
    }
    return null;
  };
  YamlDecoder.prototype.withDoubleValue_0 = function ($receiver, typeName, descriptor, index) {
    var tmp$;
    var tmp$_0;
    if (this.castFromNullToZeroOrNull_0($receiver, descriptor, index) != null) {
      return 0.0;
    } else
      tmp$_0 = null;
    var tmp$_1;
    if ((tmp$ = tmp$_0) != null)
      tmp$_1 = tmp$;
    else {
      if (!($receiver != null)) {
        var message = 'Check failed.';
        throw IllegalStateException_init(message.toString());
      }
      var canBeHexOrBin = $receiver.length > 2 && $receiver.charCodeAt(0) === 48;
      if (canBeHexOrBin) {
        if ($receiver.charCodeAt(1) === 120 || $receiver.charCodeAt(1) === 88)
          return HexConverter_getInstance().hexToLong_bm4lxs$($receiver, 2).toNumber();
        else if ($receiver.charCodeAt(1) === 98 || $receiver.charCodeAt(1) === 66)
          return BinaryConverter_getInstance().binToLong_bm4lxs$($receiver, 2).toNumber();
      }
      var tmp$_2;
      try {
        tmp$_2 = new Result(toDouble($receiver));
      } catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          tmp$_2 = new Result(createFailure(e));
        } else
          throw e;
      }
      var $receiver_0 = tmp$_2;
      var tmp$_3, tmp$_0_0;
      var exception = $receiver_0.exceptionOrNull();
      if (exception == null)
        tmp$_0_0 = (tmp$_3 = $receiver_0.value) == null || Kotlin.isType(tmp$_3, Any) ? tmp$_3 : throwCCE();
      else {
        throw contextualDecodingException_4(this.tokenStream_8be2vx$, 'Top-level decoder: ' + ('Invalid ' + typeName + ': ' + toString($receiver)), descriptor, index, exception);
      }
      tmp$_1 = tmp$_0_0;
    }
    return tmp$_1;
  };
  YamlDecoder.prototype.withFloatValue_0 = function ($receiver, typeName, descriptor, index) {
    var tmp$;
    var tmp$_0;
    if (this.castFromNullToZeroOrNull_0($receiver, descriptor, index) != null) {
      return 0.0;
    } else
      tmp$_0 = null;
    var tmp$_1;
    if ((tmp$ = tmp$_0) != null)
      tmp$_1 = tmp$;
    else {
      if (!($receiver != null)) {
        var message = 'Check failed.';
        throw IllegalStateException_init(message.toString());
      }
      var canBeHexOrBin = $receiver.length > 2 && $receiver.charCodeAt(0) === 48;
      if (canBeHexOrBin) {
        if ($receiver.charCodeAt(1) === 120 || $receiver.charCodeAt(1) === 88)
          return HexConverter_getInstance().hexToLong_bm4lxs$($receiver, 2).toNumber();
        else if ($receiver.charCodeAt(1) === 98 || $receiver.charCodeAt(1) === 66)
          return BinaryConverter_getInstance().binToLong_bm4lxs$($receiver, 2).toNumber();
      }
      var tmp$_2;
      try {
        tmp$_2 = new Result(toDouble($receiver));
      } catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          tmp$_2 = new Result(createFailure(e));
        } else
          throw e;
      }
      var $receiver_0 = tmp$_2;
      var tmp$_3, tmp$_0_0;
      var exception = $receiver_0.exceptionOrNull();
      if (exception == null)
        tmp$_0_0 = (tmp$_3 = $receiver_0.value) == null || Kotlin.isType(tmp$_3, Any) ? tmp$_3 : throwCCE();
      else {
        throw contextualDecodingException_4(this.tokenStream_8be2vx$, 'Top-level decoder: ' + ('Invalid ' + typeName + ': ' + toString($receiver)), descriptor, index, exception);
      }
      tmp$_1 = tmp$_0_0;
    }
    return tmp$_1;
  };
  YamlDecoder.prototype.withIntegerValue_ty35cg$ = function ($receiver, typeName, descriptor, index) {
    var tmp$;
    var tmp$_0;
    if (this.castFromNullToZeroOrNull_0($receiver, descriptor, index) != null) {
      return L0;
    } else
      tmp$_0 = null;
    var tmp$_1;
    if ((tmp$ = tmp$_0) != null)
      tmp$_1 = tmp$;
    else {
      var tmp$_2;
      if (!($receiver != null)) {
        var message = 'Check failed.';
        throw IllegalStateException_init(message.toString());
      }
      var canBeHexOrBin = $receiver.length > 2 && $receiver.charCodeAt(0) === 48;
      if (canBeHexOrBin) {
        if ($receiver.charCodeAt(1) === 120 || $receiver.charCodeAt(1) === 88)
          return HexConverter_getInstance().hexToLong_bm4lxs$($receiver, 2);
        else if ($receiver.charCodeAt(1) === 98 || $receiver.charCodeAt(1) === 66)
          return BinaryConverter_getInstance().binToLong_bm4lxs$($receiver, 2);
      }
      var tmp$_3;
      if ((tmp$_2 = toLongOrNull($receiver)) != null)
        tmp$_3 = tmp$_2;
      else {
        var tmp$_4;
        try {
          var block$result;
          if (this.configuration_0.nonStrictNumber) {
            var tmp$_5;
            try {
              tmp$_5 = new Result(toDouble($receiver));
            } catch (e) {
              if (Kotlin.isType(e, Throwable)) {
                tmp$_5 = new Result(createFailure(e));
              } else
                throw e;
            }
            var $receiver_0 = tmp$_5;
            var tmp$_6, tmp$_0_0;
            var exception = $receiver_0.exceptionOrNull();
            if (exception == null)
              tmp$_0_0 = (tmp$_6 = $receiver_0.value) == null || Kotlin.isType(tmp$_6, Any) ? tmp$_6 : throwCCE();
            else {
              throw contextualDecodingException_4(this.tokenStream_8be2vx$, 'Top-level decoder: ' + ('Cannot cast ' + toString($receiver) + ' to ' + typeName), descriptor, index, null);
            }
            block$result = Kotlin.Long.fromNumber(tmp$_0_0);
          } else {
            throw contextualDecodingException_4(this.tokenStream_8be2vx$, 'Top-level decoder: ' + ('Number ' + toString($receiver) + ' overflow for ' + typeName), descriptor, index, null);
          }
          tmp$_4 = new Result(block$result);
        } catch (e_0) {
          if (Kotlin.isType(e_0, Throwable)) {
            tmp$_4 = new Result(createFailure(e_0));
          } else
            throw e_0;
        }
        var $receiver_1 = tmp$_4;
        var tmp$_7, tmp$_0_1;
        var exception_0 = $receiver_1.exceptionOrNull();
        if (exception_0 == null)
          tmp$_0_1 = (tmp$_7 = $receiver_1.value) == null || Kotlin.isType(tmp$_7, Any) ? tmp$_7 : throwCCE();
        else {
          throw contextualDecodingException_4(this.tokenStream_8be2vx$, 'Top-level decoder: ' + ('Invalid ' + typeName + ': ' + toString($receiver)), descriptor, index, exception_0);
        }
        tmp$_3 = tmp$_0_1;
      }
      return tmp$_3;
    }
    return tmp$_1;
  };
  YamlDecoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'YamlDecoder',
    interfaces: [Decoder]
  };
  var isOdd = defineInlineFunction('yamlkt.net.mamoe.yamlkt.internal.isOdd_8e50z4$', function ($receiver) {
    return ($receiver & 1) !== 0;
  });
  function getElementIndexOrThrow($receiver, name) {
    var index = $receiver.getElementIndex_61zpoe$(name);
    if (index === -3)
      throw SerializationException_init_0($receiver.serialName + " does not contain element with name '" + name + "'");
    return index;
  }
  function YamlElementMapSerializer() {
    YamlElementMapSerializer_instance = this;
    this.$delegate_d0ebvo$_0 = MapSerializer(YamlElement$Companion_getInstance().serializer(), YamlElement$Companion_getInstance().serializer());
  }
  Object.defineProperty(YamlElementMapSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.$delegate_d0ebvo$_0.descriptor;
    }
  });
  YamlElementMapSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return this.$delegate_d0ebvo$_0.deserialize_bq71mq$(decoder);
  };
  YamlElementMapSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    return this.$delegate_d0ebvo$_0.serialize_55azsf$(encoder, value);
  };
  YamlElementMapSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'YamlElementMapSerializer',
    interfaces: [KSerializer]
  };
  var YamlElementMapSerializer_instance = null;
  function YamlElementMapSerializer_getInstance() {
    if (YamlElementMapSerializer_instance === null) {
      new YamlElementMapSerializer();
    }
    return YamlElementMapSerializer_instance;
  }
  function YamlElementListSerializer() {
    YamlElementListSerializer_instance = this;
    this.$delegate_l3li2m$_0 = ListSerializer(YamlElement$Companion_getInstance().serializer());
  }
  Object.defineProperty(YamlElementListSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.$delegate_l3li2m$_0.descriptor;
    }
  });
  YamlElementListSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return this.$delegate_l3li2m$_0.deserialize_bq71mq$(decoder);
  };
  YamlElementListSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    return this.$delegate_l3li2m$_0.serialize_55azsf$(encoder, value);
  };
  YamlElementListSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'YamlElementListSerializer',
    interfaces: [KSerializer]
  };
  var YamlElementListSerializer_instance = null;
  function YamlElementListSerializer_getInstance() {
    if (YamlElementListSerializer_instance === null) {
      new YamlElementListSerializer();
    }
    return YamlElementListSerializer_instance;
  }
  function YamlElementSerializer() {
    YamlElementSerializer_instance = this;
    this.descriptor_71d3gh$_0 = buildSerialDescriptor('YamlElement', SerialKind.CONTEXTUAL, []);
  }
  Object.defineProperty(YamlElementSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_71d3gh$_0;
    }
  });
  YamlElementSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var descriptor = this.descriptor;
    var decodeStructure$result;
    var composite = decoder.beginStructure_24f42q$(descriptor);
    var ex = null;
    try {
      var tmp$, tmp$_0;
      switch ((Kotlin.isType(tmp$ = composite, YamlDecoder$AbstractDecoder) ? tmp$ : throwCCE()).kind.name) {
        case 'FLOW_MAP':
        case 'BLOCK_MAP':
          composite.dontWrapNextStructure_8be2vx$ = true;
          tmp$_0 = new YamlMap(YamlElementMapSerializer_getInstance().deserialize_bq71mq$(composite));
          break;
        case 'FLOW_SEQUENCE':
        case 'BLOCK_SEQUENCE':
          composite.dontWrapNextStructure_8be2vx$ = true;
          tmp$_0 = new YamlList(YamlElementListSerializer_getInstance().deserialize_bq71mq$(composite));
          break;
        case 'NULL_STRING':
          tmp$_0 = YamlNull_getInstance();
          break;
        case 'STRING':
          tmp$_0 = new YamlLiteral(ensureNotNull(composite.parentYamlDecoder_8be2vx$.tokenStream_8be2vx$.strBuff));
          break;
        default:
          throw IllegalStateException_init(('Yaml Internal error: bad decoder: ' + composite).toString());
      }
      decodeStructure$result = tmp$_0;
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
  YamlElementSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    if (Kotlin.isType(value, YamlPrimitive))
      YamlPrimitive$Companion_getInstance().serializer().serialize_55azsf$(encoder, value);
    else if (Kotlin.isType(value, YamlMap))
      YamlMap$Companion_getInstance().serializer().serialize_55azsf$(encoder, value);
    else if (Kotlin.isType(value, YamlList))
      YamlList$Companion_getInstance().serializer().serialize_55azsf$(encoder, value);
    else
      Kotlin.noWhenBranchMatched();
  };
  YamlElementSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'YamlElementSerializer',
    interfaces: [KSerializer]
  };
  var YamlElementSerializer_instance = null;
  function YamlElementSerializer_getInstance() {
    if (YamlElementSerializer_instance === null) {
      new YamlElementSerializer();
    }
    return YamlElementSerializer_instance;
  }
  function YamlPrimitiveSerializer() {
    YamlPrimitiveSerializer_instance = this;
    this.descriptor_o41zho$_0 = buildSerialDescriptor('YamlPrimitive', SerialKind.CONTEXTUAL, []);
  }
  Object.defineProperty(YamlPrimitiveSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_o41zho$_0;
    }
  });
  YamlPrimitiveSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var descriptor = this.descriptor;
    var decodeStructure$result;
    var composite = decoder.beginStructure_24f42q$(descriptor);
    var ex = null;
    try {
      var tmp$, tmp$_0;
      switch ((Kotlin.isType(tmp$ = composite, YamlDecoder$AbstractDecoder) ? tmp$ : throwCCE()).kind.name) {
        case 'NULL_STRING':
          tmp$_0 = YamlNull_getInstance();
          break;
        case 'STRING':
          tmp$_0 = new YamlLiteral(ensureNotNull(composite.parentYamlDecoder_8be2vx$.tokenStream_8be2vx$.strBuff));
          break;
        default:
          throw contextualDecodingException_4(composite.parentYamlDecoder_8be2vx$.tokenStream_8be2vx$, 'Top-level decoder: ' + ('Cannot read YamlPrimitive from a ' + composite.name), null, -1, null);
      }
      decodeStructure$result = tmp$_0;
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
  YamlPrimitiveSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    encoder.encodeNullableSerializableValue_f4686g$(serializer(kotlin_js_internal_StringCompanionObject), value.content);
  };
  YamlPrimitiveSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'YamlPrimitiveSerializer',
    interfaces: [KSerializer]
  };
  var YamlPrimitiveSerializer_instance = null;
  function YamlPrimitiveSerializer_getInstance() {
    if (YamlPrimitiveSerializer_instance === null) {
      new YamlPrimitiveSerializer();
    }
    return YamlPrimitiveSerializer_instance;
  }
  function YamlLiteralSerializer() {
    YamlLiteralSerializer_instance = this;
    this.descriptor_llxz5g$_0 = buildSerialDescriptor('YamlLiteral', SerialKind.CONTEXTUAL, []);
  }
  Object.defineProperty(YamlLiteralSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_llxz5g$_0;
    }
  });
  YamlLiteralSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var descriptor = this.descriptor;
    var decodeStructure$result;
    var composite = decoder.beginStructure_24f42q$(descriptor);
    var ex = null;
    try {
      var tmp$, tmp$_0;
      switch ((Kotlin.isType(tmp$ = composite, YamlDecoder$AbstractDecoder) ? tmp$ : throwCCE()).kind.name) {
        case 'NULL_STRING':
          throw contextualDecodingException_4(composite.parentYamlDecoder_8be2vx$.tokenStream_8be2vx$, 'Top-level decoder: ' + 'Expected a YamlLiteral, but found YamlNull', null, -1, null);
        case 'STRING':
          tmp$_0 = new YamlLiteral(ensureNotNull(composite.parentYamlDecoder_8be2vx$.tokenStream_8be2vx$.strBuff));
          break;
        default:
          throw contextualDecodingException_4(composite.parentYamlDecoder_8be2vx$.tokenStream_8be2vx$, 'Top-level decoder: ' + ('Cannot read YamlLiteral from a ' + composite.name), null, -1, null);
      }
      decodeStructure$result = tmp$_0;
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
  YamlLiteralSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    encoder.encodeSerializableValue_tf03ej$(serializer(kotlin_js_internal_StringCompanionObject), value.content);
  };
  YamlLiteralSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'YamlLiteralSerializer',
    interfaces: [KSerializer]
  };
  var YamlLiteralSerializer_instance = null;
  function YamlLiteralSerializer_getInstance() {
    if (YamlLiteralSerializer_instance === null) {
      new YamlLiteralSerializer();
    }
    return YamlLiteralSerializer_instance;
  }
  function YamlNullSerializer() {
    YamlNullSerializer_instance = this;
    this.descriptor_rks34w$_0 = buildSerialDescriptor('YamlNull', SerialKind.CONTEXTUAL, []);
  }
  Object.defineProperty(YamlNullSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_rks34w$_0;
    }
  });
  YamlNullSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var descriptor = this.descriptor;
    var decodeStructure$result;
    var composite = decoder.beginStructure_24f42q$(descriptor);
    var ex = null;
    try {
      var tmp$, tmp$_0;
      switch ((Kotlin.isType(tmp$ = composite, YamlDecoder$AbstractDecoder) ? tmp$ : throwCCE()).kind.name) {
        case 'NULL_STRING':
          tmp$_0 = YamlNull_getInstance();
          break;
        case 'STRING':
          throw contextualDecodingException_4(composite.parentYamlDecoder_8be2vx$.tokenStream_8be2vx$, 'Top-level decoder: ' + ('Expected a YamlNull, but found YamlLiteral(' + '"' + toString(composite.parentYamlDecoder_8be2vx$.tokenStream_8be2vx$.strBuff) + '"' + ')'), null, -1, null);
        default:
          throw contextualDecodingException_4(composite.parentYamlDecoder_8be2vx$.tokenStream_8be2vx$, 'Top-level decoder: ' + ('Cannot read YamlNull from a ' + composite.name), null, -1, null);
      }
      decodeStructure$result = tmp$_0;
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
  YamlNullSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    encoder.encodeNullableSerializableValue_f4686g$(serializer(kotlin_js_internal_StringCompanionObject), null);
  };
  YamlNullSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'YamlNullSerializer',
    interfaces: [KSerializer]
  };
  var YamlNullSerializer_instance = null;
  function YamlNullSerializer_getInstance() {
    if (YamlNullSerializer_instance === null) {
      new YamlNullSerializer();
    }
    return YamlNullSerializer_instance;
  }
  function YamlMapSerializer() {
    YamlMapSerializer_instance = this;
    this.descriptor_s61uzl$_0 = buildSerialDescriptor('YamlMap', SerialKind.CONTEXTUAL, []);
  }
  Object.defineProperty(YamlMapSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_s61uzl$_0;
    }
  });
  YamlMapSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var tmp$, tmp$_0;
    var tmp$_1;
    var descriptor = this.descriptor;
    var decodeStructure$result;
    var composite = decoder.beginStructure_24f42q$(descriptor);
    var ex = null;
    try {
      var tmp$_2, tmp$_3;
      switch ((Kotlin.isType(tmp$_2 = composite, YamlDecoder$AbstractDecoder) ? tmp$_2 : throwCCE()).kind.name) {
        case 'BLOCK_MAP':
          composite.dontWrapNextStructure_8be2vx$ = true;
          tmp$_3 = new YamlMap(YamlElementMapSerializer_getInstance().deserialize_bq71mq$(composite));
          break;
        case 'FLOW_MAP':
          composite.dontWrapNextStructure_8be2vx$ = true;
          tmp$_3 = new YamlMap(YamlElementMapSerializer_getInstance().deserialize_bq71mq$(composite));
          break;
        default:
          throw contextualDecodingException_4(composite.parentYamlDecoder_8be2vx$.tokenStream_8be2vx$, 'Top-level decoder: ' + ('Cannot read YamlMap from a ' + composite.name), null, -1, null);
      }
      decodeStructure$result = tmp$_3;
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
    if ((tmp$_0 = Kotlin.isType(tmp$ = decodeStructure$result, YamlMap) ? tmp$ : null) != null)
      tmp$_1 = tmp$_0;
    else {
      throw IllegalStateException_init('Yaml Internal error: bad YamlElement casted for a map'.toString());
    }
    return tmp$_1;
  };
  YamlMapSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    encoder.encodeSerializableValue_tf03ej$(YamlElementMapSerializer_getInstance(), value);
  };
  YamlMapSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'YamlMapSerializer',
    interfaces: [KSerializer]
  };
  var YamlMapSerializer_instance = null;
  function YamlMapSerializer_getInstance() {
    if (YamlMapSerializer_instance === null) {
      new YamlMapSerializer();
    }
    return YamlMapSerializer_instance;
  }
  function YamlListSerializer() {
    YamlListSerializer_instance = this;
    this.descriptor_rogwzt$_0 = buildSerialDescriptor('YamlList', SerialKind.CONTEXTUAL, []);
  }
  Object.defineProperty(YamlListSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_rogwzt$_0;
    }
  });
  YamlListSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var tmp$, tmp$_0;
    var tmp$_1;
    var descriptor = this.descriptor;
    var decodeStructure$result;
    var composite = decoder.beginStructure_24f42q$(descriptor);
    var ex = null;
    try {
      var tmp$_2, tmp$_3;
      switch ((Kotlin.isType(tmp$_2 = composite, YamlDecoder$AbstractDecoder) ? tmp$_2 : throwCCE()).kind.name) {
        case 'FLOW_SEQUENCE':
          composite.dontWrapNextStructure_8be2vx$ = true;
          tmp$_3 = new YamlList(YamlElementListSerializer_getInstance().deserialize_bq71mq$(composite));
          break;
        case 'BLOCK_SEQUENCE':
          composite.dontWrapNextStructure_8be2vx$ = false;
          tmp$_3 = new YamlList(YamlElementListSerializer_getInstance().deserialize_bq71mq$(composite));
          break;
        default:
          throw contextualDecodingException_4(composite.parentYamlDecoder_8be2vx$.tokenStream_8be2vx$, 'Top-level decoder: ' + ('Cannot read YamlList from a ' + composite.name), null, -1, null);
      }
      decodeStructure$result = tmp$_3;
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
    if ((tmp$_0 = Kotlin.isType(tmp$ = decodeStructure$result, YamlList) ? tmp$ : null) != null)
      tmp$_1 = tmp$_0;
    else {
      throw IllegalStateException_init('Yaml Internal error: bad YamlElement casted for a list'.toString());
    }
    return tmp$_1;
  };
  YamlListSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    encoder.encodeSerializableValue_tf03ej$(YamlElementListSerializer_getInstance(), value);
  };
  YamlListSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'YamlListSerializer',
    interfaces: [KSerializer]
  };
  var YamlListSerializer_instance = null;
  function YamlListSerializer_getInstance() {
    if (YamlListSerializer_instance === null) {
      new YamlListSerializer();
    }
    return YamlListSerializer_instance;
  }
  function YamlEncoder(configuration, serializersModule, writer) {
    this.configuration_0 = configuration;
    this.serializersModule_dk67pz$_0 = serializersModule;
    this.writer_0 = writer;
  }
  Object.defineProperty(YamlEncoder.prototype, 'serializersModule', {
    get: function () {
      return this.serializersModule_dk67pz$_0;
    }
  });
  YamlEncoder.prototype.beginStructureImpl_0 = function (parent, descriptor) {
    var tmp$, tmp$_0;
    this.writer_0.levelIncrease();
    tmp$ = descriptor.kind;
    if (equals(tmp$, StructureKind.CLASS) || Kotlin.isType(tmp$, PolymorphicKind)) {
      switch (this.configuration_0.classSerialization.name) {
        case 'BLOCK_MAP':
          tmp$_0 = new YamlEncoder$BlockMapOrClassEncoder(this, parent);
          break;
        case 'FLOW_MAP':
          tmp$_0 = new YamlEncoder$FlowMapOrClassEncoder(this, Kotlin.isType(parent, YamlEncoder$BlockEncoder));
          break;
        default:
          tmp$_0 = Kotlin.noWhenBranchMatched();
          break;
      }
    } else if (equals(tmp$, StructureKind.MAP)) {
      switch (this.configuration_0.mapSerialization.name) {
        case 'BLOCK_MAP':
          tmp$_0 = new YamlEncoder$BlockMapOrClassEncoder(this, parent);
          break;
        case 'FLOW_MAP':
          tmp$_0 = new YamlEncoder$FlowMapOrClassEncoder(this, Kotlin.isType(parent, YamlEncoder$BlockEncoder));
          break;
        default:
          tmp$_0 = Kotlin.noWhenBranchMatched();
          break;
      }
    } else if (equals(tmp$, StructureKind.LIST)) {
      switch (this.configuration_0.listSerialization.name) {
        case 'FLOW_SEQUENCE':
          tmp$_0 = new YamlEncoder$FlowSequenceEncoder(this, Kotlin.isType(parent, YamlEncoder$BlockEncoder));
          break;
        case 'BLOCK_SEQUENCE':
          if (Kotlin.isType(parent, YamlEncoder$BlockMapOrClassEncoder)) {
            this.writer_0.levelDecrease();
            tmp$_0 = new YamlEncoder$BlockSequenceEncoder(this, parent, false, true);
          } else
            tmp$_0 = new YamlEncoder$BlockSequenceEncoder(this, parent, false, false);
          break;
        case 'AUTO':
          tmp$_0 = new YamlEncoder$BlockSequenceEncoder(this, parent, false, false);
          break;
        default:
          tmp$_0 = Kotlin.noWhenBranchMatched();
          break;
      }
    } else {
      throw IllegalStateException_init(('unsupported SerialKind: ' + descriptor.kind).toString());
    }
    return tmp$_0;
  };
  YamlEncoder.prototype.beginCollection_szpzho$ = function (descriptor, collectionSize) {
    if (collectionSize === 0) {
      if (equals(descriptor.kind, StructureKind.LIST)) {
        return new YamlEncoder$EmptySequenceEncoder(this, false);
      }
    }
    return Encoder.prototype.beginCollection_szpzho$.call(this, descriptor, collectionSize);
  };
  YamlEncoder.prototype.beginStructure_24f42q$ = function (descriptor) {
    return this.beginStructureImpl_0(null, descriptor);
  };
  function YamlEncoder$FlowMapOrClassEncoder($outer, linebreakAfterFinish) {
    this.$outer = $outer;
    YamlEncoder$FlowEncoder.call(this, this.$outer, linebreakAfterFinish);
    var $receiver = this.$outer.writer_0;
    $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + '{'.length | 0;
    $receiver.output_0.append_gw00v9$('{');
    this.justStarted_0 = true;
    this.isKey_0 = true;
  }
  YamlEncoder$FlowMapOrClassEncoder.prototype.structuredKeyValue_0 = function (block) {
    var $receiver = this.isKey_0;
    this.isKey_0 = !this.isKey_0;
    var isKey = $receiver;
    if (isKey) {
      var $receiver_0 = this.$outer.writer_0;
      if (32 === 10) {
        $receiver_0.currentIndent_8be2vx$ = 0;
      } else {
        $receiver_0.currentIndent_8be2vx$ = $receiver_0.currentIndent_8be2vx$ + 1 | 0;
      }
      $receiver_0.output_0.append_s8itvh$(32);
      if (this.justStarted_0) {
        this.justStarted_0 = false;
      } else {
        var $receiver_1 = this.$outer.writer_0;
        if (44 === 10) {
          $receiver_1.currentIndent_8be2vx$ = 0;
        } else {
          $receiver_1.currentIndent_8be2vx$ = $receiver_1.currentIndent_8be2vx$ + 1 | 0;
        }
        $receiver_1.output_0.append_s8itvh$(44);
      }
      block(this.$outer.writer_0);
      var $receiver_2 = this.$outer.writer_0;
      $receiver_2.currentIndent_8be2vx$ = $receiver_2.currentIndent_8be2vx$ + ': '.length | 0;
      $receiver_2.output_0.append_gw00v9$(': ');
    } else {
      block(this.$outer.writer_0);
    }
  };
  YamlEncoder$FlowMapOrClassEncoder.prototype.encodeValue_s8itvh$ = function (value) {
    this.justStarted_0 = false;
    var $receiver = this.$outer.writer_0;
    if (value === 10) {
      $receiver.currentIndent_8be2vx$ = 0;
    } else {
      $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + 1 | 0;
    }
    $receiver.output_0.append_s8itvh$(value);
  };
  YamlEncoder$FlowMapOrClassEncoder.prototype.encodeValue_61zpoe$ = function (value) {
    this.justStarted_0 = false;
    var $receiver = this.$outer.writer_0;
    $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + value.length | 0;
    $receiver.output_0.append_gw00v9$(value);
  };
  YamlEncoder$FlowMapOrClassEncoder.prototype.encodeElement_j0tz0d$ = function (descriptor, index, value) {
    this.writeValueHead_szpzho$(descriptor, index);
    var $receiver = this.$outer.writer_0;
    if (value === 10) {
      $receiver.currentIndent_8be2vx$ = 0;
    } else {
      $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + 1 | 0;
    }
    $receiver.output_0.append_s8itvh$(value);
    this.writeValueTail_szpzho$(descriptor, index);
  };
  YamlEncoder$FlowMapOrClassEncoder.prototype.encodeElement_iij8qq$ = function (descriptor, index, value) {
    this.writeValueHead_szpzho$(descriptor, index);
    var $receiver = this.$outer.writer_0;
    $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + value.length | 0;
    $receiver.output_0.append_gw00v9$(value);
    this.writeValueTail_szpzho$(descriptor, index);
  };
  YamlEncoder$FlowMapOrClassEncoder.prototype.endStructure0_24f42q$ = function (descriptor) {
    if (!this.justStarted_0) {
      var $receiver = this.$outer.writer_0;
      $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + ' }'.length | 0;
      $receiver.output_0.append_gw00v9$(' }');
    } else {
      var $receiver_0 = this.$outer.writer_0;
      $receiver_0.currentIndent_8be2vx$ = $receiver_0.currentIndent_8be2vx$ + '}'.length | 0;
      $receiver_0.output_0.append_gw00v9$('}');
    }
  };
  YamlEncoder$FlowMapOrClassEncoder.prototype.encodeSerializableElement0_r4qlx7$ = function (descriptor, index, serializer, value) {
    if (equals(descriptor.kind, StructureKind.CLASS)) {
      YamlEncoder$FlowEncoder.prototype.encodeSerializableElement0_r4qlx7$.call(this, descriptor, index, serializer, value);
    } else {
      var $receiver = this.isKey_0;
      this.isKey_0 = !this.isKey_0;
      var isKey = $receiver;
      if (isKey) {
        var $receiver_0 = this.$outer.writer_0;
        if (32 === 10) {
          $receiver_0.currentIndent_8be2vx$ = 0;
        } else {
          $receiver_0.currentIndent_8be2vx$ = $receiver_0.currentIndent_8be2vx$ + 1 | 0;
        }
        $receiver_0.output_0.append_s8itvh$(32);
        if (this.justStarted_0) {
          this.justStarted_0 = false;
        } else {
          var $receiver_1 = this.$outer.writer_0;
          if (44 === 10) {
            $receiver_1.currentIndent_8be2vx$ = 0;
          } else {
            $receiver_1.currentIndent_8be2vx$ = $receiver_1.currentIndent_8be2vx$ + 1 | 0;
          }
          $receiver_1.output_0.append_s8itvh$(44);
        }
        this.$outer;
        YamlEncoder$FlowEncoder.prototype.encodeSerializableElement0_r4qlx7$.call(this, descriptor, index, serializer, value);
        var $receiver_2 = this.$outer.writer_0;
        $receiver_2.currentIndent_8be2vx$ = $receiver_2.currentIndent_8be2vx$ + ': '.length | 0;
        $receiver_2.output_0.append_gw00v9$(': ');
      } else {
        this.$outer;
        YamlEncoder$FlowEncoder.prototype.encodeSerializableElement0_r4qlx7$.call(this, descriptor, index, serializer, value);
      }
    }
  };
  YamlEncoder$FlowMapOrClassEncoder.prototype.encodeSerializableUnquotedStringImpl_iij8qq$ = function (descriptor, index, value) {
    if (equals(descriptor.kind, StructureKind.CLASS)) {
      this.encodeUnquotedString_61zpoe$(value);
    } else {
      var $receiver = this.isKey_0;
      this.isKey_0 = !this.isKey_0;
      var isKey = $receiver;
      if (isKey) {
        var $receiver_0 = this.$outer.writer_0;
        if (32 === 10) {
          $receiver_0.currentIndent_8be2vx$ = 0;
        } else {
          $receiver_0.currentIndent_8be2vx$ = $receiver_0.currentIndent_8be2vx$ + 1 | 0;
        }
        $receiver_0.output_0.append_s8itvh$(32);
        if (this.justStarted_0) {
          this.justStarted_0 = false;
        } else {
          var $receiver_1 = this.$outer.writer_0;
          if (44 === 10) {
            $receiver_1.currentIndent_8be2vx$ = 0;
          } else {
            $receiver_1.currentIndent_8be2vx$ = $receiver_1.currentIndent_8be2vx$ + 1 | 0;
          }
          $receiver_1.output_0.append_s8itvh$(44);
        }
        this.$outer;
        this.encodeUnquotedString_61zpoe$(value);
        var $receiver_2 = this.$outer.writer_0;
        $receiver_2.currentIndent_8be2vx$ = $receiver_2.currentIndent_8be2vx$ + ': '.length | 0;
        $receiver_2.output_0.append_gw00v9$(': ');
      } else {
        this.$outer;
        this.encodeUnquotedString_61zpoe$(value);
      }
    }
  };
  YamlEncoder$FlowMapOrClassEncoder.prototype.writeValueHead_szpzho$ = function (descriptor, index) {
    if (equals(descriptor.kind, StructureKind.MAP))
      return;
    if (equals(descriptor.kind, StructureKind.LIST))
      return;
    if (this.justStarted_0)
      this.justStarted_0 = false;
    else {
      var $receiver = this.$outer.writer_0;
      if (44 === 10) {
        $receiver.currentIndent_8be2vx$ = 0;
      } else {
        $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + 1 | 0;
      }
      $receiver.output_0.append_s8itvh$(44);
    }
    var $receiver_0 = this.$outer.writer_0;
    if (32 === 10) {
      $receiver_0.currentIndent_8be2vx$ = 0;
    } else {
      $receiver_0.currentIndent_8be2vx$ = $receiver_0.currentIndent_8be2vx$ + 1 | 0;
    }
    $receiver_0.output_0.append_s8itvh$(32);
    var $receiver_1 = this.$outer.writer_0;
    var chars = descriptor.getElementName_za3lpa$(index);
    $receiver_1.currentIndent_8be2vx$ = $receiver_1.currentIndent_8be2vx$ + chars.length | 0;
    $receiver_1.output_0.append_gw00v9$(chars);
    var $receiver_2 = this.$outer.writer_0;
    $receiver_2.currentIndent_8be2vx$ = $receiver_2.currentIndent_8be2vx$ + ': '.length | 0;
    $receiver_2.output_0.append_gw00v9$(': ');
  };
  YamlEncoder$FlowMapOrClassEncoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FlowMapOrClassEncoder',
    interfaces: [YamlEncoder$FlowEncoder]
  };
  function YamlEncoder$FlowSequenceEncoder($outer, linebreakAfterFinish) {
    this.$outer = $outer;
    YamlEncoder$FlowEncoder.call(this, this.$outer, linebreakAfterFinish);
    var $receiver = this.$outer.writer_0;
    $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + '[ '.length | 0;
    $receiver.output_0.append_gw00v9$('[ ');
    this.justStarted_0 = true;
  }
  YamlEncoder$FlowSequenceEncoder.prototype.endStructure0_24f42q$ = function (descriptor) {
    var $receiver = this.$outer.writer_0;
    $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + ' ]'.length | 0;
    $receiver.output_0.append_gw00v9$(' ]');
  };
  YamlEncoder$FlowSequenceEncoder.prototype.encodeValue_s8itvh$ = function (value) {
    this.justStarted_0 = false;
    var $receiver = this.$outer.writer_0;
    if (value === 10) {
      $receiver.currentIndent_8be2vx$ = 0;
    } else {
      $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + 1 | 0;
    }
    $receiver.output_0.append_s8itvh$(value);
  };
  YamlEncoder$FlowSequenceEncoder.prototype.encodeValue_61zpoe$ = function (value) {
    this.justStarted_0 = false;
    var $receiver = this.$outer.writer_0;
    $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + value.length | 0;
    $receiver.output_0.append_gw00v9$(value);
  };
  YamlEncoder$FlowSequenceEncoder.prototype.encodeElement_j0tz0d$ = function (descriptor, index, value) {
    throw IllegalStateException_init("FlowSequenceEncoder.encodeElement shouldn't be called".toString());
  };
  YamlEncoder$FlowSequenceEncoder.prototype.encodeElement_iij8qq$ = function (descriptor, index, value) {
    throw IllegalStateException_init("FlowSequenceEncoder.encodeElement shouldn't be called".toString());
  };
  YamlEncoder$FlowSequenceEncoder.prototype.encodeSerializableElement0_r4qlx7$ = function (descriptor, index, serializer, value) {
    if (this.justStarted_0)
      this.justStarted_0 = false;
    else {
      var $receiver = this.$outer.writer_0;
      $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + ', '.length | 0;
      $receiver.output_0.append_gw00v9$(', ');
    }
    YamlEncoder$FlowEncoder.prototype.encodeSerializableElement0_r4qlx7$.call(this, descriptor, index, serializer, value);
  };
  YamlEncoder$FlowSequenceEncoder.prototype.encodeSerializableUnquotedStringImpl_iij8qq$ = function (descriptor, index, value) {
    if (this.justStarted_0)
      this.justStarted_0 = false;
    else {
      var $receiver = this.$outer.writer_0;
      $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + ', '.length | 0;
      $receiver.output_0.append_gw00v9$(', ');
    }
    this.encodeUnquotedString_61zpoe$(value);
  };
  YamlEncoder$FlowSequenceEncoder.prototype.writeValueHead_szpzho$ = function (descriptor, index) {
  };
  YamlEncoder$FlowSequenceEncoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FlowSequenceEncoder',
    interfaces: [YamlEncoder$FlowEncoder]
  };
  function YamlEncoder$EmptySequenceEncoder($outer, linebreakAfterFinish) {
    this.$outer = $outer;
    YamlEncoder$FlowEncoder.call(this, this.$outer, linebreakAfterFinish);
  }
  YamlEncoder$EmptySequenceEncoder.prototype.encodeValue_s8itvh$ = function (value) {
    throw IllegalStateException_init("EmptySequenceEncoder.encodeValue shouldn't be called".toString());
  };
  YamlEncoder$EmptySequenceEncoder.prototype.encodeValue_61zpoe$ = function (value) {
    throw IllegalStateException_init("EmptySequenceEncoder.encodeValue shouldn't be called".toString());
  };
  YamlEncoder$EmptySequenceEncoder.prototype.encodeElement_j0tz0d$ = function (descriptor, index, value) {
    throw IllegalStateException_init("EmptySequenceEncoder.encodeElement shouldn't be called".toString());
  };
  YamlEncoder$EmptySequenceEncoder.prototype.encodeElement_iij8qq$ = function (descriptor, index, value) {
    throw IllegalStateException_init("EmptySequenceEncoder.encodeElement shouldn't be called".toString());
  };
  YamlEncoder$EmptySequenceEncoder.prototype.endStructure0_24f42q$ = function (descriptor) {
    var $receiver = this.$outer.writer_0;
    $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + '[]'.length | 0;
    $receiver.output_0.append_gw00v9$('[]');
  };
  YamlEncoder$EmptySequenceEncoder.prototype.writeValueHead_szpzho$ = function (descriptor, index) {
    throw IllegalStateException_init("EmptySequenceEncoder.writeValueHead shouldn't be called".toString());
  };
  YamlEncoder$EmptySequenceEncoder.prototype.encodeSerializableUnquotedStringImpl_iij8qq$ = function (descriptor, index, value) {
    throw IllegalStateException_init("EmptySequenceEncoder.encodeSerializableUnquotedStringImpl shouldn't be called".toString());
  };
  YamlEncoder$EmptySequenceEncoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EmptySequenceEncoder',
    interfaces: [YamlEncoder$FlowEncoder]
  };
  function YamlEncoder$BlockSequenceEncoder($outer, parent, linebreakAfterFinish, increaseBackLevel) {
    this.$outer = $outer;
    YamlEncoder$BlockEncoder.call(this, this.$outer, linebreakAfterFinish);
    this.increaseBackLevel_0 = increaseBackLevel;
    if (Kotlin.isType(parent, YamlEncoder$BlockMapOrClassEncoder)) {
      var $receiver = this.$outer.writer_0;
      if (10 === 10) {
        $receiver.currentIndent_8be2vx$ = 0;
      } else {
        $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + 1 | 0;
      }
      $receiver.output_0.append_s8itvh$(10);
    }
    this.justStarted_0 = true;
  }
  YamlEncoder$BlockSequenceEncoder.prototype.encodeValue_s8itvh$ = function (value) {
    this.justStarted_0 = false;
    var $receiver = this.$outer.writer_0;
    if (value === 10) {
      $receiver.currentIndent_8be2vx$ = 0;
    } else {
      $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + 1 | 0;
    }
    $receiver.output_0.append_s8itvh$(value);
  };
  YamlEncoder$BlockSequenceEncoder.prototype.encodeValue_61zpoe$ = function (value) {
    this.justStarted_0 = false;
    var $receiver = this.$outer.writer_0;
    $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + value.length | 0;
    $receiver.output_0.append_gw00v9$(value);
  };
  YamlEncoder$BlockSequenceEncoder.prototype.encodeElement_j0tz0d$ = function (descriptor, index, value) {
    throw IllegalStateException_init("BlockSequenceEncoder.encodeElement shouldn't be called".toString());
  };
  YamlEncoder$BlockSequenceEncoder.prototype.encodeElement_iij8qq$ = function (descriptor, index, value) {
    throw IllegalStateException_init("BlockSequenceEncoder.encodeElement shouldn't be called".toString());
  };
  YamlEncoder$BlockSequenceEncoder.prototype.endStructure0_24f42q$ = function (descriptor) {
    if (this.increaseBackLevel_0) {
      this.$outer.writer_0.levelIncrease();
    }
  };
  YamlEncoder$BlockSequenceEncoder.prototype.encodeSerializableElement0_r4qlx7$ = function (descriptor, index, serializer, value) {
    if (this.justStarted_0) {
      this.justStarted_0 = false;
    } else {
      var $receiver = this.$outer.writer_0;
      if (10 === 10) {
        $receiver.currentIndent_8be2vx$ = 0;
      } else {
        $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + 1 | 0;
      }
      $receiver.output_0.append_s8itvh$(10);
    }
    writeIndentedSmart(this.$outer.writer_0, '- ');
    YamlEncoder$BlockEncoder.prototype.encodeSerializableElement0_r4qlx7$.call(this, descriptor, index, serializer, value);
  };
  YamlEncoder$BlockSequenceEncoder.prototype.encodeSerializableUnquotedStringImpl_iij8qq$ = function (descriptor, index, value) {
    if (this.justStarted_0) {
      this.justStarted_0 = false;
    } else {
      var $receiver = this.$outer.writer_0;
      if (10 === 10) {
        $receiver.currentIndent_8be2vx$ = 0;
      } else {
        $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + 1 | 0;
      }
      $receiver.output_0.append_s8itvh$(10);
    }
    writeIndentedSmart(this.$outer.writer_0, '- ');
    this.encodeUnquotedString_61zpoe$(value);
  };
  YamlEncoder$BlockSequenceEncoder.prototype.writeValueHead_szpzho$ = function (descriptor, index) {
  };
  YamlEncoder$BlockSequenceEncoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BlockSequenceEncoder',
    interfaces: [YamlEncoder$BlockEncoder]
  };
  function YamlEncoder$BlockMapOrClassEncoder($outer, parent) {
    this.$outer = $outer;
    YamlEncoder$BlockEncoder.call(this, this.$outer, false);
    this.parent_0 = parent;
    this.justStarted_0 = true;
    this.isKey_0 = true;
  }
  YamlEncoder$BlockMapOrClassEncoder.prototype.structuredKeyValue_0 = function (block) {
    var $receiver = this.isKey_0;
    this.isKey_0 = !$receiver;
    var isKey = $receiver;
    if (isKey) {
      if (this.justStarted_0) {
        if (Kotlin.isType(this.parent_0, YamlEncoder$BlockMapOrClassEncoder)) {
          var $receiver_0 = this.$outer.writer_0;
          if (10 === 10) {
            $receiver_0.currentIndent_8be2vx$ = 0;
          } else {
            $receiver_0.currentIndent_8be2vx$ = $receiver_0.currentIndent_8be2vx$ + 1 | 0;
          }
          $receiver_0.output_0.append_s8itvh$(10);
        }
        this.justStarted_0 = false;
      } else {
        var $receiver_1 = this.$outer.writer_0;
        if (10 === 10) {
          $receiver_1.currentIndent_8be2vx$ = 0;
        } else {
          $receiver_1.currentIndent_8be2vx$ = $receiver_1.currentIndent_8be2vx$ + 1 | 0;
        }
        $receiver_1.output_0.append_s8itvh$(10);
      }
      writeIndentSmart(this.$outer.writer_0);
      block(this.$outer.writer_0);
      var $receiver_2 = this.$outer.writer_0;
      $receiver_2.currentIndent_8be2vx$ = $receiver_2.currentIndent_8be2vx$ + ': '.length | 0;
      $receiver_2.output_0.append_gw00v9$(': ');
    } else {
      block(this.$outer.writer_0);
    }
  };
  YamlEncoder$BlockMapOrClassEncoder.prototype.encodeValue_s8itvh$ = function (value) {
    var $this = Debugging_getInstance();
    logCustom_h4ejuu$break: do {
      if (!$this.enabled_8be2vx$)
        break logCustom_h4ejuu$break;
      println($this.space_0($this.logIndent) + ('encodeValue, ' + String.fromCharCode(value)));
    }
     while (false);
    this.writelnIfJustStartedAndParentIsBlockMap_0();
    var $receiver = this.$outer.writer_0;
    if (value === 10) {
      $receiver.currentIndent_8be2vx$ = 0;
    } else {
      $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + 1 | 0;
    }
    $receiver.output_0.append_s8itvh$(value);
  };
  YamlEncoder$BlockMapOrClassEncoder.prototype.writelnIfJustStartedAndParentIsBlockMap_0 = function () {
    if (this.justStarted_0) {
      if (Kotlin.isType(this.parent_0, YamlEncoder$BlockMapOrClassEncoder)) {
        var $receiver = this.$outer.writer_0;
        if (10 === 10) {
          $receiver.currentIndent_8be2vx$ = 0;
        } else {
          $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + 1 | 0;
        }
        $receiver.output_0.append_s8itvh$(10);
      }
      this.justStarted_0 = false;
    }
  };
  YamlEncoder$BlockMapOrClassEncoder.prototype.encodeValue_61zpoe$ = function (value) {
    var $this = Debugging_getInstance();
    logCustom_h4ejuu$break: do {
      if (!$this.enabled_8be2vx$)
        break logCustom_h4ejuu$break;
      println($this.space_0($this.logIndent) + ('encodeValue, ' + value));
    }
     while (false);
    this.writelnIfJustStartedAndParentIsBlockMap_0();
    var $receiver = this.$outer.writer_0;
    $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + value.length | 0;
    $receiver.output_0.append_gw00v9$(value);
  };
  YamlEncoder$BlockMapOrClassEncoder.prototype.encodeSerializableElement0_r4qlx7$ = function (descriptor, index, serializer, value) {
    var $this = Debugging_getInstance();
    logCustom_h4ejuu$break: do {
      if (!$this.enabled_8be2vx$)
        break logCustom_h4ejuu$break;
      println($this.space_0($this.logIndent) + ('encodeSerializableElement0, elementName=' + descriptor.getElementName_za3lpa$(index)));
    }
     while (false);
    var $receiver = this.isKey_0;
    this.isKey_0 = !$receiver;
    var isKey = $receiver;
    if (isKey) {
      if (this.justStarted_0) {
        if (Kotlin.isType(this.parent_0, YamlEncoder$BlockMapOrClassEncoder)) {
          var $receiver_0 = this.$outer.writer_0;
          if (10 === 10) {
            $receiver_0.currentIndent_8be2vx$ = 0;
          } else {
            $receiver_0.currentIndent_8be2vx$ = $receiver_0.currentIndent_8be2vx$ + 1 | 0;
          }
          $receiver_0.output_0.append_s8itvh$(10);
        }
        this.justStarted_0 = false;
      } else {
        var $receiver_1 = this.$outer.writer_0;
        if (10 === 10) {
          $receiver_1.currentIndent_8be2vx$ = 0;
        } else {
          $receiver_1.currentIndent_8be2vx$ = $receiver_1.currentIndent_8be2vx$ + 1 | 0;
        }
        $receiver_1.output_0.append_s8itvh$(10);
      }
      writeIndentSmart(this.$outer.writer_0);
      this.$outer;
      YamlEncoder$BlockEncoder.prototype.encodeSerializableElement0_r4qlx7$.call(this, descriptor, index, serializer, value);
      var $receiver_2 = this.$outer.writer_0;
      $receiver_2.currentIndent_8be2vx$ = $receiver_2.currentIndent_8be2vx$ + ': '.length | 0;
      $receiver_2.output_0.append_gw00v9$(': ');
    } else {
      this.$outer;
      YamlEncoder$BlockEncoder.prototype.encodeSerializableElement0_r4qlx7$.call(this, descriptor, index, serializer, value);
    }
  };
  YamlEncoder$BlockMapOrClassEncoder.prototype.encodeSerializableUnquotedStringImpl_iij8qq$ = function (descriptor, index, value) {
    var $this = Debugging_getInstance();
    logCustom_h4ejuu$break: do {
      if (!$this.enabled_8be2vx$)
        break logCustom_h4ejuu$break;
      println($this.space_0($this.logIndent) + ('encodeSerializableUnquotedStringImpl, elementName=' + descriptor.getElementName_za3lpa$(index)));
    }
     while (false);
    var $receiver = this.isKey_0;
    this.isKey_0 = !$receiver;
    var isKey = $receiver;
    if (isKey) {
      if (this.justStarted_0) {
        if (Kotlin.isType(this.parent_0, YamlEncoder$BlockMapOrClassEncoder)) {
          var $receiver_0 = this.$outer.writer_0;
          if (10 === 10) {
            $receiver_0.currentIndent_8be2vx$ = 0;
          } else {
            $receiver_0.currentIndent_8be2vx$ = $receiver_0.currentIndent_8be2vx$ + 1 | 0;
          }
          $receiver_0.output_0.append_s8itvh$(10);
        }
        this.justStarted_0 = false;
      } else {
        var $receiver_1 = this.$outer.writer_0;
        if (10 === 10) {
          $receiver_1.currentIndent_8be2vx$ = 0;
        } else {
          $receiver_1.currentIndent_8be2vx$ = $receiver_1.currentIndent_8be2vx$ + 1 | 0;
        }
        $receiver_1.output_0.append_s8itvh$(10);
      }
      writeIndentSmart(this.$outer.writer_0);
      this.$outer;
      this.encodeUnquotedString_61zpoe$(value);
      var $receiver_2 = this.$outer.writer_0;
      $receiver_2.currentIndent_8be2vx$ = $receiver_2.currentIndent_8be2vx$ + ': '.length | 0;
      $receiver_2.output_0.append_gw00v9$(': ');
    } else {
      this.$outer;
      this.encodeUnquotedString_61zpoe$(value);
    }
  };
  YamlEncoder$BlockMapOrClassEncoder.prototype.getComments_0 = function ($receiver, index) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var $receiver_0 = $receiver.getElementAnnotations_za3lpa$(index);
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_3;
      tmp$_3 = $receiver_0.iterator();
      while (tmp$_3.hasNext()) {
        var element = tmp$_3.next();
        if (Kotlin.isType(element, Comment)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return (tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = firstOrNull$result) == null || Kotlin.isType(tmp$, Comment) ? tmp$ : throwCCE()) != null ? tmp$_0.lines : null) != null ? trimIndent(tmp$_1) : null) != null ? lineSequence(tmp$_2) : null;
  };
  YamlEncoder$BlockMapOrClassEncoder.prototype.writeComments_0 = function ($receiver, descriptor, index) {
    var tmp$;
    if ((tmp$ = this.getComments_0(descriptor, index)) != null) {
      var tmp$_0;
      tmp$_0 = tmp$.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        writeIndentedSmart($receiver, '# ');
        var tmp$_1;
        var chars = trim(Kotlin.isCharSequence(tmp$_1 = element) ? tmp$_1 : throwCCE()).toString();
        $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + chars.length | 0;
        $receiver.output_0.append_gw00v9$(chars);
        if (10 === 10) {
          $receiver.currentIndent_8be2vx$ = 0;
        } else {
          $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + 1 | 0;
        }
        $receiver.output_0.append_s8itvh$(10);
      }
    }
  };
  YamlEncoder$BlockMapOrClassEncoder.prototype.encodeElement_j0tz0d$ = function (descriptor, index, value) {
    var $this = Debugging_getInstance();
    logCustom_h4ejuu$break: do {
      if (!$this.enabled_8be2vx$)
        break logCustom_h4ejuu$break;
      println($this.space_0($this.logIndent) + ('encodeElement, elementName=' + descriptor.getElementName_za3lpa$(index)));
    }
     while (false);
    this.$outer;
    var $receiver = this.isKey_0;
    this.isKey_0 = !$receiver;
    var isKey = $receiver;
    if (isKey) {
      if (this.justStarted_0) {
        if (Kotlin.isType(this.parent_0, YamlEncoder$BlockMapOrClassEncoder)) {
          var $receiver_0 = this.$outer.writer_0;
          if (10 === 10) {
            $receiver_0.currentIndent_8be2vx$ = 0;
          } else {
            $receiver_0.currentIndent_8be2vx$ = $receiver_0.currentIndent_8be2vx$ + 1 | 0;
          }
          $receiver_0.output_0.append_s8itvh$(10);
        }
        this.justStarted_0 = false;
      } else {
        var $receiver_1 = this.$outer.writer_0;
        if (10 === 10) {
          $receiver_1.currentIndent_8be2vx$ = 0;
        } else {
          $receiver_1.currentIndent_8be2vx$ = $receiver_1.currentIndent_8be2vx$ + 1 | 0;
        }
        $receiver_1.output_0.append_s8itvh$(10);
      }
      writeIndentSmart(this.$outer.writer_0);
      var this$YamlEncoder = this.$outer;
      this.$outer;
      var $receiver_2 = this$YamlEncoder.writer_0;
      var chars = descriptor.getElementName_za3lpa$(index);
      $receiver_2.currentIndent_8be2vx$ = $receiver_2.currentIndent_8be2vx$ + chars.length | 0;
      $receiver_2.output_0.append_gw00v9$(chars);
      var $receiver_3 = this.$outer.writer_0;
      $receiver_3.currentIndent_8be2vx$ = $receiver_3.currentIndent_8be2vx$ + ': '.length | 0;
      $receiver_3.output_0.append_gw00v9$(': ');
    } else {
      var this$YamlEncoder_0 = this.$outer;
      this.$outer;
      var $receiver_4 = this$YamlEncoder_0.writer_0;
      var chars_0 = descriptor.getElementName_za3lpa$(index);
      $receiver_4.currentIndent_8be2vx$ = $receiver_4.currentIndent_8be2vx$ + chars_0.length | 0;
      $receiver_4.output_0.append_gw00v9$(chars_0);
    }
    this.$outer;
    var $receiver_5 = this.isKey_0;
    this.isKey_0 = !$receiver_5;
    var isKey_0 = $receiver_5;
    if (isKey_0) {
      if (this.justStarted_0) {
        if (Kotlin.isType(this.parent_0, YamlEncoder$BlockMapOrClassEncoder)) {
          var $receiver_6 = this.$outer.writer_0;
          if (10 === 10) {
            $receiver_6.currentIndent_8be2vx$ = 0;
          } else {
            $receiver_6.currentIndent_8be2vx$ = $receiver_6.currentIndent_8be2vx$ + 1 | 0;
          }
          $receiver_6.output_0.append_s8itvh$(10);
        }
        this.justStarted_0 = false;
      } else {
        var $receiver_7 = this.$outer.writer_0;
        if (10 === 10) {
          $receiver_7.currentIndent_8be2vx$ = 0;
        } else {
          $receiver_7.currentIndent_8be2vx$ = $receiver_7.currentIndent_8be2vx$ + 1 | 0;
        }
        $receiver_7.output_0.append_s8itvh$(10);
      }
      writeIndentSmart(this.$outer.writer_0);
      var this$YamlEncoder_1 = this.$outer;
      this.$outer;
      var $receiver_8 = this$YamlEncoder_1.writer_0;
      if (value === 10) {
        $receiver_8.currentIndent_8be2vx$ = 0;
      } else {
        $receiver_8.currentIndent_8be2vx$ = $receiver_8.currentIndent_8be2vx$ + 1 | 0;
      }
      $receiver_8.output_0.append_s8itvh$(value);
      if (10 === 10) {
        $receiver_8.currentIndent_8be2vx$ = 0;
      } else {
        $receiver_8.currentIndent_8be2vx$ = $receiver_8.currentIndent_8be2vx$ + 1 | 0;
      }
      $receiver_8.output_0.append_s8itvh$(10);
      var $receiver_9 = this.$outer.writer_0;
      $receiver_9.currentIndent_8be2vx$ = $receiver_9.currentIndent_8be2vx$ + ': '.length | 0;
      $receiver_9.output_0.append_gw00v9$(': ');
    } else {
      var this$YamlEncoder_2 = this.$outer;
      this.$outer;
      var $receiver_10 = this$YamlEncoder_2.writer_0;
      if (value === 10) {
        $receiver_10.currentIndent_8be2vx$ = 0;
      } else {
        $receiver_10.currentIndent_8be2vx$ = $receiver_10.currentIndent_8be2vx$ + 1 | 0;
      }
      $receiver_10.output_0.append_s8itvh$(value);
      if (10 === 10) {
        $receiver_10.currentIndent_8be2vx$ = 0;
      } else {
        $receiver_10.currentIndent_8be2vx$ = $receiver_10.currentIndent_8be2vx$ + 1 | 0;
      }
      $receiver_10.output_0.append_s8itvh$(10);
    }
  };
  YamlEncoder$BlockMapOrClassEncoder.prototype.encodeElement_iij8qq$ = function (descriptor, index, value) {
    var $this = Debugging_getInstance();
    logCustom_h4ejuu$break: do {
      if (!$this.enabled_8be2vx$)
        break logCustom_h4ejuu$break;
      println($this.space_0($this.logIndent) + ('encodeElement, elementName=' + descriptor.getElementName_za3lpa$(index)));
    }
     while (false);
    this.writelnIfJustStartedAndParentIsBlockMap_0();
    this.writeComments_0(this.$outer.writer_0, descriptor, index);
    writeIndentedSmart(this.$outer.writer_0, descriptor.getElementName_za3lpa$(index));
    var $receiver = this.$outer.writer_0;
    $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + ': '.length | 0;
    $receiver.output_0.append_gw00v9$(': ');
    var $receiver_0 = this.$outer.writer_0;
    $receiver_0.currentIndent_8be2vx$ = $receiver_0.currentIndent_8be2vx$ + value.length | 0;
    $receiver_0.output_0.append_gw00v9$(value);
    if (10 === 10) {
      $receiver_0.currentIndent_8be2vx$ = 0;
    } else {
      $receiver_0.currentIndent_8be2vx$ = $receiver_0.currentIndent_8be2vx$ + 1 | 0;
    }
    $receiver_0.output_0.append_s8itvh$(10);
  };
  YamlEncoder$BlockMapOrClassEncoder.prototype.endStructure0_24f42q$ = function (descriptor) {
    var $this = Debugging_getInstance();
    logCustom_h4ejuu$break: do {
      if (!$this.enabled_8be2vx$)
        break logCustom_h4ejuu$break;
      println($this.space_0($this.logIndent) + 'endStructure0');
    }
     while (false);
    if (this.justStarted_0) {
      var $receiver = this.$outer.writer_0;
      $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + '{}'.length | 0;
      $receiver.output_0.append_gw00v9$('{}');
      if (10 === 10) {
        $receiver.currentIndent_8be2vx$ = 0;
      } else {
        $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + 1 | 0;
      }
      $receiver.output_0.append_s8itvh$(10);
    }
  };
  YamlEncoder$BlockMapOrClassEncoder.prototype.writeValueHead_szpzho$ = function (descriptor, index) {
    var $this = Debugging_getInstance();
    logCustom_h4ejuu$break: do {
      if (!$this.enabled_8be2vx$)
        break logCustom_h4ejuu$break;
      println($this.space_0($this.logIndent) + ('writeValueHead, elementName=' + descriptor.getElementName_za3lpa$(index)));
    }
     while (false);
    if (equals(descriptor.kind, StructureKind.MAP))
      return;
    if (equals(descriptor.kind, StructureKind.LIST))
      return;
    this.$outer;
    var $receiver = this.isKey_0;
    this.isKey_0 = !$receiver;
    var isKey = $receiver;
    if (isKey) {
      if (this.justStarted_0) {
        if (Kotlin.isType(this.parent_0, YamlEncoder$BlockMapOrClassEncoder)) {
          var $receiver_0 = this.$outer.writer_0;
          if (10 === 10) {
            $receiver_0.currentIndent_8be2vx$ = 0;
          } else {
            $receiver_0.currentIndent_8be2vx$ = $receiver_0.currentIndent_8be2vx$ + 1 | 0;
          }
          $receiver_0.output_0.append_s8itvh$(10);
        }
        this.justStarted_0 = false;
      } else {
        var $receiver_1 = this.$outer.writer_0;
        if (10 === 10) {
          $receiver_1.currentIndent_8be2vx$ = 0;
        } else {
          $receiver_1.currentIndent_8be2vx$ = $receiver_1.currentIndent_8be2vx$ + 1 | 0;
        }
        $receiver_1.output_0.append_s8itvh$(10);
      }
      writeIndentSmart(this.$outer.writer_0);
      var this$YamlEncoder = this.$outer;
      this.$outer;
      this.writeComments_0(this$YamlEncoder.writer_0, descriptor, index);
      writeIndentedSmart(this$YamlEncoder.writer_0, descriptor.getElementName_za3lpa$(index));
      var $receiver_2 = this.$outer.writer_0;
      $receiver_2.currentIndent_8be2vx$ = $receiver_2.currentIndent_8be2vx$ + ': '.length | 0;
      $receiver_2.output_0.append_gw00v9$(': ');
    } else {
      var this$YamlEncoder_0 = this.$outer;
      this.$outer;
      this.writeComments_0(this$YamlEncoder_0.writer_0, descriptor, index);
      writeIndentedSmart(this$YamlEncoder_0.writer_0, descriptor.getElementName_za3lpa$(index));
    }
  };
  YamlEncoder$BlockMapOrClassEncoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BlockMapOrClassEncoder',
    interfaces: [YamlEncoder$BlockEncoder]
  };
  YamlEncoder.prototype.encodeBoolean_6taknv$ = function (value) {
    var $receiver = this.writer_0;
    var chars = value ? 'true' : 'false';
    $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + chars.length | 0;
    $receiver.output_0.append_gw00v9$(chars);
  };
  YamlEncoder.prototype.encodeByte_s8j3t7$ = function (value) {
    var $receiver = this.writer_0;
    var chars = value.toString();
    $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + chars.length | 0;
    $receiver.output_0.append_gw00v9$(chars);
  };
  YamlEncoder.prototype.encodeChar_s8itvh$ = function (value) {
    var $receiver = this.writer_0;
    if (value === 10) {
      $receiver.currentIndent_8be2vx$ = 0;
    } else {
      $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + 1 | 0;
    }
    $receiver.output_0.append_s8itvh$(value);
  };
  YamlEncoder.prototype.encodeDouble_14dthe$ = function (value) {
    var $receiver = this.writer_0;
    var chars = value.toString();
    $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + chars.length | 0;
    $receiver.output_0.append_gw00v9$(chars);
  };
  YamlEncoder.prototype.encodeEnum_szpzho$ = function (enumDescriptor, index) {
    var $receiver = this.writer_0;
    var chars = enumDescriptor.getElementName_za3lpa$(index);
    $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + chars.length | 0;
    $receiver.output_0.append_gw00v9$(chars);
  };
  YamlEncoder.prototype.encodeFloat_mx4ult$ = function (value) {
    var $receiver = this.writer_0;
    var chars = value.toString();
    $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + chars.length | 0;
    $receiver.output_0.append_gw00v9$(chars);
  };
  YamlEncoder.prototype.encodeInline_24f42q$ = function (inlineDescriptor) {
    return new InlineEncoder(this.writer_0, this, this.serializersModule);
  };
  YamlEncoder.prototype.encodeInt_za3lpa$ = function (value) {
    var $receiver = this.writer_0;
    var chars = value.toString();
    $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + chars.length | 0;
    $receiver.output_0.append_gw00v9$(chars);
  };
  YamlEncoder.prototype.encodeLong_s8cxhz$ = function (value) {
    var $receiver = this.writer_0;
    var chars = value.toString();
    $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + chars.length | 0;
    $receiver.output_0.append_gw00v9$(chars);
  };
  YamlEncoder.prototype.encodeShort_mq22fl$ = function (value) {
    var $receiver = this.writer_0;
    var chars = value.toString();
    $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + chars.length | 0;
    $receiver.output_0.append_gw00v9$(chars);
  };
  YamlEncoder.prototype.encodeString_61zpoe$ = function (value) {
    var $receiver = this.writer_0;
    var chars = toEscapedString(value, this.writer_0.escapeBuf_8be2vx$, this.configuration_0.stringSerialization);
    $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + chars.length | 0;
    $receiver.output_0.append_gw00v9$(chars);
  };
  YamlEncoder.prototype.encodeNull = function () {
    var $receiver = this.writer_0;
    var chars = this.configuration_0.nullSerialization.value;
    $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + chars.length | 0;
    $receiver.output_0.append_gw00v9$(chars);
  };
  YamlEncoder.prototype.encodeSerializableValue_tf03ej$ = function (serializer, value) {
    serializer.serialize_55azsf$(this, value);
  };
  function YamlEncoder$FlowEncoder($outer, linebreakAfterFinish) {
    this.$outer = $outer;
    YamlEncoder$AbstractEncoder.call(this, this.$outer, linebreakAfterFinish);
  }
  YamlEncoder$FlowEncoder.prototype.beginStructure_24f42q$ = function (descriptor) {
    var tmp$, tmp$_0;
    this.$outer.writer_0.levelIncrease();
    tmp$ = descriptor.kind;
    if (equals(tmp$, StructureKind.CLASS))
      tmp$_0 = new YamlEncoder$FlowMapOrClassEncoder(this.$outer, false);
    else if (equals(tmp$, StructureKind.MAP))
      tmp$_0 = new YamlEncoder$FlowMapOrClassEncoder(this.$outer, false);
    else if (equals(tmp$, StructureKind.LIST))
      tmp$_0 = new YamlEncoder$FlowSequenceEncoder(this.$outer, false);
    else {
      throw IllegalStateException_init(('unsupported SerialKind: ' + descriptor.kind).toString());
    }
    return tmp$_0;
  };
  YamlEncoder$FlowEncoder.prototype.writeValueTail_szpzho$ = function (descriptor, index) {
    return;
  };
  YamlEncoder$FlowEncoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FlowEncoder',
    interfaces: [YamlEncoder$AbstractEncoder]
  };
  function YamlEncoder$BlockEncoder($outer, linebreakAfterFinish) {
    this.$outer = $outer;
    YamlEncoder$AbstractEncoder.call(this, this.$outer, linebreakAfterFinish);
  }
  YamlEncoder$BlockEncoder.prototype.writeValueTail_szpzho$ = function (descriptor, index) {
  };
  YamlEncoder$BlockEncoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BlockEncoder',
    interfaces: [YamlEncoder$AbstractEncoder]
  };
  function YamlEncoder$AbstractEncoder($outer, linebreakAfterFinish) {
    this.$outer = $outer;
    this.linebreakAfterFinish_0 = linebreakAfterFinish;
  }
  YamlEncoder$AbstractEncoder.prototype.endStructure_24f42q$ = function (descriptor) {
    this.$outer.writer_0.levelDecrease();
    this.endStructure0_24f42q$(descriptor);
    if (this.linebreakAfterFinish_0) {
      var $receiver = this.$outer.writer_0;
      if (10 === 10) {
        $receiver.currentIndent_8be2vx$ = 0;
      } else {
        $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + 1 | 0;
      }
      $receiver.output_0.append_s8itvh$(10);
    }
  };
  YamlEncoder$AbstractEncoder.prototype.encodeSerializableElement0_r4qlx7$ = function (descriptor, index, serializer, value) {
    serializer.serialize_55azsf$(this, value);
  };
  YamlEncoder$AbstractEncoder.prototype.encodeSerializableElement_r4qlx7$ = function (descriptor, index, serializer, value) {
    this.writeValueHead_szpzho$(descriptor, index);
    this.encodeSerializableElement0_r4qlx7$(descriptor, index, serializer, value);
    this.writeValueTail_szpzho$(descriptor, index);
    return;
  };
  YamlEncoder$AbstractEncoder.prototype.encodeSerializableUnquotedStringElement_iij8qq$ = function (descriptor, index, value) {
    this.writeValueHead_szpzho$(descriptor, index);
    this.encodeSerializableUnquotedStringImpl_iij8qq$(descriptor, index, value);
    this.writeValueTail_szpzho$(descriptor, index);
    return;
  };
  YamlEncoder$AbstractEncoder.prototype.beginCollection_szpzho$ = function (descriptor, collectionSize) {
    if (collectionSize === 0) {
      if (equals(descriptor.kind, StructureKind.LIST)) {
        this.$outer.writer_0.levelIncrease();
        return new YamlEncoder$EmptySequenceEncoder(this.$outer, this.linebreakAfterFinish_0);
      }
    }
    return Encoder.prototype.beginCollection_szpzho$.call(this, descriptor, collectionSize);
  };
  YamlEncoder$AbstractEncoder.prototype.beginStructure_24f42q$ = function (descriptor) {
    return this.$outer.beginStructureImpl_0(this, descriptor);
  };
  YamlEncoder$AbstractEncoder.prototype.encodeCharElement_j0tz0d$ = function (descriptor, index, value) {
    this.encodeSerializableElement_r4qlx7$(descriptor, index, serializer_5(kotlin_js_internal_CharCompanionObject), toBoxedChar(value));
  };
  YamlEncoder$AbstractEncoder.prototype.encodeBooleanElement_qh7jdn$ = function (descriptor, index, value) {
    this.encodeSerializableElement_r4qlx7$(descriptor, index, serializer_7(kotlin_js_internal_BooleanCompanionObject), value);
  };
  YamlEncoder$AbstractEncoder.prototype.encodeByteElement_j0u8y3$ = function (descriptor, index, value) {
    this.encodeSerializableElement_r4qlx7$(descriptor, index, serializer_3(kotlin_js_internal_ByteCompanionObject), value);
  };
  YamlEncoder$AbstractEncoder.prototype.encodeDoubleElement_powrwi$ = function (descriptor, index, value) {
    this.encodeSerializableElement_r4qlx7$(descriptor, index, serializer_1(kotlin_js_internal_DoubleCompanionObject), value);
  };
  YamlEncoder$AbstractEncoder.prototype.encodeFloatElement_lf6hpt$ = function (descriptor, index, value) {
    this.encodeSerializableElement_r4qlx7$(descriptor, index, serializer_2(kotlin_js_internal_FloatCompanionObject), value);
  };
  YamlEncoder$AbstractEncoder.prototype.encodeIntElement_ptg7oe$ = function (descriptor, index, value) {
    this.encodeSerializableElement_r4qlx7$(descriptor, index, serializer_0(kotlin_js_internal_IntCompanionObject), value);
  };
  YamlEncoder$AbstractEncoder.prototype.encodeLongElement_j0o2mv$ = function (descriptor, index, value) {
    this.encodeSerializableElement_r4qlx7$(descriptor, index, serializer_6(kotlin_js_internal_LongCompanionObject), value);
  };
  YamlEncoder$AbstractEncoder.prototype.encodeShortElement_l83pjl$ = function (descriptor, index, value) {
    this.encodeSerializableElement_r4qlx7$(descriptor, index, serializer_4(kotlin_js_internal_ShortCompanionObject), value);
  };
  YamlEncoder$AbstractEncoder.prototype.encodeStringElement_iij8qq$ = function (descriptor, index, value) {
    this.encodeSerializableElement_r4qlx7$(descriptor, index, serializer(kotlin_js_internal_StringCompanionObject), value);
  };
  function YamlEncoder$AbstractEncoder$encodeInlineElement$ObjectLiteral(this$AbstractEncoder, closure$descriptor, closure$index) {
    this.this$AbstractEncoder = this$AbstractEncoder;
    this.closure$descriptor = closure$descriptor;
    this.closure$index = closure$index;
    AbstractEncoder.call(this);
  }
  Object.defineProperty(YamlEncoder$AbstractEncoder$encodeInlineElement$ObjectLiteral.prototype, 'serializersModule', {
    configurable: true,
    get: function () {
      return this.this$AbstractEncoder.serializersModule;
    }
  });
  YamlEncoder$AbstractEncoder$encodeInlineElement$ObjectLiteral.prototype.encodeByte_s8j3t7$ = function (value) {
    this.this$AbstractEncoder.encodeSerializableUnquotedStringElement_iij8qq$(this.closure$descriptor, this.closure$index, (new UByte_init(value)).toString());
  };
  YamlEncoder$AbstractEncoder$encodeInlineElement$ObjectLiteral.prototype.encodeShort_mq22fl$ = function (value) {
    this.this$AbstractEncoder.encodeSerializableUnquotedStringElement_iij8qq$(this.closure$descriptor, this.closure$index, (new UShort_init(value)).toString());
  };
  YamlEncoder$AbstractEncoder$encodeInlineElement$ObjectLiteral.prototype.encodeInt_za3lpa$ = function (value) {
    this.this$AbstractEncoder.encodeSerializableUnquotedStringElement_iij8qq$(this.closure$descriptor, this.closure$index, (new UInt_init(value)).toString());
  };
  YamlEncoder$AbstractEncoder$encodeInlineElement$ObjectLiteral.prototype.encodeLong_s8cxhz$ = function (value) {
    this.this$AbstractEncoder.encodeSerializableUnquotedStringElement_iij8qq$(this.closure$descriptor, this.closure$index, (new ULong_init(value)).toString());
  };
  YamlEncoder$AbstractEncoder$encodeInlineElement$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [AbstractEncoder]
  };
  YamlEncoder$AbstractEncoder.prototype.encodeInlineElement_szpzho$ = function (descriptor, index) {
    return new YamlEncoder$AbstractEncoder$encodeInlineElement$ObjectLiteral(this, descriptor, index);
  };
  YamlEncoder$AbstractEncoder.prototype.encodeNullableSerializableElement_qw92s8$ = function (descriptor, index, serializer, value) {
    if (value == null) {
      this.encodeStringElement_iij8qq$(descriptor, index, this.$outer.configuration_0.nullSerialization.value);
    } else
      this.encodeSerializableElement_r4qlx7$(descriptor, index, serializer, value);
  };
  YamlEncoder$AbstractEncoder.prototype.encodeBoolean_6taknv$ = function (value) {
    this.encodeValue_61zpoe$(value ? 'true' : 'false');
  };
  YamlEncoder$AbstractEncoder.prototype.encodeByte_s8j3t7$ = function (value) {
    this.encodeValue_61zpoe$(value.toString());
  };
  YamlEncoder$AbstractEncoder.prototype.encodeChar_s8itvh$ = function (value) {
    this.encodeValue_s8itvh$(value);
  };
  YamlEncoder$AbstractEncoder.prototype.encodeDouble_14dthe$ = function (value) {
    this.encodeValue_61zpoe$(value.toString());
  };
  YamlEncoder$AbstractEncoder.prototype.encodeEnum_szpzho$ = function (enumDescriptor, index) {
    this.encodeValue_61zpoe$(enumDescriptor.getElementName_za3lpa$(index));
  };
  YamlEncoder$AbstractEncoder.prototype.encodeFloat_mx4ult$ = function (value) {
    this.encodeValue_61zpoe$(value.toString());
  };
  YamlEncoder$AbstractEncoder.prototype.encodeInt_za3lpa$ = function (value) {
    this.encodeValue_61zpoe$(value.toString());
  };
  YamlEncoder$AbstractEncoder.prototype.encodeLong_s8cxhz$ = function (value) {
    this.encodeValue_61zpoe$(value.toString());
  };
  YamlEncoder$AbstractEncoder.prototype.encodeNull = function () {
    this.encodeValue_61zpoe$(this.$outer.configuration_0.nullSerialization.value);
  };
  YamlEncoder$AbstractEncoder.prototype.encodeShort_mq22fl$ = function (value) {
    this.encodeValue_61zpoe$(value.toString());
  };
  YamlEncoder$AbstractEncoder.prototype.encodeString_61zpoe$ = function (value) {
    this.encodeValue_61zpoe$(toEscapedString(value, this.$outer.writer_0.escapeBuf_8be2vx$, this.$outer.configuration_0.stringSerialization));
  };
  YamlEncoder$AbstractEncoder.prototype.encodeUnquotedString_61zpoe$ = function (value) {
    this.encodeValue_61zpoe$(toEscapedString(value, this.$outer.writer_0.escapeBuf_8be2vx$, YamlBuilder$StringSerialization$NONE_getInstance()));
  };
  YamlEncoder$AbstractEncoder.prototype.encodeInline_24f42q$ = function (inlineDescriptor) {
    return new InlineEncoder(this.$outer.writer_0, this, this.serializersModule);
  };
  YamlEncoder$AbstractEncoder.prototype.shouldEncodeElementDefault_szpzho$ = function (descriptor, index) {
    return this.$outer.configuration_0.encodeDefaultValues;
  };
  Object.defineProperty(YamlEncoder$AbstractEncoder.prototype, 'serializersModule', {
    configurable: true,
    get: function () {
      return this.$outer.serializersModule;
    }
  });
  YamlEncoder$AbstractEncoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractEncoder',
    interfaces: [Encoder, CompositeEncoder]
  };
  YamlEncoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'YamlEncoder',
    interfaces: [Encoder]
  };
  var INDENT_STRING;
  function YamlWriter(output) {
    this.output_0 = output;
    this.level_8be2vx$ = -1;
    this.currentIndent_8be2vx$ = 0;
    this.escapeBuf_8be2vx$ = new StringBufHolder();
  }
  YamlWriter.prototype.levelIncrease = function () {
    this.level_8be2vx$ = this.level_8be2vx$ + 1 | 0;
  };
  YamlWriter.prototype.levelDecrease = function () {
    this.level_8be2vx$ = this.level_8be2vx$ - 1 | 0;
  };
  YamlWriter.prototype.append_s8itvh$ = defineInlineFunction('yamlkt.net.mamoe.yamlkt.internal.YamlWriter.append_s8itvh$', function (char) {
    if (char === 10) {
      this.currentIndent_8be2vx$ = 0;
    } else {
      this.currentIndent_8be2vx$ = this.currentIndent_8be2vx$ + 1 | 0;
    }
    this.output_0.append_s8itvh$(char);
  });
  YamlWriter.prototype.append_61zpoe$ = defineInlineFunction('yamlkt.net.mamoe.yamlkt.internal.YamlWriter.append_61zpoe$', function (char) {
    this.currentIndent_8be2vx$ = this.currentIndent_8be2vx$ + char.length | 0;
    this.output_0.append_gw00v9$(char);
  });
  YamlWriter.prototype.unaryPlus_pdl1vz$ = defineInlineFunction('yamlkt.net.mamoe.yamlkt.internal.YamlWriter.unaryPlus_pdl1vz$', function ($receiver) {
    this.currentIndent_8be2vx$ = this.currentIndent_8be2vx$ + $receiver.length | 0;
    this.output_0.append_gw00v9$($receiver);
  });
  YamlWriter.prototype.unaryPlus_myv2d0$ = defineInlineFunction('yamlkt.net.mamoe.yamlkt.internal.YamlWriter.unaryPlus_myv2d0$', function ($receiver) {
    if ($receiver === 10) {
      this.currentIndent_8be2vx$ = 0;
    } else {
      this.currentIndent_8be2vx$ = this.currentIndent_8be2vx$ + 1 | 0;
    }
    this.output_0.append_s8itvh$($receiver);
  });
  YamlWriter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'YamlWriter',
    interfaces: []
  };
  var write = defineInlineFunction('yamlkt.net.mamoe.yamlkt.internal.write_k0d9zm$', function ($receiver, char) {
    if (char === 10) {
      $receiver.currentIndent_8be2vx$ = 0;
    } else {
      $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + 1 | 0;
    }
    $receiver.output_0.append_s8itvh$(char);
  });
  var writeln = defineInlineFunction('yamlkt.net.mamoe.yamlkt.internal.writeln_k0d9zm$', function ($receiver, char) {
    if (char === 10) {
      $receiver.currentIndent_8be2vx$ = 0;
    } else {
      $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + 1 | 0;
    }
    $receiver.output_0.append_s8itvh$(char);
    if (10 === 10) {
      $receiver.currentIndent_8be2vx$ = 0;
    } else {
      $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + 1 | 0;
    }
    $receiver.output_0.append_s8itvh$(10);
  });
  var writeln_0 = defineInlineFunction('yamlkt.net.mamoe.yamlkt.internal.writeln_k67tv9$', function ($receiver) {
    if (10 === 10) {
      $receiver.currentIndent_8be2vx$ = 0;
    } else {
      $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + 1 | 0;
    }
    $receiver.output_0.append_s8itvh$(10);
  });
  var write_0 = defineInlineFunction('yamlkt.net.mamoe.yamlkt.internal.write_rapfxl$', function ($receiver, chars) {
    $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + chars.length | 0;
    $receiver.output_0.append_gw00v9$(chars);
  });
  var writeLine = defineInlineFunction('yamlkt.net.mamoe.yamlkt.internal.writeLine_10lxdn$', function ($receiver, line) {
    line($receiver);
    if (10 === 10) {
      $receiver.currentIndent_8be2vx$ = 0;
    } else {
      $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + 1 | 0;
    }
    $receiver.output_0.append_s8itvh$(10);
  });
  var writeLineIndented = defineInlineFunction('yamlkt.net.mamoe.yamlkt.internal.writeLineIndented_10lxdn$', wrapFunction(function () {
    var internal = _.net.mamoe.yamlkt.internal;
    return function ($receiver, line) {
      var times = $receiver.level_8be2vx$;
      for (var index = 0; index < times; index++) {
        var chars = internal.INDENT_STRING_8be2vx$;
        $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + chars.length | 0;
        $receiver.output_0.append_gw00v9$(chars);
      }
      line($receiver);
      if (10 === 10) {
        $receiver.currentIndent_8be2vx$ = 0;
      } else {
        $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + 1 | 0;
      }
      $receiver.output_0.append_s8itvh$(10);
    };
  }));
  var writeln_1 = defineInlineFunction('yamlkt.net.mamoe.yamlkt.internal.writeln_rapfxl$', function ($receiver, chars) {
    $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + chars.length | 0;
    $receiver.output_0.append_gw00v9$(chars);
    if (10 === 10) {
      $receiver.currentIndent_8be2vx$ = 0;
    } else {
      $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + 1 | 0;
    }
    $receiver.output_0.append_s8itvh$(10);
  });
  var writelnIndented = defineInlineFunction('yamlkt.net.mamoe.yamlkt.internal.writelnIndented_rapfxl$', wrapFunction(function () {
    var internal = _.net.mamoe.yamlkt.internal;
    return function ($receiver, chars) {
      var times = $receiver.level_8be2vx$;
      for (var index = 0; index < times; index++) {
        var chars_0 = internal.INDENT_STRING_8be2vx$;
        $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + chars_0.length | 0;
        $receiver.output_0.append_gw00v9$(chars_0);
      }
      $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + chars.length | 0;
      $receiver.output_0.append_gw00v9$(chars);
      if (10 === 10) {
        $receiver.currentIndent_8be2vx$ = 0;
      } else {
        $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + 1 | 0;
      }
      $receiver.output_0.append_s8itvh$(10);
    };
  }));
  var writeIndented = defineInlineFunction('yamlkt.net.mamoe.yamlkt.internal.writeIndented_rapfxl$', wrapFunction(function () {
    var internal = _.net.mamoe.yamlkt.internal;
    return function ($receiver, chars) {
      var times = $receiver.level_8be2vx$;
      for (var index = 0; index < times; index++) {
        var chars_0 = internal.INDENT_STRING_8be2vx$;
        $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + chars_0.length | 0;
        $receiver.output_0.append_gw00v9$(chars_0);
      }
      $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + chars.length | 0;
      $receiver.output_0.append_gw00v9$(chars);
    };
  }));
  function writeIndentedSmart($receiver, chars) {
    writeIndentSmart($receiver);
    $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + chars.length | 0;
    $receiver.output_0.append_gw00v9$(chars);
  }
  function writeIndentSmart($receiver) {
    var required = 2 * $receiver.level_8be2vx$ | 0;
    if ($receiver.currentIndent_8be2vx$ > required) {
      throw IllegalStateException_init(('Internal error: bad indent ' + $receiver.currentIndent_8be2vx$ + ', expected no bigger than ' + required).toString());
    }
    var times = required - $receiver.currentIndent_8be2vx$ | 0;
    for (var index = 0; index < times; index++) {
      if (32 === 10) {
        $receiver.currentIndent_8be2vx$ = 0;
      } else {
        $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + 1 | 0;
      }
      $receiver.output_0.append_s8itvh$(32);
    }
  }
  var writelnIndented_0 = defineInlineFunction('yamlkt.net.mamoe.yamlkt.internal.writelnIndented_k0d9zm$', wrapFunction(function () {
    var internal = _.net.mamoe.yamlkt.internal;
    return function ($receiver, char) {
      var times = $receiver.level_8be2vx$;
      for (var index = 0; index < times; index++) {
        var chars = internal.INDENT_STRING_8be2vx$;
        $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + chars.length | 0;
        $receiver.output_0.append_gw00v9$(chars);
      }
      if (char === 10) {
        $receiver.currentIndent_8be2vx$ = 0;
      } else {
        $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + 1 | 0;
      }
      $receiver.output_0.append_s8itvh$(char);
      if (10 === 10) {
        $receiver.currentIndent_8be2vx$ = 0;
      } else {
        $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + 1 | 0;
      }
      $receiver.output_0.append_s8itvh$(10);
    };
  }));
  var writeIndent = defineInlineFunction('yamlkt.net.mamoe.yamlkt.internal.writeIndent_k67tv9$', wrapFunction(function () {
    var internal = _.net.mamoe.yamlkt.internal;
    return function ($receiver) {
      var times = $receiver.level_8be2vx$;
      for (var index = 0; index < times; index++) {
        var chars = internal.INDENT_STRING_8be2vx$;
        $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + chars.length | 0;
        $receiver.output_0.append_gw00v9$(chars);
      }
    };
  }));
  var writeIndented_0 = defineInlineFunction('yamlkt.net.mamoe.yamlkt.internal.writeIndented_k0d9zm$', wrapFunction(function () {
    var internal = _.net.mamoe.yamlkt.internal;
    return function ($receiver, char) {
      var times = $receiver.level_8be2vx$;
      for (var index = 0; index < times; index++) {
        var chars = internal.INDENT_STRING_8be2vx$;
        $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + chars.length | 0;
        $receiver.output_0.append_gw00v9$(chars);
      }
      if (char === 10) {
        $receiver.currentIndent_8be2vx$ = 0;
      } else {
        $receiver.currentIndent_8be2vx$ = $receiver.currentIndent_8be2vx$ + 1 | 0;
      }
      $receiver.output_0.append_s8itvh$(char);
    };
  }));
  function serializeImpl($receiver, encoder, value) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18, tmp$_19, tmp$_20, tmp$_21, tmp$_22, tmp$_23, tmp$_24;
    tmp$ = get_js(Kotlin.getKClassFromExpression(value));
    if (equals(tmp$, get_js(PrimitiveClasses$byteClass))) {
      encoder.encodeSerializableValue_tf03ej$(serializer_3(kotlin_js_internal_ByteCompanionObject), typeof (tmp$_0 = value) === 'number' ? tmp$_0 : throwCCE());
    } else if (equals(tmp$, get_js(PrimitiveClasses$shortClass))) {
      encoder.encodeSerializableValue_tf03ej$(serializer_4(kotlin_js_internal_ShortCompanionObject), typeof (tmp$_1 = value) === 'number' ? tmp$_1 : throwCCE());
    } else if (equals(tmp$, get_js(PrimitiveClasses$intClass))) {
      encoder.encodeSerializableValue_tf03ej$(serializer_0(kotlin_js_internal_IntCompanionObject), typeof (tmp$_2 = value) === 'number' ? tmp$_2 : throwCCE());
    } else if (equals(tmp$, get_js(getKClass(Long)))) {
      encoder.encodeSerializableValue_tf03ej$(serializer_6(kotlin_js_internal_LongCompanionObject), Kotlin.isType(tmp$_3 = value, Kotlin.Long) ? tmp$_3 : throwCCE());
    } else if (equals(tmp$, get_js(PrimitiveClasses$floatClass))) {
      encoder.encodeSerializableValue_tf03ej$(serializer_2(kotlin_js_internal_FloatCompanionObject), typeof (tmp$_4 = value) === 'number' ? tmp$_4 : throwCCE());
    } else if (equals(tmp$, get_js(PrimitiveClasses$doubleClass))) {
      encoder.encodeSerializableValue_tf03ej$(serializer_1(kotlin_js_internal_DoubleCompanionObject), typeof (tmp$_5 = value) === 'number' ? tmp$_5 : throwCCE());
    } else if (equals(tmp$, get_js(getKClass(Char)))) {
      encoder.encodeSerializableValue_tf03ej$(serializer_5(kotlin_js_internal_CharCompanionObject), Kotlin.isChar(tmp$_6 = value) ? tmp$_6 : throwCCE());
    } else if (equals(tmp$, get_js(PrimitiveClasses$stringClass))) {
      encoder.encodeSerializableValue_tf03ej$(serializer(kotlin_js_internal_StringCompanionObject), typeof (tmp$_7 = value) === 'string' ? tmp$_7 : throwCCE());
    } else if (equals(tmp$, get_js(PrimitiveClasses$booleanClass))) {
      encoder.encodeSerializableValue_tf03ej$(serializer_7(kotlin_js_internal_BooleanCompanionObject), typeof (tmp$_8 = value) === 'boolean' ? tmp$_8 : throwCCE());
    } else if (equals(tmp$, get_js(PrimitiveClasses$intArrayClass))) {
      encoder.encodeSerializableValue_tf03ej$(IntArraySerializer(), Kotlin.isIntArray(tmp$_9 = value) ? tmp$_9 : throwCCE());
    } else if (equals(tmp$, get_js(PrimitiveClasses$shortArrayClass))) {
      encoder.encodeSerializableValue_tf03ej$(ShortArraySerializer(), Kotlin.isShortArray(tmp$_10 = value) ? tmp$_10 : throwCCE());
    } else if (equals(tmp$, get_js(PrimitiveClasses$byteArrayClass))) {
      encoder.encodeSerializableValue_tf03ej$(ByteArraySerializer(), Kotlin.isByteArray(tmp$_11 = value) ? tmp$_11 : throwCCE());
    } else if (equals(tmp$, get_js(PrimitiveClasses$longArrayClass))) {
      encoder.encodeSerializableValue_tf03ej$(LongArraySerializer(), Kotlin.isLongArray(tmp$_12 = value) ? tmp$_12 : throwCCE());
    } else if (equals(tmp$, get_js(PrimitiveClasses$charArrayClass))) {
      encoder.encodeSerializableValue_tf03ej$(CharArraySerializer(), Kotlin.isCharArray(tmp$_13 = value) ? tmp$_13 : throwCCE());
    } else if (equals(tmp$, get_js(PrimitiveClasses$floatArrayClass))) {
      encoder.encodeSerializableValue_tf03ej$(FloatArraySerializer(), Kotlin.isFloatArray(tmp$_14 = value) ? tmp$_14 : throwCCE());
    } else if (equals(tmp$, get_js(PrimitiveClasses$doubleArrayClass))) {
      encoder.encodeSerializableValue_tf03ej$(DoubleArraySerializer(), Kotlin.isDoubleArray(tmp$_15 = value) ? tmp$_15 : throwCCE());
    } else if (equals(tmp$, get_js(PrimitiveClasses$booleanArrayClass))) {
      encoder.encodeSerializableValue_tf03ej$(BooleanArraySerializer(), Kotlin.isBooleanArray(tmp$_16 = value) ? tmp$_16 : throwCCE());
    } else if (equals(tmp$, get_js(getKClass(Pair)))) {
      encoder.encodeSerializableValue_tf03ej$(YamlDynamicPairSerializer_getInstance(), Kotlin.isType(tmp$_17 = value, Pair) ? tmp$_17 : throwCCE());
    } else if (equals(tmp$, get_js(getKClass(Triple)))) {
      encoder.encodeSerializableValue_tf03ej$(YamlDynamicTripleSerializer_getInstance(), Kotlin.isType(tmp$_18 = value, Triple) ? tmp$_18 : throwCCE());
    } else if (equals(tmp$, get_js(PrimitiveClasses$arrayClass))) {
      encoder.encodeSerializableValue_tf03ej$(AnyTypedArraySerializer_getInstance(), Kotlin.isArray(tmp$_19 = value) ? tmp$_19 : throwCCE());
    } else {
      if (Kotlin.isType(value, Map)) {
        encoder.encodeSerializableValue_tf03ej$(YamlDynamicMapSerializer_getInstance(), Kotlin.isType(tmp$_20 = value, Map) ? tmp$_20 : throwCCE());
      } else if (Kotlin.isType(value, List)) {
        encoder.encodeSerializableValue_tf03ej$(YamlDynamicListSerializer_getInstance(), Kotlin.isType(tmp$_21 = value, List) ? tmp$_21 : throwCCE());
      } else if (Kotlin.isType(value, Map$Entry)) {
        encoder.encodeSerializableValue_tf03ej$(YamlMapEntrySerializer_getInstance(), Kotlin.isType(tmp$_22 = value, Map$Entry) ? tmp$_22 : throwCCE());
      } else {
        var tmp$_25;
        if ((tmp$_24 = (tmp$_23 = serializerOrNull(Kotlin.getKClassFromExpression(value))) == null || Kotlin.isType(tmp$_23, KSerializer) ? tmp$_23 : null) != null)
          tmp$_25 = tmp$_24;
        else {
          throw IllegalStateException_init(('Cannot find serializer for ' + toString(Kotlin.getKClassFromExpression(value).simpleName) + '. Please use specify serializers manually.').toString());
        }
        encoder.encodeSerializableValue_tf03ej$(tmp$_25, value);
      }
    }
  }
  Object.defineProperty(Yaml, 'Default', {
    get: Yaml$Default_getInstance
  });
  $$importsForInline$$.yamlkt = _;
  $$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-js-legacy'] = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy;
  var package$net = _.net || (_.net = {});
  var package$mamoe = package$net.mamoe || (package$net.mamoe = {});
  var package$yamlkt = package$mamoe.yamlkt || (package$mamoe.yamlkt = {});
  package$yamlkt.Yaml = Yaml;
  package$yamlkt.YamlImpl = YamlImpl;
  package$yamlkt.Yaml_wy78km$ = Yaml_0;
  package$yamlkt.parseMapOrNullImpl_gprta1$ = parseMapOrNullImpl;
  package$yamlkt.Comment = Comment;
  Object.defineProperty(YamlBuilder$StringSerialization, 'SINGLE_QUOTATION', {
    get: YamlBuilder$StringSerialization$SINGLE_QUOTATION_getInstance
  });
  Object.defineProperty(YamlBuilder$StringSerialization, 'DOUBLE_QUOTATION', {
    get: YamlBuilder$StringSerialization$DOUBLE_QUOTATION_getInstance
  });
  Object.defineProperty(YamlBuilder$StringSerialization, 'NONE', {
    get: YamlBuilder$StringSerialization$NONE_getInstance
  });
  Object.defineProperty(YamlBuilder$StringSerialization, 'BEST_PERFORMANCE', {
    get: YamlBuilder$StringSerialization$BEST_PERFORMANCE_getInstance
  });
  YamlBuilder.StringSerialization = YamlBuilder$StringSerialization;
  Object.defineProperty(YamlBuilder$NullSerialization, 'TILDE', {
    get: YamlBuilder$NullSerialization$TILDE_getInstance
  });
  Object.defineProperty(YamlBuilder$NullSerialization, 'NULL', {
    get: YamlBuilder$NullSerialization$NULL_getInstance
  });
  YamlBuilder.NullSerialization = YamlBuilder$NullSerialization;
  Object.defineProperty(YamlBuilder$MapSerialization, 'BLOCK_MAP', {
    get: YamlBuilder$MapSerialization$BLOCK_MAP_getInstance
  });
  Object.defineProperty(YamlBuilder$MapSerialization, 'FLOW_MAP', {
    get: YamlBuilder$MapSerialization$FLOW_MAP_getInstance
  });
  YamlBuilder.MapSerialization = YamlBuilder$MapSerialization;
  Object.defineProperty(YamlBuilder$ListSerialization, 'BLOCK_SEQUENCE', {
    get: YamlBuilder$ListSerialization$BLOCK_SEQUENCE_getInstance
  });
  Object.defineProperty(YamlBuilder$ListSerialization, 'FLOW_SEQUENCE', {
    get: YamlBuilder$ListSerialization$FLOW_SEQUENCE_getInstance
  });
  Object.defineProperty(YamlBuilder$ListSerialization, 'AUTO', {
    get: YamlBuilder$ListSerialization$AUTO_getInstance
  });
  YamlBuilder.ListSerialization = YamlBuilder$ListSerialization;
  package$yamlkt.YamlBuilder = YamlBuilder;
  package$yamlkt.YamlConfigurationInternal = YamlConfigurationInternal;
  package$yamlkt.YamlDecodingException = YamlDecodingException;
  Object.defineProperty(package$yamlkt, 'YamlDynamicSerializer', {
    get: YamlDynamicSerializer_getInstance
  });
  Object.defineProperty(YamlElement, 'Companion', {
    get: YamlElement$Companion_getInstance
  });
  package$yamlkt.YamlElement = YamlElement;
  package$yamlkt.toYamlElement_mzud1t$ = toYamlElement;
  package$yamlkt.toYamlElementOrNull_mzud1t$ = toYamlElementOrNull;
  package$yamlkt.isNotNull_21x9ug$ = isNotNull;
  package$yamlkt.asLiteralOrNull_21x9ug$ = asLiteralOrNull;
  package$yamlkt.YamlLiteral = YamlLiteral;
  package$yamlkt.asLiteral_5iuyvf$ = asLiteral;
  package$yamlkt.asPrimitiveOrNull_21x9ug$ = asPrimitiveOrNull;
  package$yamlkt.YamlPrimitive = YamlPrimitive;
  package$yamlkt.asPrimitive_5iuyvf$ = asPrimitive;
  package$yamlkt.get_literalContentOrNull_21x9ug$ = get_literalContentOrNull;
  Object.defineProperty(YamlPrimitive, 'Companion', {
    get: YamlPrimitive$Companion_getInstance
  });
  package$yamlkt.isNull_basc83$ = isNull;
  package$yamlkt.isNotNull_basc83$ = isNotNull_0;
  package$yamlkt.asLiteralOrNull_basc83$ = asLiteralOrNull_0;
  Object.defineProperty(YamlLiteral, 'Companion', {
    get: YamlLiteral$Companion_getInstance
  });
  Object.defineProperty(package$yamlkt, 'YamlNull', {
    get: YamlNull_getInstance
  });
  Object.defineProperty(YamlMap, 'Companion', {
    get: YamlMap$Companion_getInstance
  });
  package$yamlkt.YamlMap = YamlMap;
  package$yamlkt.smartCastPrimitive_lajt7c$ = smartCastPrimitive;
  package$yamlkt.allKeysLiteral_q6yfi0$ = allKeysLiteral;
  package$yamlkt.allKeysPrimitive_q6yfi0$ = allKeysPrimitive;
  package$yamlkt.toContentMap_q6yfi0$ = toContentMap;
  Object.defineProperty(YamlList, 'Companion', {
    get: YamlList$Companion_getInstance
  });
  package$yamlkt.YamlList = YamlList;
  package$yamlkt.yamlListOf_awiu4u$ = yamlListOf;
  package$yamlkt.yamlListOf_yhszz7$ = yamlListOf_0;
  package$yamlkt.toContentList_untbk4$ = toContentList;
  package$yamlkt.joinToYamlString_aurd9x$ = joinToYamlString;
  package$yamlkt.joinToYamlString_dugw28$ = joinToYamlString_0;
  package$yamlkt.asYamlElementOrNullImpl_ntq51o$ = asYamlElementOrNullImpl;
  package$yamlkt.toContent_w8rwtn$ = toContent;
  YamlDecoder.AbstractDecoder = YamlDecoder$AbstractDecoder;
  var package$internal = package$yamlkt.internal || (package$yamlkt.internal = {});
  package$internal.adjustDynamicString_pgzefr$ = adjustDynamicString;
  Object.defineProperty(package$yamlkt, 'YamlNullableDynamicSerializer', {
    get: YamlNullableDynamicSerializer_getInstance
  });
  package$internal.contextualDecodingException_fjiswb$ = contextualDecodingException_4;
  package$internal.contextualDecodingException_y5hiww$ = contextualDecodingException_2;
  package$internal.get_lineNumberAndCurrentLine_btbr4a$ = get_lineNumberAndCurrentLine;
  package$internal.get_lineNumber_btbr4a$ = get_lineNumber;
  package$internal.readLine_btbr4a$ = readLine;
  package$internal.skipLine_btbr4a$ = skipLine;
  package$internal.limitLast_78omls$ = limitLast;
  package$internal.limitFirst_78omls$ = limitFirst;
  package$internal.isLineSeparator_nupfqh$ = isLineSeparator;
  Object.defineProperty(package$internal, 'HexConverter', {
    get: HexConverter_getInstance
  });
  Object.defineProperty(package$internal, 'BinaryConverter', {
    get: BinaryConverter_getInstance
  });
  package$internal.limitToByte_nzsbcz$ = limitToByte;
  package$internal.limitToShort_nzsbcz$ = limitToShort;
  package$internal.limitToInt_nzsbcz$ = limitToInt;
  package$internal.optimizeNull_7efafi$ = optimizeNull;
  package$internal.classSimpleName_8ea4r1$ = classSimpleName;
  Object.defineProperty(package$internal, 'Debugging', {
    get: Debugging_getInstance
  });
  package$internal.debuggingLogDecoder_p90puq$ = debuggingLogDecoder;
  package$internal.IYamlDynamicSerializer = IYamlDynamicSerializer;
  Object.defineProperty(package$internal, 'AnyTypedArraySerializer', {
    get: AnyTypedArraySerializer_getInstance
  });
  Object.defineProperty(package$internal, 'YamlDynamicPairSerializer', {
    get: YamlDynamicPairSerializer_getInstance
  });
  Object.defineProperty(package$internal, 'YamlDynamicTripleSerializer', {
    get: YamlDynamicTripleSerializer_getInstance
  });
  Object.defineProperty(package$internal, 'YamlMapEntrySerializer', {
    get: YamlMapEntrySerializer_getInstance
  });
  Object.defineProperty(package$internal, 'IntTypedArraySerializer', {
    get: IntTypedArraySerializer_getInstance
  });
  Object.defineProperty(package$internal, 'DoubleTypedArraySerializer', {
    get: DoubleTypedArraySerializer_getInstance
  });
  Object.defineProperty(package$internal, 'FloatTypedArraySerializer', {
    get: FloatTypedArraySerializer_getInstance
  });
  Object.defineProperty(package$internal, 'ByteTypedArraySerializer', {
    get: ByteTypedArraySerializer_getInstance
  });
  Object.defineProperty(package$internal, 'ShortTypedArraySerializer', {
    get: ShortTypedArraySerializer_getInstance
  });
  Object.defineProperty(package$internal, 'CharTypedArraySerializer', {
    get: CharTypedArraySerializer_getInstance
  });
  Object.defineProperty(package$internal, 'StringTypedArraySerializer', {
    get: StringTypedArraySerializer_getInstance
  });
  Object.defineProperty(package$internal, 'LongTypedArraySerializer', {
    get: LongTypedArraySerializer_getInstance
  });
  Object.defineProperty(package$internal, 'YamlDynamicMapSerializer', {
    get: YamlDynamicMapSerializer_getInstance
  });
  Object.defineProperty(package$internal, 'YamlDynamicListSerializer', {
    get: YamlDynamicListSerializer_getInstance
  });
  Object.defineProperty(package$internal, 'STRING_8be2vx$', {
    get: function () {
      return STRING;
    }
  });
  Object.defineProperty(package$internal, 'STRING_ESC_8be2vx$', {
    get: function () {
      return STRING_ESC;
    }
  });
  Object.defineProperty(package$internal, 'INVALID_8be2vx$', {
    get: function () {
      return INVALID;
    }
  });
  Object.defineProperty(package$internal, 'UNICODE_ESC_8be2vx$', {
    get: function () {
      return UNICODE_ESC;
    }
  });
  Object.defineProperty(package$internal, 'REPLACEMENT_CHARS_8be2vx$', {
    get: function () {
      return REPLACEMENT_CHARS;
    }
  });
  package$internal.escapeToChar_kcn2v3$ = escapeToChar;
  package$internal.readSingleQuotedString_btbr4a$ = readSingleQuotedString;
  package$internal.readUnquotedString_axudns$ = readUnquotedString;
  package$internal.ensureNotEOF_btbr4a$ = ensureNotEOF;
  package$internal.readDoubleQuotedString_btbr4a$ = readDoubleQuotedString;
  package$internal.useNext_75u3kf$ = useNext;
  package$internal.peekNext_75u3kf$ = peekNext;
  package$internal.isHexDigit_nupfqh$ = isHexDigit;
  package$internal.toEscapedString_u3lrk6$ = toEscapedString;
  package$internal.getQuotationAvailability_7efafi$ = getQuotationAvailability;
  package$internal.InlineEncoder = InlineEncoder;
  package$internal.InlineDecoder = InlineDecoder;
  package$internal.InlineElementDecoder = InlineElementDecoder;
  Object.defineProperty(Token, 'COMMA', {
    get: Token$COMMA_getInstance
  });
  Object.defineProperty(Token, 'COLON', {
    get: Token$COLON_getInstance
  });
  Object.defineProperty(Token, 'MULTILINE_LIST_FLAG', {
    get: Token$MULTILINE_LIST_FLAG_getInstance
  });
  Object.defineProperty(Token, 'LIST_BEGIN', {
    get: Token$LIST_BEGIN_getInstance
  });
  Object.defineProperty(Token, 'LIST_END', {
    get: Token$LIST_END_getInstance
  });
  Object.defineProperty(Token, 'MAP_BEGIN', {
    get: Token$MAP_BEGIN_getInstance
  });
  Object.defineProperty(Token, 'MAP_END', {
    get: Token$MAP_END_getInstance
  });
  Object.defineProperty(Token, 'STRING', {
    get: Token$STRING_getInstance
  });
  Object.defineProperty(Token, 'STRING_NULL', {
    get: Token$STRING_NULL_getInstance
  });
  Object.defineProperty(Token, 'Companion', {
    get: Token$Companion_getInstance
  });
  package$internal.Token = Token;
  Object.defineProperty(package$internal, 'END_OF_FILE_8be2vx$', {
    get: get_END_OF_FILE
  });
  package$internal.StringBufHolder = StringBufHolder;
  package$internal.TokenStream = TokenStream;
  Object.defineProperty(package$internal, 'SINGLE_QUOTATION_CHAR_8be2vx$', {
    get: function () {
      return SINGLE_QUOTATION_CHAR;
    }
  });
  Object.defineProperty(package$internal, 'DOUBLE_QUOTATION_CHAR_8be2vx$', {
    get: function () {
      return DOUBLE_QUOTATION_CHAR;
    }
  });
  package$internal.whileNotEOF_nvp92c$ = whileNotEOF;
  package$internal.skipIf_e9gslo$ = skipIf;
  package$internal.countSkipIf_e9gslo$ = countSkipIf;
  package$internal.whileNotEOFWithBegin_7ag171$ = whileNotEOFWithBegin;
  Object.defineProperty(YamlDecoder$Kind, 'FLOW_CLASS', {
    get: YamlDecoder$Kind$FLOW_CLASS_getInstance
  });
  Object.defineProperty(YamlDecoder$Kind, 'FLOW_MAP', {
    get: YamlDecoder$Kind$FLOW_MAP_getInstance
  });
  Object.defineProperty(YamlDecoder$Kind, 'FLOW_SEQUENCE', {
    get: YamlDecoder$Kind$FLOW_SEQUENCE_getInstance
  });
  Object.defineProperty(YamlDecoder$Kind, 'STRING', {
    get: YamlDecoder$Kind$STRING_getInstance
  });
  Object.defineProperty(YamlDecoder$Kind, 'NULL_STRING', {
    get: YamlDecoder$Kind$NULL_STRING_getInstance
  });
  Object.defineProperty(YamlDecoder$Kind, 'BLOCK_CLASS', {
    get: YamlDecoder$Kind$BLOCK_CLASS_getInstance
  });
  Object.defineProperty(YamlDecoder$Kind, 'BLOCK_MAP', {
    get: YamlDecoder$Kind$BLOCK_MAP_getInstance
  });
  Object.defineProperty(YamlDecoder$Kind, 'BLOCK_SEQUENCE', {
    get: YamlDecoder$Kind$BLOCK_SEQUENCE_getInstance
  });
  Object.defineProperty(YamlDecoder$Kind, 'EMPTY_CLASS', {
    get: YamlDecoder$Kind$EMPTY_CLASS_getInstance
  });
  YamlDecoder.Kind = YamlDecoder$Kind;
  YamlDecoder.IndentedDecoder = YamlDecoder$IndentedDecoder;
  YamlDecoder.EmptyClassDecoder = YamlDecoder$EmptyClassDecoder;
  YamlDecoder.BlockClassDecoder = YamlDecoder$BlockClassDecoder;
  YamlDecoder.BlockMapDecoder = YamlDecoder$BlockMapDecoder;
  YamlDecoder.FlowMapDecoder = YamlDecoder$FlowMapDecoder;
  YamlDecoder.FlowClassDecoder = YamlDecoder$FlowClassDecoder;
  YamlDecoder.FlowSequenceDecoder = YamlDecoder$FlowSequenceDecoder;
  YamlDecoder.BlockSequenceDecoder = YamlDecoder$BlockSequenceDecoder;
  YamlDecoder.YamlStringDecoder = YamlDecoder$YamlStringDecoder;
  YamlDecoder.YamlNullStringDecoder = YamlDecoder$YamlNullStringDecoder;
  Object.defineProperty(YamlDecoder, 'Companion', {
    get: YamlDecoder$Companion_getInstance
  });
  package$internal.YamlDecoder = YamlDecoder;
  package$internal.isOdd_8e50z4$ = isOdd;
  package$internal.getElementIndexOrThrow_luk6xe$ = getElementIndexOrThrow;
  Object.defineProperty(package$internal, 'YamlElementMapSerializer', {
    get: YamlElementMapSerializer_getInstance
  });
  Object.defineProperty(package$internal, 'YamlElementListSerializer', {
    get: YamlElementListSerializer_getInstance
  });
  Object.defineProperty(package$internal, 'YamlElementSerializer', {
    get: YamlElementSerializer_getInstance
  });
  Object.defineProperty(package$internal, 'YamlPrimitiveSerializer', {
    get: YamlPrimitiveSerializer_getInstance
  });
  Object.defineProperty(package$internal, 'YamlLiteralSerializer', {
    get: YamlLiteralSerializer_getInstance
  });
  Object.defineProperty(package$internal, 'YamlNullSerializer', {
    get: YamlNullSerializer_getInstance
  });
  Object.defineProperty(package$internal, 'YamlMapSerializer', {
    get: YamlMapSerializer_getInstance
  });
  Object.defineProperty(package$internal, 'YamlListSerializer', {
    get: YamlListSerializer_getInstance
  });
  YamlEncoder.FlowMapOrClassEncoder = YamlEncoder$FlowMapOrClassEncoder;
  YamlEncoder.FlowSequenceEncoder = YamlEncoder$FlowSequenceEncoder;
  YamlEncoder.EmptySequenceEncoder = YamlEncoder$EmptySequenceEncoder;
  YamlEncoder.BlockSequenceEncoder = YamlEncoder$BlockSequenceEncoder;
  YamlEncoder.BlockMapOrClassEncoder = YamlEncoder$BlockMapOrClassEncoder;
  YamlEncoder.FlowEncoder = YamlEncoder$FlowEncoder;
  YamlEncoder.BlockEncoder = YamlEncoder$BlockEncoder;
  YamlEncoder.AbstractEncoder = YamlEncoder$AbstractEncoder;
  package$internal.YamlEncoder = YamlEncoder;
  Object.defineProperty(package$internal, 'INDENT_STRING_8be2vx$', {
    get: function () {
      return INDENT_STRING;
    }
  });
  package$internal.write_rapfxl$ = write_0;
  package$internal.write_k0d9zm$ = write;
  package$internal.YamlWriter = YamlWriter;
  package$internal.writeln_k67tv9$ = writeln_0;
  package$internal.writeln_k0d9zm$ = writeln;
  package$internal.writeLine_10lxdn$ = writeLine;
  package$internal.writeIndent_k67tv9$ = writeIndent;
  package$internal.writeLineIndented_10lxdn$ = writeLineIndented;
  package$internal.writeln_rapfxl$ = writeln_1;
  package$internal.writeIndented_rapfxl$ = writeIndented;
  package$internal.writelnIndented_rapfxl$ = writelnIndented;
  package$internal.writeIndentedSmart_rapfxl$ = writeIndentedSmart;
  package$internal.writeIndentSmart_k67tv9$ = writeIndentSmart;
  package$internal.writeIndented_k0d9zm$ = writeIndented_0;
  package$internal.writelnIndented_k0d9zm$ = writelnIndented_0;
  package$internal.serializeImpl_kmwczd$ = serializeImpl;
  InlineElementDecoder.prototype.decodeNullableSerializableElement_8viuyw$ = CompositeDecoder.prototype.decodeNullableSerializableElement_8viuyw$;
  InlineElementDecoder.prototype.decodeSerializableElement_12e8id$ = CompositeDecoder.prototype.decodeSerializableElement_12e8id$;
  YamlDecoder$AbstractDecoder.prototype.decodeCollectionSize_24f42q$ = CompositeDecoder.prototype.decodeCollectionSize_24f42q$;
  YamlDecoder$AbstractDecoder.prototype.decodeSequentially = CompositeDecoder.prototype.decodeSequentially;
  YamlDecoder$AbstractDecoder.prototype.decodeNullableSerializableValue_aae3ea$ = Decoder.prototype.decodeNullableSerializableValue_aae3ea$;
  YamlDecoder$AbstractDecoder.prototype.decodeSerializableValue_w63s0f$ = Decoder.prototype.decodeSerializableValue_w63s0f$;
  YamlDecoder$AbstractDecoder.prototype.decodeNullableSerializableElement_8viuyw$ = CompositeDecoder.prototype.decodeNullableSerializableElement_8viuyw$;
  YamlDecoder$AbstractDecoder.prototype.decodeSerializableElement_12e8id$ = CompositeDecoder.prototype.decodeSerializableElement_12e8id$;
  YamlDecoder.prototype.decodeNullableSerializableValue_aae3ea$ = Decoder.prototype.decodeNullableSerializableValue_aae3ea$;
  YamlDecoder.prototype.decodeSerializableValue_w63s0f$ = Decoder.prototype.decodeSerializableValue_w63s0f$;
  YamlEncoder$AbstractEncoder.prototype.encodeNotNullMark = Encoder.prototype.encodeNotNullMark;
  YamlEncoder$AbstractEncoder.prototype.encodeNullableSerializableValue_f4686g$ = Encoder.prototype.encodeNullableSerializableValue_f4686g$;
  YamlEncoder$AbstractEncoder.prototype.encodeSerializableValue_tf03ej$ = Encoder.prototype.encodeSerializableValue_tf03ej$;
  YamlEncoder.prototype.encodeNotNullMark = Encoder.prototype.encodeNotNullMark;
  YamlEncoder.prototype.encodeNullableSerializableValue_f4686g$ = Encoder.prototype.encodeNullableSerializableValue_f4686g$;
  enabled0 = false;
  logIndent0 = 0;
  decodeValue0 = 0;
  LONG_AS_DOUBLE_RANGE = rangeTo(Long$Companion$MIN_VALUE.toNumber(), Long$Companion$MAX_VALUE.toNumber());
  INT_AS_DOUBLE_RANGE = rangeTo(-2147483648, 2147483647);
  ESC2C_MAX = 117;
  STRING = 34;
  STRING_ESC = 92;
  INVALID = toChar(0);
  UNICODE_ESC = 117;
  var $receiver = Kotlin.newArray(128, null);
  for (var i = 0; i <= 15; i++) {
    $receiver[i] = '\\' + 'u000' + i;
  }
  for (var i_0 = 16; i_0 <= 31; i_0++) {
    $receiver[i_0] = '\\' + 'u00' + i_0;
  }
  $receiver[34] = '\\"';
  $receiver[92] = '\\\\';
  $receiver[9] = '\\t';
  $receiver[8] = '\\b';
  $receiver[10] = '\\n';
  $receiver[13] = '\\r';
  $receiver[12] = '\\f';
  REPLACEMENT_CHARS = $receiver;
  SINGLE = 1;
  UNQUOTED = 2;
  DOUBLE_WITHOUT_ESCAPE = 4;
  var all = [Token$COMMA_getInstance(), Token$COLON_getInstance(), Token$LIST_END_getInstance(), Token$LIST_BEGIN_getInstance(), Token$MAP_END_getInstance(), Token$MAP_BEGIN_getInstance(), Token$MULTILINE_LIST_FLAG_getInstance()];
  var tmp$;
  if (all.length === 0)
    throw NoSuchElementException_init();
  var maxValue = unboxChar(all[0].value) | 0;
  tmp$ = get_lastIndex(all);
  for (var i_1 = 1; i_1 <= tmp$; i_1++) {
    var v = unboxChar(all[i_1].value) | 0;
    if (Kotlin.compareTo(maxValue, v) < 0) {
      maxValue = v;
    }
  }
  var $receiver_0 = Kotlin.newArray(maxValue + 1 | 0, null);
  var tmp$_0;
  for (tmp$_0 = 0; tmp$_0 !== all.length; ++tmp$_0) {
    var tokenClass = all[tmp$_0];
    $receiver_0[unboxChar(tokenClass.value) | 0] = tokenClass;
  }
  __values__init = $receiver_0;
  SINGLE_QUOTATION_CHAR = 39;
  DOUBLE_QUOTATION_CHAR = 34;
  INDENT_STRING = '  ';
  Kotlin.defineModule('yamlkt', _);
  return _;
}(module.exports, require('kotlin'), require('kotlinx-serialization-kotlinx-serialization-core-js-legacy')));

//# sourceMappingURL=yamlkt.js.map
