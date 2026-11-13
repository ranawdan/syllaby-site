import test from 'node:test';
import assert from 'node:assert/strict';
import {
  nextSlide,
  prevSlide,
  toggleFaqIndex,
  getStepProgressPercent,
  toggleAspectRatio,
  getHeroDemoPhase,
} from './syllabyLogic';
import {
  CTA_AFFILIATE_URL,
  HERO_CONTENT,
  PAIN_POINTS_CONTENT,
  PARADIGM_SHIFT_CONTENT,
  SOLUTION_CONTENT,
  HOW_IT_WORKS_CONTENT,
  FEATURES_CONTENT,
  COMPARISON_CONTENT,
  SOCIAL_PROOF_CONTENT,
  FAQ_CONTENT,
  FINAL_CTA_CONTENT,
} from '../data/syllabyContent';

test('carousel navigation wraps cleanly across boundaries', () => {
  assert.equal(nextSlide(0, 5), 1);
  assert.equal(nextSlide(4, 5), 0);
  assert.equal(prevSlide(0, 5), 4);
  assert.equal(prevSlide(3, 5), 2);
  assert.equal(nextSlide(0, 0), 0);
});

test('FAQ accordion toggles open and closed states accurately', () => {
  assert.equal(toggleFaqIndex(null, 1), 1);
  assert.equal(toggleFaqIndex(1, 1), null);
  assert.equal(toggleFaqIndex(1, 2), 2);
});

test('workflow progress percent clamps and scales correctly across 4 steps', () => {
  assert.equal(getStepProgressPercent(0, 4), 0);
  assert.equal(getStepProgressPercent(1, 4), 33);
  assert.equal(getStepProgressPercent(2, 4), 67);
  assert.equal(getStepProgressPercent(3, 4), 100);
  assert.equal(getStepProgressPercent(10, 4), 100);
});

test('aspect ratio mode toggles between 9:16 and 16:9', () => {
  assert.equal(toggleAspectRatio('9:16'), '16:9');
  assert.equal(toggleAspectRatio('16:9'), '9:16');
});

test('hero demo animation phases advance deterministically over 9.5s loop', () => {
  const typing = getHeroDemoPhase(1200);
  assert.equal(typing.phase, 'typing');
  assert.ok(typing.typedLength > 0 && typing.typedLength < 31);

  const generating = getHeroDemoPhase(2700);
  assert.equal(generating.phase, 'generating');

  const output = getHeroDemoPhase(5000);
  assert.equal(output.phase, 'output');
  assert.equal(output.typedLength, 31);
});

test('verbatim content and affiliate link requirements are preserved', () => {
  assert.equal(CTA_AFFILIATE_URL, 'https://syllaby.io/?via=muhammad-a2aa32');
  assert.equal(HERO_CONTENT.visualDemo.promptText, '5 Mind-Blowing Facts About Space');
  assert.equal(PAIN_POINTS_CONTENT.creatorRoadblocks.length, 5);
  assert.equal(PARADIGM_SHIFT_CONTENT.fomoCalloutBoxes.length, 3);
  assert.equal(SOLUTION_CONTENT.floatingUiBadges.length, 4);
  assert.equal(HOW_IT_WORKS_CONTENT.steps.length, 4);
  assert.equal(FEATURES_CONTENT.featureBlocks.length, 5);
  assert.equal(COMPARISON_CONTENT.tableRows.length, 5);
  assert.equal(SOCIAL_PROOF_CONTENT.carouselItems.length, 5);
  assert.equal(SOCIAL_PROOF_CONTENT.userTestimonials.length, 3);
  assert.equal(FAQ_CONTENT.faqs.length, 4);
  assert.equal(FINAL_CTA_CONTENT.riskReversalBullets.length, 3);
});
