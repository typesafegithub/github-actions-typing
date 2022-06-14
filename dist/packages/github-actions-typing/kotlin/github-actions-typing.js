(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlinx-serialization-kotlinx-serialization-core-js-legacy', 'yamlkt'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlinx-serialization-kotlinx-serialization-core-js-legacy'), require('yamlkt'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'github-actions-typing'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'github-actions-typing'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'github-actions-typing'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-legacy' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-legacy' is loaded prior to 'github-actions-typing'.");
    }
    if (typeof yamlkt === 'undefined') {
      throw new Error("Error loading module 'github-actions-typing'. Its dependency 'yamlkt' was not found. Please, check whether 'yamlkt' is loaded prior to 'github-actions-typing'.");
    }
    root['github-actions-typing'] = factory(typeof this['github-actions-typing'] === 'undefined' ? {} : this['github-actions-typing'], kotlin, this['kotlinx-serialization-kotlinx-serialization-core-js-legacy'], yamlkt);
  }
}(this, function (_, Kotlin, $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy, $module$yamlkt) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var NullableSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal.NullableSerializer;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var PluginGeneratedSerialDescriptor = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal.PluginGeneratedSerialDescriptor;
  var equals = Kotlin.equals;
  var internal = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal;
  var LinkedHashMapSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal.LinkedHashMapSerializer;
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  var UnknownFieldException = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.UnknownFieldException;
  var GeneratedSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal.GeneratedSerializer;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Yaml = $module$yamlkt.net.mamoe.yamlkt.Yaml;
  var getKClass = Kotlin.getKClass;
  var createKType = Kotlin.createKType;
  var serializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.serializer_ca95z9$;
  var KSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.KSerializer;
  var throwCCE = Kotlin.throwCCE;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function main() {
    println("Action's manifest:");
    var manifest = readActionManifest();
    println(manifest);
    if (manifest == null) {
      return;
    }
    var parsedManifest = parseManifest(manifest);
    println('========================');
    println(parsedManifest);
  }
  function Manifest(typing, inputs, outputs) {
    Manifest$Companion_getInstance();
    if (typing === void 0)
      typing = null;
    if (inputs === void 0)
      inputs = emptyMap();
    if (outputs === void 0)
      outputs = emptyMap();
    this.typing = typing;
    this.inputs = inputs;
    this.outputs = outputs;
  }
  function Manifest$Companion() {
    Manifest$Companion_instance = this;
  }
  Manifest$Companion.prototype.serializer = function () {
    return Manifest$$serializer_getInstance();
  };
  Manifest$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Manifest$Companion_instance = null;
  function Manifest$Companion_getInstance() {
    if (Manifest$Companion_instance === null) {
      new Manifest$Companion();
    }
    return Manifest$Companion_instance;
  }
  function Manifest$$serializer() {
    this.descriptor_dff55g$_0 = new PluginGeneratedSerialDescriptor('Manifest', this, 3);
    this.descriptor.addElement_ivxn3r$('typing', true);
    this.descriptor.addElement_ivxn3r$('inputs', true);
    this.descriptor.addElement_ivxn3r$('outputs', true);
    Manifest$$serializer_instance = this;
  }
  Object.defineProperty(Manifest$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_dff55g$_0;
    }
  });
  Manifest$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    if (!equals(value.typing, null) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 0))
      output.encodeNullableSerializableElement_qw92s8$(this.descriptor, 0, Typing$$serializer_getInstance(), value.typing);
    if (!equals(value.inputs, emptyMap()) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 1))
      output.encodeSerializableElement_r4qlx7$(this.descriptor, 1, new LinkedHashMapSerializer(internal.StringSerializer, Input$$serializer_getInstance()), value.inputs);
    if (!equals(value.outputs, emptyMap()) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 2))
      output.encodeSerializableElement_r4qlx7$(this.descriptor, 2, new LinkedHashMapSerializer(internal.StringSerializer, Output$$serializer_getInstance()), value.outputs);
    output.endStructure_24f42q$(this.descriptor);
  };
  Manifest$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeNullableSerializableElement_8viuyw$(this.descriptor, 0, Typing$$serializer_getInstance(), local0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeSerializableElement_12e8id$(this.descriptor, 1, new LinkedHashMapSerializer(internal.StringSerializer, Input$$serializer_getInstance()), local1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeSerializableElement_12e8id$(this.descriptor, 2, new LinkedHashMapSerializer(internal.StringSerializer, Output$$serializer_getInstance()), local2);
          bitMask0 |= 4;
          break;
        case -1:
          break loopLabel;
        default:
          throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return Manifest_init(bitMask0, local0, local1, local2, null);
  };
  Manifest$$serializer.prototype.childSerializers = function () {
    return [new NullableSerializer(Typing$$serializer_getInstance()), new LinkedHashMapSerializer(internal.StringSerializer, Input$$serializer_getInstance()), new LinkedHashMapSerializer(internal.StringSerializer, Output$$serializer_getInstance())];
  };
  Manifest$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Manifest$$serializer_instance = null;
  function Manifest$$serializer_getInstance() {
    if (Manifest$$serializer_instance === null) {
      new Manifest$$serializer();
    }
    return Manifest$$serializer_instance;
  }
  function Manifest_init(seen1, typing, inputs, outputs, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Manifest.prototype);
    if ((seen1 & 1) === 0)
      $this.typing = null;
    else
      $this.typing = typing;
    if ((seen1 & 2) === 0)
      $this.inputs = emptyMap();
    else
      $this.inputs = inputs;
    if ((seen1 & 4) === 0)
      $this.outputs = emptyMap();
    else
      $this.outputs = outputs;
    return $this;
  }
  Manifest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Manifest',
    interfaces: []
  };
  Manifest.prototype.component1 = function () {
    return this.typing;
  };
  Manifest.prototype.component2 = function () {
    return this.inputs;
  };
  Manifest.prototype.component3 = function () {
    return this.outputs;
  };
  Manifest.prototype.copy_meatnt$ = function (typing, inputs, outputs) {
    return new Manifest(typing === void 0 ? this.typing : typing, inputs === void 0 ? this.inputs : inputs, outputs === void 0 ? this.outputs : outputs);
  };
  Manifest.prototype.toString = function () {
    return 'Manifest(typing=' + Kotlin.toString(this.typing) + (', inputs=' + Kotlin.toString(this.inputs)) + (', outputs=' + Kotlin.toString(this.outputs)) + ')';
  };
  Manifest.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.typing) | 0;
    result = result * 31 + Kotlin.hashCode(this.inputs) | 0;
    result = result * 31 + Kotlin.hashCode(this.outputs) | 0;
    return result;
  };
  Manifest.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.typing, other.typing) && Kotlin.equals(this.inputs, other.inputs) && Kotlin.equals(this.outputs, other.outputs)))));
  };
  function Typing(specification, version) {
    Typing$Companion_getInstance();
    if (specification === void 0)
      specification = null;
    if (version === void 0)
      version = null;
    this.specification = specification;
    this.version = version;
  }
  function Typing$Companion() {
    Typing$Companion_instance = this;
  }
  Typing$Companion.prototype.serializer = function () {
    return Typing$$serializer_getInstance();
  };
  Typing$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Typing$Companion_instance = null;
  function Typing$Companion_getInstance() {
    if (Typing$Companion_instance === null) {
      new Typing$Companion();
    }
    return Typing$Companion_instance;
  }
  function Typing$$serializer() {
    this.descriptor_qbniu4$_0 = new PluginGeneratedSerialDescriptor('Typing', this, 2);
    this.descriptor.addElement_ivxn3r$('specification', true);
    this.descriptor.addElement_ivxn3r$('version', true);
    Typing$$serializer_instance = this;
  }
  Object.defineProperty(Typing$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_qbniu4$_0;
    }
  });
  Typing$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    if (!equals(value.specification, null) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 0))
      output.encodeNullableSerializableElement_qw92s8$(this.descriptor, 0, internal.StringSerializer, value.specification);
    if (!equals(value.version, null) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 1))
      output.encodeNullableSerializableElement_qw92s8$(this.descriptor, 1, internal.StringSerializer, value.version);
    output.endStructure_24f42q$(this.descriptor);
  };
  Typing$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeNullableSerializableElement_8viuyw$(this.descriptor, 0, internal.StringSerializer, local0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeNullableSerializableElement_8viuyw$(this.descriptor, 1, internal.StringSerializer, local1);
          bitMask0 |= 2;
          break;
        case -1:
          break loopLabel;
        default:
          throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return Typing_init(bitMask0, local0, local1, null);
  };
  Typing$$serializer.prototype.childSerializers = function () {
    return [new NullableSerializer(internal.StringSerializer), new NullableSerializer(internal.StringSerializer)];
  };
  Typing$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Typing$$serializer_instance = null;
  function Typing$$serializer_getInstance() {
    if (Typing$$serializer_instance === null) {
      new Typing$$serializer();
    }
    return Typing$$serializer_instance;
  }
  function Typing_init(seen1, specification, version, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Typing.prototype);
    if ((seen1 & 1) === 0)
      $this.specification = null;
    else
      $this.specification = specification;
    if ((seen1 & 2) === 0)
      $this.version = null;
    else
      $this.version = version;
    return $this;
  }
  Typing.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Typing',
    interfaces: []
  };
  Typing.prototype.component1 = function () {
    return this.specification;
  };
  Typing.prototype.component2 = function () {
    return this.version;
  };
  Typing.prototype.copy_rkkr90$ = function (specification, version) {
    return new Typing(specification === void 0 ? this.specification : specification, version === void 0 ? this.version : version);
  };
  Typing.prototype.toString = function () {
    return 'Typing(specification=' + Kotlin.toString(this.specification) + (', version=' + Kotlin.toString(this.version)) + ')';
  };
  Typing.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.specification) | 0;
    result = result * 31 + Kotlin.hashCode(this.version) | 0;
    return result;
  };
  Typing.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.specification, other.specification) && Kotlin.equals(this.version, other.version)))));
  };
  function Input(type) {
    Input$Companion_getInstance();
    if (type === void 0)
      type = null;
    this.type = type;
  }
  function Input$Companion() {
    Input$Companion_instance = this;
  }
  Input$Companion.prototype.serializer = function () {
    return Input$$serializer_getInstance();
  };
  Input$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Input$Companion_instance = null;
  function Input$Companion_getInstance() {
    if (Input$Companion_instance === null) {
      new Input$Companion();
    }
    return Input$Companion_instance;
  }
  function Input$$serializer() {
    this.descriptor_ahfo41$_0 = new PluginGeneratedSerialDescriptor('Input', this, 1);
    this.descriptor.addElement_ivxn3r$('type', true);
    Input$$serializer_instance = this;
  }
  Object.defineProperty(Input$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_ahfo41$_0;
    }
  });
  Input$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    if (!equals(value.type, null) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 0))
      output.encodeNullableSerializableElement_qw92s8$(this.descriptor, 0, internal.StringSerializer, value.type);
    output.endStructure_24f42q$(this.descriptor);
  };
  Input$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeNullableSerializableElement_8viuyw$(this.descriptor, 0, internal.StringSerializer, local0);
          bitMask0 |= 1;
          break;
        case -1:
          break loopLabel;
        default:
          throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return Input_init(bitMask0, local0, null);
  };
  Input$$serializer.prototype.childSerializers = function () {
    return [new NullableSerializer(internal.StringSerializer)];
  };
  Input$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Input$$serializer_instance = null;
  function Input$$serializer_getInstance() {
    if (Input$$serializer_instance === null) {
      new Input$$serializer();
    }
    return Input$$serializer_instance;
  }
  function Input_init(seen1, type, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Input.prototype);
    if ((seen1 & 1) === 0)
      $this.type = null;
    else
      $this.type = type;
    return $this;
  }
  Input.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Input',
    interfaces: []
  };
  Input.prototype.component1 = function () {
    return this.type;
  };
  Input.prototype.copy_pdl1vj$ = function (type) {
    return new Input(type === void 0 ? this.type : type);
  };
  Input.prototype.toString = function () {
    return 'Input(type=' + Kotlin.toString(this.type) + ')';
  };
  Input.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    return result;
  };
  Input.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.type, other.type))));
  };
  function Output(type) {
    Output$Companion_getInstance();
    if (type === void 0)
      type = null;
    this.type = type;
  }
  function Output$Companion() {
    Output$Companion_instance = this;
  }
  Output$Companion.prototype.serializer = function () {
    return Output$$serializer_getInstance();
  };
  Output$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Output$Companion_instance = null;
  function Output$Companion_getInstance() {
    if (Output$Companion_instance === null) {
      new Output$Companion();
    }
    return Output$Companion_instance;
  }
  function Output$$serializer() {
    this.descriptor_du54ka$_0 = new PluginGeneratedSerialDescriptor('Output', this, 1);
    this.descriptor.addElement_ivxn3r$('type', true);
    Output$$serializer_instance = this;
  }
  Object.defineProperty(Output$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_du54ka$_0;
    }
  });
  Output$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    if (!equals(value.type, null) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 0))
      output.encodeNullableSerializableElement_qw92s8$(this.descriptor, 0, internal.StringSerializer, value.type);
    output.endStructure_24f42q$(this.descriptor);
  };
  Output$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeNullableSerializableElement_8viuyw$(this.descriptor, 0, internal.StringSerializer, local0);
          bitMask0 |= 1;
          break;
        case -1:
          break loopLabel;
        default:
          throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return Output_init(bitMask0, local0, null);
  };
  Output$$serializer.prototype.childSerializers = function () {
    return [new NullableSerializer(internal.StringSerializer)];
  };
  Output$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Output$$serializer_instance = null;
  function Output$$serializer_getInstance() {
    if (Output$$serializer_instance === null) {
      new Output$$serializer();
    }
    return Output$$serializer_instance;
  }
  function Output_init(seen1, type, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Output.prototype);
    if ((seen1 & 1) === 0)
      $this.type = null;
    else
      $this.type = type;
    return $this;
  }
  Output.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Output',
    interfaces: []
  };
  Output.prototype.component1 = function () {
    return this.type;
  };
  Output.prototype.copy_pdl1vj$ = function (type) {
    return new Output(type === void 0 ? this.type : type);
  };
  Output.prototype.toString = function () {
    return 'Output(type=' + Kotlin.toString(this.type) + ')';
  };
  Output.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    return result;
  };
  Output.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.type, other.type))));
  };
  function parseManifest(manifestString) {
    var $receiver = Yaml.Default;
    var tmp$;
    return $receiver.decodeFromString_awif5v$(Kotlin.isType(tmp$ = serializer($receiver.serializersModule, createKType(getKClass(Manifest), [], false)), KSerializer) ? tmp$ : throwCCE(), manifestString);
  }
  var fs;
  function readActionManifest() {
    var tmp$;
    var $receiver = listOf(['yaml', 'yml']);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$('action.' + item);
    }
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_1;
      tmp$_1 = destination.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        if (fileExists(element)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return (tmp$ = firstOrNull$result) != null ? readTextFileAsUtf8(tmp$) : null;
  }
  function fileExists(path) {
    var tmp$;
    return typeof (tmp$ = fs.existsSync(path)) === 'boolean' ? tmp$ : throwCCE();
  }
  function readTextFileAsUtf8(path) {
    var tmp$;
    return typeof (tmp$ = fs.readFileSync(path, 'utf8')) === 'string' ? tmp$ : throwCCE();
  }
  _.main = main;
  Object.defineProperty(Manifest, 'Companion', {
    get: Manifest$Companion_getInstance
  });
  Object.defineProperty(Manifest, '$serializer', {
    get: Manifest$$serializer_getInstance
  });
  _.Manifest_init_p61tak$ = Manifest_init;
  _.Manifest = Manifest;
  Object.defineProperty(Typing, 'Companion', {
    get: Typing$Companion_getInstance
  });
  Object.defineProperty(Typing, '$serializer', {
    get: Typing$$serializer_getInstance
  });
  _.Typing_init_1jgqbb$ = Typing_init;
  _.Typing = Typing;
  Object.defineProperty(Input, 'Companion', {
    get: Input$Companion_getInstance
  });
  Object.defineProperty(Input, '$serializer', {
    get: Input$$serializer_getInstance
  });
  _.Input_init_q11ckg$ = Input_init;
  _.Input = Input;
  Object.defineProperty(Output, 'Companion', {
    get: Output$Companion_getInstance
  });
  Object.defineProperty(Output, '$serializer', {
    get: Output$$serializer_getInstance
  });
  _.Output_init_q11ckg$ = Output_init;
  _.Output = Output;
  $$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-js-legacy'] = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy;
  _.parseManifest_61zpoe$ = parseManifest;
  Object.defineProperty(_, 'fs', {
    get: function () {
      return fs;
    }
  });
  _.readActionManifest = readActionManifest;
  Manifest$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  Typing$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  Input$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  Output$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  fs = require('fs');
  main();
  Kotlin.defineModule('github-actions-typing', _);
  return _;
}));

//# sourceMappingURL=github-actions-typing.js.map
