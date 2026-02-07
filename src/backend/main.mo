import Array "mo:core/Array";
import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Map "mo:core/Map";
import Storage "blob-storage/Storage";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import MixinStorage "blob-storage/Mixin";

actor {
  include MixinStorage();

  type Perfume = {
    id : Text;
    name : Text;
    description : Text;
    fragranceNotes : [Text];
    image : Storage.ExternalBlob;
  };

  module Perfume {
    public func compare(perfume1 : Perfume, perfume2 : Perfume) : Order.Order {
      Text.compare(perfume1.name, perfume2.name);
    };
  };

  type ContactInfo = {
    phone : Text;
    email : Text;
    address : Text;
  };

  type SocialLink = {
    platform : Text;
    url : Text;
  };

  let perfumes = Map.empty<Text, Perfume>();
  let socialLinks = Map.empty<Text, SocialLink>();

  var contactInfo : ?ContactInfo = null;

  public shared ({ caller }) func addPerfume(
    id : Text,
    name : Text,
    description : Text,
    fragranceNotes : [Text],
    image : Storage.ExternalBlob,
  ) : async () {
    if (perfumes.containsKey(id)) {
      Runtime.trap("Perfume with this ID already exists");
    };
    let perfume : Perfume = {
      id;
      name;
      description;
      fragranceNotes;
      image;
    };
    perfumes.add(id, perfume);
  };

  public shared ({ caller }) func updatePerfume(
    id : Text,
    name : Text,
    description : Text,
    fragranceNotes : [Text],
    image : Storage.ExternalBlob,
  ) : async () {
    if (not perfumes.containsKey(id)) {
      Runtime.trap("Perfume with this ID does not exist");
    };
    let updatedPerfume : Perfume = {
      id;
      name;
      description;
      fragranceNotes;
      image;
    };
    perfumes.add(id, updatedPerfume);
  };

  public shared ({ caller }) func deletePerfume(id : Text) : async () {
    if (not perfumes.containsKey(id)) {
      Runtime.trap("Perfume with this ID does not exist");
    };
    perfumes.remove(id);
  };

  public query ({ caller }) func getAllPerfumes() : async [Perfume] {
    perfumes.values().toArray().sort();
  };

  public query ({ caller }) func getPerfume(id : Text) : async Perfume {
    switch (perfumes.get(id)) {
      case (null) {
        Runtime.trap("Perfume not found");
      };
      case (?perfume) {
        perfume;
      };
    };
  };

  public shared ({ caller }) func setContactInfo(phone : Text, email : Text, address : Text) : async () {
    contactInfo := ?{
      phone;
      email;
      address;
    };
  };

  public query ({ caller }) func getContactInfo() : async ContactInfo {
    switch (contactInfo) {
      case (null) {
        Runtime.trap("Contact information not available");
      };
      case (?info) {
        info;
      };
    };
  };

  public shared ({ caller }) func addSocialLink(platform : Text, url : Text) : async () {
    let socialLink : SocialLink = {
      platform;
      url;
    };
    socialLinks.add(platform, socialLink);
  };

  public shared ({ caller }) func updateSocialLink(platform : Text, url : Text) : async () {
    let updatedLink : SocialLink = {
      platform;
      url;
    };
    socialLinks.add(platform, updatedLink);
  };

  public shared ({ caller }) func deleteSocialLink(platform : Text) : async () {
    socialLinks.remove(platform);
  };

  public query ({ caller }) func getAllSocialLinks() : async [SocialLink] {
    socialLinks.values().toArray();
  };
};
